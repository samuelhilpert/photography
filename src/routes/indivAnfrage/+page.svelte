<script>

    // import von Bildern und flowbite svelte components
    import auto from "$lib/img/1709463717041.jpg";
    import pferd from "$lib/img/img.png";
    import mensch from "$lib/img/img_1.png";
    import pferdbewegung from "$lib/img/IMG_1462.png";
    import hundportrait from "$lib/img/img_2.png";
    import pferdmensch from "$lib/img/IMG_5141-Edit.jpg";
    import carinmovement from "$lib/img/carinmove.jpeg";
    import porsche from "$lib/img/porsche.jpeg";
    import theke from "$lib/img/theke.jpeg";
    import natur from "$lib/img/natur.jpeg";
    import streetstyle from "$lib/img/streetstyle.jpeg";
    import {Accordion, AccordionItem, Alert, Button, Checkbox, Input, Label, Radio} from "flowbite-svelte";
    import {InfoCircleSolid} from "flowbite-svelte-icons";

    export let form;


    // erstellen von Variablen
    let test = "";
    let pricecalculate = "";
    let getvor = "";
    let getnach = "";
    let getmail1 = "";
    let getdate1 = "";
    let getbild = "";
    let getstunden = "";
    let selectedCategory;
    let selectedtier;
    let isAutoSelected = false;
    let isTierSelected = false;
    let isMenschSelected = false;
    let showbutton = false;
    let isChecked = false;


    // Funktionen für Speicherung der Eingaben in den Variablen
    function getvornamen(event) {
        getvor = event.target.value;
        updateTest();
        checkall();
    }

    function getnachnamen(event) {
        getnach = event.target.value;
        updateTest();
        checkall();
    }

    function getmail(event) {
        getmail1 = event.target.value;
        updateTest();
        checkall();
    }

    function getdate(event) {
        getdate1 = event.target.value;
        updateTest();
        checkall();
    }

    function getBilder(event) {
        getbild = event.target.value;
        updateTest();
        checkall();
    }

    function getStunden(event) {
        getstunden = event.target.value;
        updateTest();
        checkall();
    }

    function updateTest() {
        test = `Du hast eine neue Anfrage von ${getvor} ${getnach} erhalten.\n\nHier sind die Details: \nDer Kunde wünscht sich ein Shooting mit einem ${selectedCategory}.\nDie gewünschte Bildart ist ${selectedtier}.\nDer Kunde wünscht sich ${getbild} Bilder und will ${getstunden} Stunden shooten.\nDer Kunde kann am ${getdate1} das Shooting durchführen und seine Mail-Adresse lautet ${getmail1}.`;
    }


    // Funktionen für die Auswahl der Kategorie
    function handleRadioChange(event) {
        const selectedValue = event.target.value;

        switch (selectedValue) {
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
    async function sendData1() {

        const API_URL = "https://sasvserver.azurewebsites.net/InsertIndividuelleAnfragen"; // Ersetzen Sie dies mit Ihrer tatsächlichen API-URL

        const response = await fetch(API_URL, {
            method: "POST",

            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                vorname: getvor,
                nachname: getnach,
                email: getmail1,
                kategorie: selectedCategory,
                motiv: implodeArray(selectedtier),
                stunden: getstunden,
                bilder: getbild,
                tag: getdate1,
                kosten: pricecalculate,

            }),

        });


    }

    // Aufruf der Funktion zum Senden der Daten an die Datenbank
    async function handleClick() {
        await calculatePrice();
        sendData1();
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
                category: selectedCategory,
                motiv: selectedtier,
                stunden: getstunden,
                bilder: getbild,

            }),


        });
        pricecalculate = await response.json();
        console.log(pricecalculate);


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
        checkall();

    }

    // Funktion, die prüft, ob alle Eingaben gemacht wurden
    function checkall() {
        showbutton = getvor !== "" && getnach !== "" && getmail1 !== "" && getdate1 !== "" && getbild !== "" && getstunden !== "" && selectedCategory !== "" && selectedtier !== "" && isChecked === true;
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
            <h1><span class="text-5xl text-text">Deine individuelle</span> <span
                    class="text-5xl text-accent"> Anfrage</span></h1>

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
                            <Radio bind:group={selectedCategory} class="flex justify-center text-lg" color="red"
                                   name="category" on:change={handleRadioChange} value="Auto">Auto
                            </Radio>

                        </div>

                        <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                            <img alt='banner' class="h-40 rounded-lg mx-auto" src={pferd}/>
                            <Radio bind:group={selectedCategory} class="flex justify-center text-lg" color="red"
                                   name="category" on:change={handleRadioChange} value="Tier">Tier
                            </Radio>

                        </div>
                        <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                            <img alt='banner' class="h-40 rounded-lg mx-auto" src={mensch}/>
                            <Radio bind:group={selectedCategory} class="flex justify-center text-lg" color="red"
                                   name="category" on:change={handleRadioChange} value="Mensch">Mensch
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
                                <img src={pferdbewegung} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedtier}
                                          value="in Bewegung">in Bewegung
                                </Checkbox>


                            </div>

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={hundportrait} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedtier}
                                          value="Portrait">Portrait
                                </Checkbox>


                            </div>
                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={pferdmensch} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedtier}
                                          value="Portrait mit Mensch">Portrait mit Mensch
                                </Checkbox>

                            </div>
                        </div>
                    {/if}
                    {#if isAutoSelected}

                        <div class="container mx-auto flex flex-row justify-content: center gap-4">

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={porsche} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedtier}
                                          value="Portrait">Portrait
                                </Checkbox>

                            </div>

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={carinmovement} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedtier}
                                          value="inBewegung">in Bewegung
                                </Checkbox>

                            </div>
                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={theke} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedtier}
                                          value="Detail">Detailaufnahme
                                </Checkbox>
                            </div>
                        </div>
                    {/if}
                    {#if isMenschSelected}
                        <div class="container mx-auto flex flex-row justify-content: center gap-4">

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={natur} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedtier}
                                          value="outdoor">Outdoor
                                </Checkbox>
                            </div>

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={streetstyle} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedtier}
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
                            <Input class="w-full" on:input={getStunden} type="number"/>
                        </div>


                        <div class="flex flex-row p-4 border rounded-lg shadow-md bg-text text-center">
                            <Label class="my-auto">Anzahl Bilder</Label>
                            <Input class="w-full" on:input={getBilder} type="number"/>
                        </div>
                        <div class="flex flex-row p-4 border rounded-lg shadow-md bg-text text-center">
                            <Label class="my-auto">Shooting Tag</Label>
                            <Input class="w-full" on:input={getdate} type="date"/>
                        </div>
                    </div>

                </AccordionItem>
                <!-- Accordion für die Eingabe der Kontaktdaten -->
                <AccordionItem>
                    <span slot="header">Kontaktdaten</span>
                    <div class="flex w-full  rounded-lg   pl-3 pr-3">
                        <div class="flex gap-4 w-full mt-5 mb-5">
                            <Input class="w-full" id="vorname" on:input={getvornamen} placeholder="Vorname" size="lg"/>
                            <Input class="w-full" id="nachname" on:input={getnachnamen} placeholder="Nachname"
                                   size="lg"/>

                        </div>
                    </div>
                    <div class="container mx-auto flex flex-row justify-content: center gap-4">


                        <Input class="w-full m-3" id="mail" on:input={getmail} placeholder="E-Mail" size="lg"
                               type=mail />
                    </div>
                    <div class="container mx-auto flex flex-row justify-content: center gap-4">
                        <Checkbox bind:checked={isChecked} class="flex justify-center text-lg mx-auto" color="red"
                                  on:change={onCheckboxChange}>Ich willige der Datenverarbeitung gemäß der&nbsp<a class="font-bold" href="../datenschutz">Datenschutzerklärung</a>&nbspein.
                        </Checkbox>
                    </div>
                    <p class="flex justify-center text-lg text-background">Mit dem Abschicken der Anfrage stimme ich den&nbsp<a class="font-bold" href="../agb">AGB</a>&nbspzu. </p>
                </AccordionItem>
            </Accordion>

            <!-- Anzeigen des Preises -->
            <div class="text-background text-center font-bold text-xl mb-1 mt-1"> Dein individuelles
                Angebot: {pricecalculate} €
            </div>
        </div>


    </div>

    <div class="container h-full mx-auto flex justify-center items-center mt-4 mb-10 gap-4">
        <Button class="bg-accent text-background hover:bg-text hover:text-background" href="../overviewAnfrage">zurück
        </Button>
        {#if (showbutton)}
            <Button class="bg-accent text-background hover:bg-text hover:text-background" on:click={handleClick}>Anfrage
                senden
            </Button>
        {/if}
        <Button class="bg-accent text-background hover:bg-text hover:text-background" on:click={calculatePrice}>Preis
            berechnen
        </Button>
    </div>

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
                        <textarea name="body" rows="6" value="{test}"/>
                    </div>
                </div>

            </form>
    </div>

</main>