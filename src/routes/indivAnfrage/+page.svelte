<script>
    export let form;
    let test ="Moin";
    import {Input, Textarea, AccordionItem, Accordion} from "flowbite-svelte";
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
                <h1> <span class="text-5xl text-text">Deine individuelle</span> <span class="text-5xl text-background"> Anfrage</span></h1>
            </div>

        </div>

        <div class="container flex flex-row justify-content: center gap-4 pl-32 pr-32 pt-4" style="width: 4000px">
            <div class="flex-1 border rounded-lg shadow-md bg-text ">
                <Accordion>
                    <AccordionItem>
                        <span slot="header">My Header 1</span>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
                        <p class="text-gray-500 dark:text-gray-400">
                            Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
                            and start developing websites even faster with components on top of Tailwind CSS.
                        </p>
                    </AccordionItem>
                    <AccordionItem>
                        <span slot="header">My Header 2</span>
                        <div class="flex w-full  rounded-lg   pl-3 pr-3">
                            <div class="flex gap-4 w-full mt-5 mb-5">
                                <Input on:input={getvornamen} id="vorname" size="lg" placeholder="Vorname" class="w-full" />
                                <Input on:input={getnachnamen} id="nachname" size="lg" placeholder="Nachname" class="w-full" />
                                <Input on:input={getdate} type="date" class="w-full" />
                            </div>
                        </div>
                    </AccordionItem>
                </Accordion>





            </div>


        </div>
    <p class="success text-accent">{form?.success || ""}</p>
    <div class="container h-full mx-auto flex justify-center items-center mt-4">
        <h2>
            <a href = "../" class="text-blue-600 hover:text-blue-800 underline">Click here to go back!</a>
        </h2>
    </div>
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
                        <input name="subject" type="text" value="Du hast eine neue Anfrage" />
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