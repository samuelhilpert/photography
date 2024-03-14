<script>

    import {Button, Input, Textarea} from 'flowbite-svelte';
    export let form;



    let textareaContent = "";
    let getvor = "";
    let getnach = "";
    let textareaContent1 = "";
    let getmail1 = "";
    let getdate1 = "";
    let getanmerkungen = "";
    let test = "";



    function inhaltarea2(event) {
        textareaContent1 = event.target.value;
        updateTest();
    }
    function inhaltarea1(event) {
        textareaContent = event.target.value;
        updateTest();
    }
    function getvornamen(event) {
        getvor = event.target.value;
        updateTest();
    }
    function getnachnamen(event) {
        getnach = event.target.value;
        updateTest();
    }
    function getmail(event) {
        getmail1 = event.target.value;
        updateTest();
    }
    function getdate(event) {
        getdate1 = event.target.value;
        updateTest();
    }
    function anmerkungen(event) {
        getanmerkungen = event.target.value;
        updateTest();
    }
    function updateTest() {
        test = `Du hast eine neue Anfrage von ${getvor} ${getnach} erhalten. Hier sind die Details: Der Kunde wünscht sich "${textareaContent1}". Er stellst dich vor, dass "${textareaContent}"
         Kontakdaten: Email: ${getmail1} Datum: ${getdate1} Anmerkungen: ${getanmerkungen}`;
    }




</script>
<main class="content" style="position: relative">
    <div class="container h-full mx-auto flex justify-center items-center mt-4">
        <div class="space-y-5">
            <h1 class="text-5xl text-text">Allgemeine Anfrage</h1>
        </div>

    </div>

    <div class="container flex flex-row justify-content: center gap-4 pl-32 pr-32 pt-4" style="width: 4000px">
        <div class="flex-1 border rounded-lg shadow-md bg-text ">

            <p class=" ml-5 text-background mt-5 text-xl">Was wünscht du dir ?</p>
            <div class="flex w-full  rounded-lg pl-3 pr-3">
                <div class="flex flex-row gap-4 w-full mt-5 mb-5">
                    <Textarea rows="4" id="beschreibung" placeholder="Beschreibe hier kurz, was fotografiert werden soll" on:input={inhaltarea2} />

                </div>
            </div>
            <p class="text-background ml-5 mt-2 text-xl">Was stellst du dir darunter vor ?</p>
            <div class="flex w-full rounded-lg pl-3 pr-3">
                <div class="flex flex-row gap-4 w-full mt-5 mb-5">
                    <Textarea rows="4" id="beschreibung" placeholder="Beschreibe hier kurz, wie die Fotos aussehen sollen" on:input={inhaltarea1}  />
                </div>
            </div>
            <p class="text-background ml-5 mt-2 text-xl">Kontaktdaten</p>
            <div class="flex w-full  rounded-lg   pl-3 pr-3">
                <div class="flex gap-4 w-full mt-5 mb-5">
                    <Input on:input={getvornamen} id="vorname" size="lg" placeholder="Vorname" class="w-full" />
                    <Input on:input={getnachnamen} id="nachname" size="lg" placeholder="Nachname" class="w-full" />
                    <Input on:input={getdate} type="date" class="w-full" />
                </div>
            </div>
            <div class="flex w-full  rounded-lg pl-3 pr-3">
                <div class="flex gap-4 w-full mt-5 mb-5">
                    <Input type="email" on:input={getmail} id="mail" size="lg" placeholder="Mailadresse" class="w-full" />
                </div>
            </div>
            <div class="flex w-full  rounded-lg pl-3 pr-3">
                <div class="flex flex-row gap-4 w-full mt-5 mb-5">
                    <Textarea rows="4" id="beschreibung" placeholder="weitere Anmerkungen"  on:input={anmerkungen}  />
                </div>
            </div>
        </div>

    </div>
    <p class="text-text">{textareaContent1}{textareaContent}{getvor}{getnach} {getmail1} {getdate1}{getanmerkungen}</p>


     <div class="container h-full mx-auto flex justify-center items-center mt-4 mb-10 gap-5">
    <Button class="bg-accent text-background hover:bg-text hover:text-background" href="../overviewAnfrage">zurück</Button>
         <Button class="bg-accent text-background hover:bg-text hover:text-background">Anfrage senden</Button>

</div>

    <p class="text-accent">{test}</p>



    <div class="wrapper">
        <fieldset>
            <legend class="invisible">Send Emails</legend>
            <form method="POST" class="container">
                <button class="text-accent" type="submit">Send</button>
                <div>
                    <div class="input invisible">
                        <label for="">To:</label>
                        <input name="to" type="email" value="samuelhilpert@web.de" />
                    </div>
                    <div class="input invisible">
                        <label for="">Subject:</label>
                        <input name="subject" type="text" value="Du hast eine neue Anfrage: Allgemeine Anfrage" />
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