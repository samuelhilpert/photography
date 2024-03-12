<script>

    import {Button, Input, Textarea} from 'flowbite-svelte';


    let textareaContent = "";
    let getvor = "";
    let getnach = "";
    let textareaContent1 = "";
    let getmail1 = "";
    let getdate1 = "";
    let getanmerkungen = "";
    function inhaltarea2(event) {
        textareaContent1 = event.target.value;
    }
    function inhaltarea1(event) {
        textareaContent = event.target.value;
    }
    function getvornamen(event) {
        getvor = event.target.value;
    }
    function getnachnamen(event) {
        getnach = event.target.value;
    }
    function getmail(event) {
        getmail1 = event.target.value;
    }
    function getdate(event) {
        getdate1 = event.target.value;
    }
    function anmerkungen(event) {
        getanmerkungen = event.target.value;
    }
</script>
<main class="content" style="position: relative">
    <div class="container h-full mx-auto flex justify-center items-center mt-4">
        <div class="space-y-5">
            <h1 class="text-5xl text-text">Impressum</h1>
        </div>

    </div>

    <div class="container flex flex-row justify-content: center gap-4 pl-32 pr-32 pt-4" style="width: 4000px">
        <div class="flex-1 border rounded-lg shadow-md bg-text ">
            <h1 class="text-lg text-center mt-5">Impressum</h1><br>
                <p class="ml-5">Samuel Hilpert </p><p class="ml-5">Coblitzallee 1-9 68163 Mannheim</p><br>
                <h1 class="text-lg ml-5">Kontakt</h1>
            <p class="ml-5">Telefon: 01011100021</p><p class="ml-5"> Telefax: 01011100022</p><p class="ml-5"> E-Mail: impressum@dhbw.de</p>
               <br><h1 class="text-lg ml-5"> Quelle:</h1>
                <p class="ml-5 mb-5">https://www.e-recht24.de</p>

        </div>

    </div>


     <div class="container h-full mx-auto flex justify-center items-center mt-4 mb-10">
    <Button class="bg-accent text-background hover:bg-text hover:text-background" href="../impre">zurück</Button>

</div>
    <div class="h-96"></div>>
</main>