<script>

    import {Alert, Button, Checkbox, Input, Textarea} from 'flowbite-svelte';
    import {InfoCircleSolid} from 'flowbite-svelte-icons';

    export let form;


    let textareaContent = "";
    let getvor = "";
    let getnach = "";
    let textareaContent1 = "";
    let getmail1 = "";
    let getdate1 = "";
    let getanmerkungen = "";
    let test = "";
    let showbutton = false;


    function inhaltarea2(event) {
        textareaContent1 = event.target.value;
        updateTest();
        checkall();
    }

    function inhaltarea1(event) {
        textareaContent = event.target.value;
        updateTest();
        checkall();
    }

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

    function anmerkungen(event) {
        getanmerkungen = event.target.value;
        updateTest();
        checkall();
    }

    function updateTest() {
        test = `Du hast eine neue Anfrage von ${getvor} ${getnach} erhalten. Hier sind die Details: Der Kunde wünscht sich "${textareaContent1}". Er stellst dich vor, dass "${textareaContent}"
         Kontakdaten: Email: ${getmail1} Datum: ${getdate1} Anmerkungen: ${getanmerkungen}`;
    }

    function handleClick1() {
        sendData();
        setTimeout(moin, 1000);

    }

    function moin() {
        document.getElementById('sendmail2').dispatchEvent(new Event('click'));
    }

    async function sendData() {


        const API_URL = "http://localhost:3001/InsertAllgemeineAnfragen"; // Ersetzen Sie dies mit Ihrer tatsächlichen API-URL

        const response = await fetch(API_URL, {
            method: "POST",

            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                vorname: getvor,
                nachname: getnach,
                tag: getdate1,
                wuensche: textareaContent1,
                vorstellungen: textareaContent,
                mail: getmail1,
                anmerkungen: getanmerkungen,
            }),

        });


    }


    let isChecked = false;

    function onCheckboxChange(event) {
        isChecked = event.target.checked;
        checkall();

    }

    function checkall() {
        showbutton = textareaContent !== "" && textareaContent1 !== "" && getvor !== "" && getnach !== "" && getmail1 !== "" && getdate1 !== "" && isChecked === true;
    }


</script>
<main class="content" style="position: relative">

    {#if form?.success}
        <Alert color="dark" dismissable>
            <InfoCircleSolid slot="icon" class="w-4 h-4"/>
            Deine Anfrage wurde erfolgreich übermittelt. Ich werde mich in Kürze bei dir melden.
            <Button color="dark" slot="close-button" size="xs" let:close on:click={close} class="ms-auto">Schließen
            </Button>
        </Alert>
    {/if}


    <div class="container h-full mx-auto flex justify-center items-center mt-4">
        <div class="space-y-5">
            <h1><span class="text-5xl text-text">Deine allgemeine</span> <span
                    class="text-5xl text-accent"> Anfrage</span></h1>
        </div>


    </div>


    <div class="container mx-auto flex flex-row justify-content: center gap-4 pt-4">
        <div class="flex-1 border rounded-lg shadow-md bg-text ">

            <p class=" ml-5 text-background mt-5 text-xl">Was wünscht du dir ?</p>
            <div class="flex w-full  rounded-lg pl-3 pr-3">
                <div class="flex flex-row gap-4 w-full mt-5 mb-5">
                    <Textarea id="beschreibung" on:input={inhaltarea2}
                              placeholder="Beschreibe hier kurz, was fotografiert werden soll" rows="4"/>

                </div>
            </div>
            <p class="text-background ml-5 mt-2 text-xl">Was stellst du dir darunter vor ?</p>
            <div class="flex w-full rounded-lg pl-3 pr-3">
                <div class="flex flex-row gap-4 w-full mt-5 mb-5">
                    <Textarea id="beschreibung" on:input={inhaltarea1}
                              placeholder="Beschreibe hier kurz, wie die Fotos aussehen sollen" rows="4"/>
                </div>
            </div>
            <p class="text-background ml-5 mt-2 text-xl">Kontaktdaten</p>
            <div class="flex w-full  rounded-lg   pl-3 pr-3">
                <div class="flex gap-4 w-full mt-5 mb-5">
                    <Input class="w-full" id="vorname" on:input={getvornamen} placeholder="Vorname" size="lg"/>
                    <Input class="w-full" id="nachname" on:input={getnachnamen} placeholder="Nachname" size="lg"/>
                    <Input class="w-full" on:input={getdate} type="date"/>
                </div>
            </div>
            <div class="flex w-full  rounded-lg pl-3 pr-3">
                <div class="flex gap-4 w-full mt-5 mb-5">
                    <Input class="w-full" id="mail" on:input={getmail} placeholder="Mailadresse" size="lg"
                           type="email"/>
                </div>
            </div>
            <div class="flex w-full  rounded-lg pl-3 pr-3">
                <div class="flex flex-row gap-4 w-full mt-5 mb-5">
                    <Textarea id="beschreibung" on:input={anmerkungen} placeholder="weitere Anmerkungen" rows="4"/>
                </div>
            </div>
            <Checkbox bind:checked={isChecked} class="flex justify-center text-lg" color="red"
                      on:change={onCheckboxChange}>Ich willige der Datenverarbeitung gemäß der Datenschutzerklärung ein.
            </Checkbox>
        </div>

    </div>
    <!--
    <p class="text-text">{textareaContent1}{textareaContent}{getvor}{getnach} {getmail1} {getdate1}{getanmerkungen}</p>
-->
    <div class="container h-full mx-auto flex justify-center items-center mt-4 mb-10 gap-5">
        <Button class="bg-accent text-background hover:bg-text hover:text-background" href="../overviewAnfrage">zurück
        </Button>
        {#if showbutton}
            <Button class="bg-accent text-background hover:bg-text hover:text-background" on:click={handleClick1}>
                Anfrage senden
            </Button>
        {/if}

    </div>
    <!---
    <p class="text-accent">{test}</p>
    -->


    <div class="wrapper">
        <fieldset>
            <legend class="invisible">Send Emails</legend>
            <form class="container" method="POST">
                <button class="text-accent invisible" id="sendmail2" type="submit">Send</button>
                <div>
                    <div class="input invisible">
                        <label for="">To:</label>
                        <input name="to" type="email" value="samuelhilpert@web.de"/>
                    </div>
                    <div class="input invisible">
                        <label for="">Subject:</label>
                        <input name="subject" type="text" value="Du hast eine neue Anfrage: Allgemeine Anfrage"/>
                    </div>
                    <div class="input invisible">
                        <label for="">Body:</label>

                        <textarea name="body" rows="6" value="{test}"/>

                    </div>
                </div>


            </form>

        </fieldset>
    </div>


</main>