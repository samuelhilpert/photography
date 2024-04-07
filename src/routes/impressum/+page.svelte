<!-- Import  Button component von dem Flowbite package -->
<script>
    import {Button} from 'flowbite-svelte';
</script>
<main class="content" style="position: relative">
    <!-- Überschrift -->
    <div class="container h-full mx-auto flex justify-center items-center mt-10">
        <div class="space-y-5">
            <h1 class="text-5xl text-text">Impressum</h1>
        </div>

    </div>
<!-- Impressumsinhalt -->
    <div class="container mx-auto flex flex-row justify-content: center gap-4 pt-4">
        <div class="flex-1 border rounded-lg shadow-md bg-text ">
            <h1 class="text-lg text-center mt-5 font-bold">Impressum</h1><br>
            <p class="ml-5">Angaben gemäß § 5 TMG:</p> <br>
            <h1 class="text-lg ml-5 font-bold">Vertreten durch:</h1>
            <p class="ml-5">Samuel Hilpert </p>
            <p class="ml-5">S1 16, 68161 Mannheim</p><br>
            <h1 class="text-lg ml-5 font-bold">Kontakt</h1>
            <p class="ml-5">Telefon: 0159 03082121</p>
            <p class="ml-5"> E-Mail: samuelhilpert@web.de</p>
            <br>
            <h1 class="text-lg ml-5 font-bold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h1>
            <p class="ml-5">Samuel Hilpert, S1 16, 68161 Mannheim</p><br>
            <h1 class="text-lg ml-5 font-bold"> Quelle</h1>
            <p class="ml-5 mb-5">https://www.e-recht24.de</p>

        </div>

    </div>

    <!-- Button um zurück zu gehen -->
    <div class="container h-full mx-auto flex justify-center items-center mt-4 mb-10">
        <Button class="bg-accent text-background hover:bg-text hover:text-background" href="../impre">zurück</Button>

    </div>
</main>