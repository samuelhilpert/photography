<script>

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

    export let form;
    let test ="";
    let pricecalculate = "";
    import {Input, AccordionItem, Accordion, Label, Checkbox, Radio, Button, Alert} from "flowbite-svelte";
    import {InfoCircleSolid} from "flowbite-svelte-icons";


    let getvor = "";
    let getnach = "";
    let getmail1 = "";
    let getdate1 = "";
    let getbild = "";
    let getstunden = "";


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
        test = `Du hast eine neue Anfrage von ${getvor} ${getnach} erhalten. Hier sind die Details: Der Kunde wünscht sich ein Shooting mit einem ${selectedCategory}. Die gewünschte Bildart ist ${selectedtier}. Der Kunde wünscht sich ${getbild} Bilder und will ${getstunden} Stunden shooten. Der Kunde kann am ${getdate1} das Shooting durchführen und seine Mail-Adresse lautet ${getmail1}.`;
    }

    let selectedCategory;
    let selectedtier;
    let isAutoSelected = false;
    let isTierSelected = false;
    let isMenschSelected = false;

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
    async function sendData1() {


            const API_URL = "http://localhost:3001/InsertIndividuelleAnfragen"; // Ersetzen Sie dies mit Ihrer tatsächlichen API-URL

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

    async function handleClick() {
        await calculatePrice();
        sendData1();
        setTimeout(moin, 1000);

    }

    function moin() {
        document.getElementById('sendmail1').dispatchEvent(new Event('click'));
    }

    async function calculatePrice() {


        const API_URL = "http://localhost:3001/calculatePrice";

        const response = await fetch(API_URL, {
            method: "POST",

            headers: { "Content-Type": "application/json" },
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

    function implodeArray(array) {
        let result = '';
        for (let i = 0; i < array.length; i++) {
            result += array[i];
            if (i !== array.length - 1) {
                result += ' '; // Füge ein Leerzeichen zwischen den Elementen hinzu, außer beim letzten Element
            }
        }
        return result;
    }
    let showbutton = false;



    let isChecked = false;

    function onCheckboxChange(event) {
        isChecked = event.target.checked;
        checkall();

    }

    function checkall() {
        showbutton = getvor !== "" && getnach !== "" && getmail1 !== "" && getdate1 !== "" && getbild !== "" && getstunden !== "" && selectedCategory !== "" && selectedtier !== "" && isChecked === true;
    }

</script>
<main class="content" style="position: relative">
    {#if form?.success}
        <Alert color="dark" dismissable>
            <InfoCircleSolid slot="icon" class="w-4 h-4" />
            Deine Anfrage wurde erfolgreich übermittelt. Ich werde mich in Kürze bei dir melden.
            <Button color="dark" slot="close-button" size="xs" let:close on:click={close} class="ms-auto">Schließen</Button>
        </Alert>
    {/if}
    <div class="container h-full mx-auto flex justify-center items-center mt-4">
            <div class="space-y-5">
                <h1> <span class="text-5xl text-text">Deine individuelle</span> <span class="text-5xl text-accent"> Anfrage</span></h1>

            </div>


        </div>

    <div class="container mx-auto flex flex-row justify-content: center gap-4 pt-4">
            <div class="flex-1 border rounded-lg shadow-md bg-text ">
                <Accordion>
                    <AccordionItem open>
                        <span slot="header">Welches Motiv stellst du dir vor?</span>
                        <div class="container mx-auto flex flex-row justify-content: center gap-4">

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={auto} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Radio color="red" name="category" class="flex justify-center text-lg" bind:group={selectedCategory} on:change={handleRadioChange} value="Auto">Auto</Radio>

                            </div>

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={pferd} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Radio  color="red" name="category" class="flex justify-center text-lg" bind:group={selectedCategory} on:change={handleRadioChange} value="Tier">Tier</Radio>

                            </div>
                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={mensch} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Radio color="red" name="category" class="flex justify-center text-lg" bind:group={selectedCategory}  on:change={handleRadioChange} value="Mensch">Mensch</Radio>
                            </div>
                        </div>
                    </AccordionItem>
                    <AccordionItem>
                        <span slot="header">Was stellst du dir da vor? (Mehrfachauswahl möglich)</span>

                        {#if isTierSelected}
                        <div  class="container mx-auto flex flex-row justify-content: center gap-4">

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={pferdbewegung} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedtier}  value="in Bewegung">in Bewegung</Checkbox>


                            </div>

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={hundportrait} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedtier} value="Portrait">Portrait</Checkbox>


                            </div>
                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={pferdmensch} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedtier} value="Portrait mit Mensch">Portrait mit Mensch</Checkbox>

                            </div>
                        </div>
                        {/if}
                        {#if isAutoSelected}

                        <div class="container mx-auto flex flex-row justify-content: center gap-4">

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={porsche} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedtier}  value="Portrait">Portrait</Checkbox>

                            </div>

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={carinmovement} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedtier}  value="inBewegung">in Bewegung</Checkbox>

                            </div>
                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={theke} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedtier}  value="Detail">Detailaufnahme</Checkbox>
                            </div>
                        </div>
                        {/if}
                        {#if isMenschSelected}
                        <div class="container mx-auto flex flex-row justify-content: center gap-4">

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={natur} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedtier}  value="outdoor">Outdoor</Checkbox>
                            </div>

                            <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
                                <img src={streetstyle} alt='banner' class="h-40 rounded-lg mx-auto"/>
                                <Checkbox color="red" class="flex justify-center text-lg" bind:group={selectedtier}  value="streetstyle">Street Style</Checkbox>

                            </div>

                        </div>
                        {/if}

                    </AccordionItem>
                    <AccordionItem>
                        <span slot="header">Welchen Umfang stellst du dir vor?</span>
                        <div class="container mx-auto flex flex-row justify-content: center gap-4">

                            <div class="flex flex-row p-4 border rounded-lg shadow-md bg-text text-center">
                                <Label class="my-auto">Anzahl Stunden</Label>
                                <Input on:input={getStunden} type="number" class="w-full"/>
                            </div>


                            <div class="flex flex-row p-4 border rounded-lg shadow-md bg-text text-center">
                                <Label class="my-auto">Anzahl Bilder</Label>
                                <Input on:input={getBilder} type="number" class="w-full"/>
                            </div>
                            <div class="flex flex-row p-4 border rounded-lg shadow-md bg-text text-center">
                            <Label class="my-auto">Shooting Tag</Label>
                            <Input on:input={getdate} type="date" class="w-full"/>
                            </div>
                        </div>

                    </AccordionItem>
                    <AccordionItem>
                        <span slot="header">Kontaktdaten</span>
                        <div class="flex w-full  rounded-lg   pl-3 pr-3">
                            <div class="flex gap-4 w-full mt-5 mb-5">
                                <Input on:input={getvornamen} id="vorname" size="lg" placeholder="Vorname" class="w-full" />
                                <Input on:input={getnachnamen} id="nachname" size="lg" placeholder="Nachname" class="w-full" />

                            </div>
                        </div>
                        <div class="container mx-auto flex flex-row justify-content: center gap-4">


                            <Input on:input={getmail} type=mail id="mail" size="lg" placeholder="E-Mail" class="w-full m-3" />
                        </div>
                        <div class="container mx-auto flex flex-row justify-content: center gap-4">
                        <Checkbox color="red" class="flex justify-center text-lg" bind:checked={isChecked} on:change={onCheckboxChange}>Ich willige der Datenverarbeitung gemäß der Datenschutzerklärung ein.</Checkbox>
                        </div>
                    </AccordionItem>
                </Accordion>




                <div class="text-background text-center font-bold text-xl mb-1 mt-1"> Dein individuelles Angebot: {pricecalculate} €</div>
            </div>


        </div>

    <div class="container h-full mx-auto flex justify-center items-center mt-4 mb-10 gap-4">
        <Button class="bg-accent text-background hover:bg-text hover:text-background" href="../overviewAnfrage">zurück</Button>
        {#if (showbutton)}
        <Button class="bg-accent text-background hover:bg-text hover:text-background" on:click={handleClick}>Anfrage senden</Button>
        {/if}
        <Button class="bg-accent text-background hover:bg-text hover:text-background" on:click={calculatePrice}>Preis berechnen</Button>
    </div>
    <!--
    <p class="text-accent">{selectedCategory}</p>
    <p class="text-accent">{selectedtier}</p>
    <p class="text-accent">{getvor}</p>
    <p class="text-accent">{getnach}</p>
    <p class="text-accent">{getmail1}</p>
    <p class="text-accent">{getdate1}</p>
    <p class="text-accent">{getstunden}</p>
    <p class="text-accent">{getbild}</p>
    <p class="success text-accent">{form?.success || ""}</p>
    -->
    <div class="wrapper">
        <fieldset>
            <legend class="invisible">Send Emails</legend>
            <form method="POST" class="container">
                <button id="sendmail1" class="text-accent invisible" type="submit">Send</button>
                <div>
                    <div class="input invisible">
                        <label for="">To:</label>
                        <input name="to" type="email" value="samuelhilpert@web.de" />
                    </div>
                    <div class="input invisible">
                        <label for="">Subject:</label>
                        <input name="subject" type="text" value="Du hast eine neue Anfrage: Individuelle Anfrage" />
                    </div>
                    <div class="input invisible">
                        <label for="">Body:</label>
                        <textarea name="body" rows="6" value="{test}" />
                    </div>
                </div>


            </form>

        </fieldset>
        </div>

</main>