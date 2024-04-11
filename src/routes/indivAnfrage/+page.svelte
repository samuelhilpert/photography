<script>

    // import von Bildern und flowbite svelte components
    import auto from "$lib/img/1709463717041.jpg";
    import pferd from "$lib/img/img.jpg";
    import mensch from "$lib/img/img_1.jpg";
    import pferdBewegung from "$lib/img/IMG_1462.jpg";
    import hundPortrait from "$lib/img/img_2.jpg";
    import pferdMensch from "$lib/img/IMG_5141-Edit.jpg";
    import carInMovement from "$lib/img/carinmove.jpg";
    import porsche from "$lib/img/porsche.jpg";
    import theke from "$lib/img/theke.jpg";
    import natur from "$lib/img/natur.jpg";
    import streetStyle from "$lib/img/streetstyle.jpg";
    import {Accordion, AccordionItem, Alert, Button, Checkbox, Input, Label, Radio, Drawer, CloseButton} from "flowbite-svelte";
    import {InfoCircleSolid} from "flowbite-svelte-icons";
    import { sineIn } from 'svelte/easing';

    let hidden8 = true;
    let transitionParamsBottom = {
        y: 320,
        duration: 200,
        easing: sineIn
    };

    export let form;


    // erstellen von Variablen
    let mailtext = "";
    let kalkulierterPreis = "";
    let vorname = "";
    let nachname = "";
    let mailadresse = "";
    let shootingDatum = "";
    let anzahlBilder = "1";
    let anzahlStunden = "1";
    let selectedMotiv;
    let selectedKategorie;
    let isAutoSelected = false;
    let isTierSelected = false;
    let isMenschSelected = false;
    let showButton = false;
    let isChecked = false;
    let previousN = anzahlBilder;
    let previousM = anzahlStunden;


    // Funktionen für Speicherung der Eingaben in den Variablen
    function getVornamen(event) {
        vorname = event.target.value;
        updateMailText();
        checkPflichtangaben();
    }

    function getNachnamen(event) {
        nachname = event.target.value;
        updateMailText();
        checkPflichtangaben();
    }

    function getMail(event) {
        mailadresse = event.target.value;
        updateMailText();
        checkPflichtangaben();
    }

    function getShootingDate(event) {
        shootingDatum = event.target.value;
        updateMailText();
        checkPflichtangaben();
    }

    function getBilder(event) {
        anzahlBilder = event.target.value;
        updateMailText();
        checkPflichtangaben();
    }

    function getStunden(event) {
        anzahlStunden = event.target.value;
        updateMailText();
        checkPflichtangaben();
    }

    function updateMailText() {
        mailtext = `Du hast eine neue Anfrage von ${vorname} ${nachname} erhalten.\n\nHier sind die Details: \nDer Kunde wünscht sich ein Shooting mit einem ${selectedMotiv}.\nDie gewünschte Bildart ist ${selectedKategorie}.\nDer Kunde wünscht sich ${anzahlBilder} Bilder und will ${anzahlStunden} Stunden shooten.\nDer Kunde kann am ${shootingDatum} das Shooting durchführen und seine Mail-Adresse lautet ${mailadresse}.`;
    }


    // Funktionen für die Auswahl der Kategorie
    function handleMotivChange(event) {
        const selectedValueRadio = event.target.value;

        switch (selectedValueRadio) {
            case 'Auto':
                isAutoSelected = true;
                isTierSelected = false;
                isMenschSelected = false;
                break;
            case 'Tier':
                isAutoSelected = false;
                isTierSelected = true;
                isMenschSelected = false;
                break;
            case 'Mensch':
                isAutoSelected = false;
                isTierSelected = false;
                isMenschSelected = true;

                break;


        }

    }

    // Funktionen zum Senden der Daten an die Datenbank
    async function sendIndividuelleAnfrage() {

        const API_URL = "https://sasvserver.azurewebsites.net/InsertIndividuelleAnfragen"; // Ersetzen Sie dies mit Ihrer tatsächlichen API-URL

        const response = await fetch(API_URL, {
            method: "POST",

            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                vorname: vorname,
                nachname: nachname,
                email: mailadresse,
                motiv: selectedMotiv,
                kategorie: implodeArray(selectedKategorie),
                stunden: anzahlStunden,
                bilder: anzahlBilder,
                tag: shootingDatum,
                kosten: kalkulierterPreis,

            }),


        });




    }

    // Aufruf der Funktion zum Senden der Daten an die Datenbank
    async function AnfrageSenden() {
        await calculatePrice();
        sendIndividuelleAnfrage();
        setTimeout(sendMail, 1000);

    }


    // Funktion zum Senden der Mail
    function sendMail() {
        document.getElementById('sendmail1').dispatchEvent(new Event('click'));
    }

    // Funktion zum Berechnen des Preises
    async function calculatePrice() {

        const API_URL = "https://sasvserver.azurewebsites.net/calculatePrice";

        const response = await fetch(API_URL, {
            method: "POST",

            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                category: selectedMotiv,
                motiv: selectedKategorie,
                stunden: anzahlStunden,
                bilder: anzahlBilder,

            }),


        });
        kalkulierterPreis = await response.json();



    }

    // Funktion zum Zusammenfügen eines Arrays in einen String
    function implodeArray(array) {
        let result = '';
        for (let i = 0; i < array.length; i++) {
            result += array[i];
            if (i !== array.length - 1) {
                result += ', ';
            }
        }
        return result;
    }


    // Funktion, die aufgerufen wird, wenn sich der Status einer Checkbox ändert
    function onCheckboxChange(event) {
        isChecked = event.target.checked;
        checkPflichtangaben();

    }

    // Funktion, die prüft, ob alle Eingaben gemacht wurden
    function checkPflichtangaben() {
        showButton = vorname !== "" && nachname !== "" && mailadresse !== "" && shootingDatum !== "" && anzahlBilder !== "" && anzahlStunden !== "" && selectedMotiv !== "" && selectedKategorie !== "" && isChecked === true;
    }

    shootingDatum = new Date().toISOString().split('T')[0];




    function validatorBilder(nodeBilder, valueBilder){
        return{
            update(valueBilder){
                anzahlBilder = valueBilder === null || anzahlBilder < nodeBilder.min ? previousN : parseInt(valueBilder);
                previousN = anzahlBilder;
            }
        }
    }

    function validatorStunden(nodeStunden, valueStunden){
        return{
            update(valueStunden){
                anzahlStunden = valueStunden === null || anzahlStunden < nodeStunden.min ? previousM : parseInt(valueStunden);
                previousM = anzahlStunden;
            }
        }
    }

</script>
<main class="content" style="position: relative">
    <!-- Anzeigen einer Erfolgsmeldung wenn Mail verschickt -->
    {#if form?.success}
        <Alert color="dark" dismissable>
            <InfoCircleSolid slot="icon" class="w-4 h-4"/>
            Deine Anfrage wurde erfolgreich übermittelt. Ich werde mich in Kürze bei dir melden.
            <Button color="dark" slot="close-button" size="xs" let:close on:click={close} class="ms-auto">Schließen
            </Button>
        </Alert>
    {/if}

    <!-- Überschrift -->
    <div class="container h-full mx-auto flex justify-center items-center mt-4">
        <div class="space-y-5">
            <h1><span class="text-5xl text-text">Deine individuelle</span>  <span
                    class="text-5xl text-accent">Anfrage</span></h1>

        </div>


    </div>

    <!-- Komponenten für die Auswahl der Kategorie, des Motivs, des Umfangs und der Kontaktdaten -->
    <div class="container mx-auto flex flex-row justify-content: center gap-4 pt-4">
        <!-- Accordion für die Auswahl des Motives -->
        <div class="flex-1 border rounded-lg shadow-md bg-text ">
            <Accordion>
                <AccordionItem open>
                    <span slot="header">Welches Motiv stellst du dir vor?</span>
                    <div class="container mx-auto flex flex-row justify-content: center gap-4">

                        <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                            <img alt='banner' class="h-40 rounded-lg mx-auto" src={auto}/>
                            <Radio bind:group={selectedMotiv} class="flex justify-center text-lg" color="red"
                                   name="category" on:change={handleMotivChange} value="Auto">Auto
                            </Radio>

                        </div>

                        <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                            <img alt='banner' class="h-40 rounded-lg mx-auto" src={pferd}/>
                            <Radio bind:group={selectedMotiv} class="flex justify-center text-lg" color="red"
                                   name="category" on:change={handleMotivChange} value="Tier">Tier
                            </Radio>

                        </div>
                        <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                            <img alt='banner' class="h-40 rounded-lg mx-auto" src={mensch}/>
                            <Radio bind:group={selectedMotiv} class="flex justify-center text-lg" color="red"
                                   name="category" on:change={handleMotivChange} value="Mensch">Mensch
                            </Radio>
                        </div>
                    </div>
                </AccordionItem>
                <!-- Accordion für die Auswahl der Kategorie -->
                <AccordionItem>
                    <span slot="header">Was stellst du dir da vor? (Mehrfachauswahl möglich)</span>

                    {#if isTierSelected}
                        <div class="container mx-auto flex flex-row justify-content: center gap-4">

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={pferdBewegung} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedKategorie}
                                          value="in Bewegung">in Bewegung
                                </Checkbox>


                            </div>

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={hundPortrait} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedKategorie}
                                          value="Portrait">Portrait
                                </Checkbox>


                            </div>
                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={pferdMensch} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedKategorie}
                                          value="Portrait mit Mensch">Portrait mit Mensch
                                </Checkbox>

                            </div>
                        </div>
                    {/if}
                    {#if isAutoSelected}

                        <div class="container mx-auto flex flex-row justify-content: center gap-4">

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={porsche} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedKategorie}
                                          value="Portrait">Portrait
                                </Checkbox>

                            </div>

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={carInMovement} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedKategorie}
                                          value="inBewegung">in Bewegung
                                </Checkbox>

                            </div>
                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={theke} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedKategorie}
                                          value="Detail">Detailaufnahme
                                </Checkbox>
                            </div>
                        </div>
                    {/if}
                    {#if isMenschSelected}
                        <div class="container mx-auto flex flex-row justify-content: center gap-4">

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={natur} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedKategorie}
                                          value="outdoor">Outdoor
                                </Checkbox>
                            </div>

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={streetStyle} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedKategorie}
                                          value="streetstyle">Street Style
                                </Checkbox>

                            </div>

                        </div>
                    {/if}

                </AccordionItem>
                <!-- Accordion für die Auswahl des Umfangs -->
                <AccordionItem>
                    <span slot="header">Welchen Umfang stellst du dir vor?</span>
                    <div class="container mx-auto flex flex-row justify-content: center gap-4">

                        <div class="flex flex-row p-4 border rounded-lg shadow-md bg-text text-center">
                            <Label class="my-auto">Anzahl Stunden</Label>
                            <input use:validatorStunden={anzahlStunden} class="w-full rounded-xl border-gray-300" value={anzahlStunden} on:input={getStunden} type="number" min="1"/>
                        </div>


                        <div class="flex flex-row p-4 border rounded-lg shadow-md bg-text text-center">
                            <Label class="my-auto">Anzahl Bilder</Label>
                            <input use:validatorBilder={anzahlBilder} class="w-full rounded-xl border-gray-300" value={anzahlBilder} on:input={getBilder} type="number" min="1"  />
                        </div>
                        <div class="flex flex-row p-4 border rounded-lg shadow-md bg-text text-center">
                            <Label class="my-auto">Shooting Tag</Label>
                            <Input class="w-full" value={shootingDatum} on:input={getShootingDate} type="date" min={new Date().toISOString().split('T')[0]} />
                        </div>
                    </div>

                </AccordionItem>
                <!-- Accordion für die Eingabe der Kontaktdaten -->
                <AccordionItem>
                    <span slot="header">Kontaktdaten</span>
                    <div class="flex w-full  rounded-lg   pl-3 pr-3">
                        <div class="flex gap-4 w-full mt-5 mb-5">
                            <Input class="w-full" id="vorname" on:input={getVornamen} value={vorname} placeholder="Vorname" size="lg"/>
                            <Input class="w-full" id="nachname" on:input={getNachnamen} value={nachname} placeholder="Nachname"
                                   size="lg"/>

                        </div>
                    </div>
                    <div class="container mx-auto flex flex-row justify-content: center gap-4">


                        <Input class="w-full m-3" id="mail" value={mailadresse} on:input={getMail} placeholder="E-Mail" size="lg"
                               type="mail" />
                    </div>
                    <div class="container mx-auto flex flex-row justify-content: center gap-4">
                        <Checkbox bind:checked={isChecked} class="flex justify-center text-lg mx-auto" color="red"
                                  on:change={onCheckboxChange}>Ich willige der Datenverarbeitung gemäß der&nbsp<a
                                class="font-bold" href="../datenschutz">Datenschutzerklärung</a>&nbspein.
                        </Checkbox>
                    </div>
                    <p class="flex justify-center text-lg text-background">Mit dem Abschicken der Anfrage stimme ich
                        den&nbsp<a class="font-bold" href="../agb">AGB</a>&nbspzu. </p>
                </AccordionItem>
            </Accordion>

            <!-- Anzeigen des Preises -->
            <div class="text-background text-center font-bold text-xl mb-1 mt-1"> Dein individuelles
                Angebot: {kalkulierterPreis} €
            </div>
        </div>


    </div>

    <div class="container h-full mx-auto flex justify-center items-center mt-4 mb-10 gap-4">
        <Button class="bg-accent text-background hover:bg-text hover:text-background" href="../overviewAnfrage">zurück
        </Button>
        {#if (showButton)}
            <Button class="bg-accent text-background hover:bg-text hover:text-background" on:click={AnfrageSenden}>Anfrage
                senden
            </Button>
        {/if}
        <Button class="bg-accent text-background hover:bg-text hover:text-background" on:click={calculatePrice}>Preis
            berechnen
        </Button>
    </div>


    <div class="text-center mb-20">
        <Button class="bg-secondary text-text hover:bg-accent hover:text-background" on:click={() => (hidden8 = false)}>Zeige mehr Informationen zur individuellen Anfrage</Button>
    </div>

    <Drawer placement="bottom" width="w-full" transitionType="fly" transitionParams={transitionParamsBottom} bind:hidden={hidden8} id="sidebar8">
        <div class="flex items-center">
            <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
                <InfoCircleSolid class="w-4 h-4 me-2.5" />Info
            </h5>
            <CloseButton on:click={() => (hidden8 = true)} class="mb-4 dark:text-white" />
        </div>
        <p>
            Hier kannst du eine individuelle Anfrage stellen. Wähle die Kategorie, das Motiv, den Umfang und gib deine Kontaktdaten ein. Nach dem Absenden der Anfrage erhältst du ein individuelles Angebot.</p> <p>Du kannst auch den Preis berechnen lassen, während du deine Auswahl triffst bzw. bevor du die Anfrage abschickst. Dieser Preis ist der finale Preis, sollte die Anfrage angenommen werden, exklusive eventueller Änderungen oder Zusatzleistungen.
        </p>
        <p>Bevor du eine Abfrage abschicken kannst, musst du alle Felder ausgefüllt haben.</p>
        <p>Es handelt sich nur um eine Anfrage und stellt noch keinen Vertrag da. Sobald ich die Anfrage annehme, schicke ich dir eine Mail mit der Bestätigung des Auftrages. Sobald du mir diese bestätigst, besteht ein Vertrag.</p>

    </Drawer>





    <!-- Formular zum Senden der Mail -->
    <div class="wrapper hidden">
        <form class="container" method="POST">
            <button class="text-accent hidden" id="sendmail1" type="submit">Send</button>
            <div>
                <div class="input">
                    <input name="to" type="email" value="samuelhilpert@web.de"/>
                </div>
                <div class="input">
                    <input name="subject" type="text" value="Du hast eine neue Anfrage: Individuelle Anfrage"/>
                </div>
                <div class="input">
                    <textarea name="body" rows="6" value="{mailtext}"/>
                </div>
            </div>

        </form>
    </div>

</main>