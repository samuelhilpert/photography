<script>
    //import components von flowbite
    import {Alert, Button, Checkbox, Input, Textarea} from 'flowbite-svelte';
    import {InfoCircleSolid} from 'flowbite-svelte-icons';

    export let form;

    // Variablen für die Eingabefelder
    let vorstellungen = "";
    let vornamen = "";
    let nachnamen = "";
    let wunsche = "";
    let mailAdresse = "";
    let shootingDate = "";
    let anmerkungen = "";
    let mailText = "";
    let showButton = false;
    let isChecked = false;


    //Funktionen zum Aktualisieren der Variablen
    function getWunsche(event) {
        wunsche = event.target.value;
        updateMailText();
        checkPflichtfelder();
    }

    function getVorstellungen(event) {
        vorstellungen = event.target.value;
        updateMailText();
        checkPflichtfelder();
    }

    function getVornamen(event) {
        vornamen = event.target.value;
        updateMailText();
        checkPflichtfelder();
    }

    function getNachnamen(event) {
        nachnamen = event.target.value;
        updateMailText();
        checkPflichtfelder();
    }

    function getMail(event) {
        mailAdresse = event.target.value;
        updateMailText();
        checkPflichtfelder();
    }

    function getShootingDate(event) {
        shootingDate = event.target.value;
        updateMailText();
        checkPflichtfelder();
    }

    function getAnmerkungen(event) {
        anmerkungen = event.target.value;
        updateMailText();
        checkPflichtfelder();
    }

    function updateMailText() {
        mailText = `Du hast eine neue Anfrage von ${vornamen} ${nachnamen} erhalten.\nHier sind die Details:\nDer Kunde wünscht sich "${wunsche}".\nEr stellst dich vor, dass "${vorstellungen}"
         \nKontaktdaten:\nName: ${vornamen}  ${nachnamen}\nEmail: ${mailAdresse} \nDatum: ${shootingDate} \nAnmerkungen: ${anmerkungen}`;
    }

    shootingDate = new Date().toISOString().split('T')[0];

    //Funktionen zum Senden der Daten an die Mail und die Datenbank
    function sendeDatenUndMail() {
        sendAllgemeineAnfrage();
        setTimeout(sendMail, 1000);

    }

    //Funktion zum Senden der Mail
    function sendMail() {
        document.getElementById('sendmail2').dispatchEvent(new Event('click'));
    }

    //Funktion zum Senden der Daten an die Datenbank
    async function sendAllgemeineAnfrage() {


        const API_URL = "https://sasvserver.azurewebsites.net/InsertAllgemeineAnfragen"; // Ersetzen Sie dies mit Ihrer tatsächlichen API-URL

        const response = await fetch(API_URL, {
            method: "POST",

            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                vorname: vornamen,
                nachname: nachnamen,
                tag: shootingDate,
                wuensche: wunsche,
                vorstellungen: vorstellungen,
                mail: mailAdresse,
                anmerkungen: anmerkungen,
            }),

        });


    }

    //Funktion zum Aktualisieren, wenn sich eine Checkbox ändert
    function onCheckboxChange(event) {
        isChecked = event.target.checked;
        checkPflichtfelder();

    }

    //Funktion zum Überprüfen, ob alle Felder ausgefüllt sind
    function checkPflichtfelder() {
        showButton = vorstellungen !== "" && wunsche !== "" && vornamen !== "" && nachnamen !== "" && mailAdresse !== "" && shootingDate !== "" && isChecked === true;
    }



</script>
<main class="content" style="position: relative">

    <!-- Alert, der angezeigt wird, wenn die Anfrage erfolgreich übermittelt wurde -->
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
            <h1><span class="text-5xl text-text">Deine allgemeine</span> <span
                    class="text-5xl text-accent"> Anfrage</span></h1>
        </div>


    </div>

    <!-- Eingabefelder für die Anfrage -->
    <div class="container mx-auto flex flex-row justify-content: center gap-4 pt-4">
        <div class="flex-1 border rounded-lg shadow-md bg-text ">

            <p class=" ml-5 text-background mt-5 text-xl">Was wünscht du dir ?</p>
            <div class="flex w-full  rounded-lg pl-3 pr-3">
                <div class="flex flex-row gap-4 w-full mt-5 mb-5">
                    <Textarea id="beschreibung" on:input={getWunsche}
                              placeholder="Beschreibe hier kurz, was fotografiert werden soll" rows="4"/>

                </div>
            </div>
            <p class="text-background ml-5 mt-2 text-xl">Was stellst du dir darunter vor ?</p>
            <div class="flex w-full rounded-lg pl-3 pr-3">
                <div class="flex flex-row gap-4 w-full mt-5 mb-5">
                    <Textarea id="beschreibung" on:input={getVorstellungen}
                              placeholder="Beschreibe hier kurz, wie die Fotos aussehen sollen" rows="4"/>
                </div>
            </div>
            <p class="text-background ml-5 mt-2 text-xl">Kontaktdaten</p>
            <div class="flex w-full  rounded-lg   pl-3 pr-3">
                <div class="flex gap-4 w-full mt-5 mb-5">
                    <Input class="w-full" id="vorname" on:input={getVornamen} placeholder="Vorname" size="lg"/>
                    <Input class="w-full" id="nachname" on:input={getNachnamen} placeholder="Nachname" size="lg"/>
                    <Input class="w-full" on:input={getShootingDate} type="date" min={new Date().toISOString().split('T')[0]} />
                </div>
            </div>
            <div class="flex w-full  rounded-lg pl-3 pr-3">
                <div class="flex gap-4 w-full mt-5 mb-5">
                    <Input class="w-full" id="mail" on:input={getMail} placeholder="Mailadresse" size="lg"
                           type="email" />
                </div>
            </div>
            <div class="flex w-full  rounded-lg pl-3 pr-3">
                <div class="flex flex-row gap-4 w-full mt-5 mb-5">
                    <Textarea id="beschreibung" on:input={getAnmerkungen} placeholder="weitere Anmerkungen" rows="4"/>
                </div>
            </div>
            <!-- Checkbox für die Einwilligung zur Datenverarbeitung -->
            <Checkbox bind:checked={isChecked} class="flex justify-center text-lg" color="red"
                      on:change={onCheckboxChange}>Ich willige der Datenverarbeitung gemäß der&nbsp<a class="font-bold"
                                                                                                      href="../datenschutz">Datenschutzerklärung</a>&nbspein.
            </Checkbox>
            <p class="flex justify-center text-lg">Mit dem Abschicken der Anfrage stimme ich den&nbsp<a
                    class="font-bold" href="../agb">AGB</a>&nbspzu. </p>
        </div>

    </div>
    <!-- Buttons zum Senden der Anfrage und zum Zurückgehen -->
    <div class="container h-full mx-auto flex justify-center items-center mt-4 mb-10 gap-5">
        <Button class="bg-accent text-background hover:bg-text hover:text-background" href="../overviewAnfrage">zurück
        </Button>
        {#if showButton}
            <Button class="bg-accent text-background hover:bg-text hover:text-background" on:click={sendeDatenUndMail}>
                Anfrage senden
            </Button>
        {/if}

    </div>

    <!-- Formular zum Senden der Mail -->
    <div class="wrapper hidden">
        <form class="container" method="POST">
            <button class="text-accent" id="sendmail2" type="submit">Send</button>
            <div>
                <div class="input">
                    <input name="to" type="email" value="samuelhilpert@web.de"/>
                </div>
                <div class="input">
                    <input name="subject" type="text" value="Du hast eine neue Anfrage: Allgemeine Anfrage"/>
                </div>
                <div class="input">
                    <textarea name="body" rows="6" value="{mailText}"/>

                </div>
            </div>


        </form>


    </div>


</main>