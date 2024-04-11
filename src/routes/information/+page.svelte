<script>
    // import Bilder und Button
    import impress from '$lib/img/impressum.png'
    import datenschutz from '$lib/img/datenschutz.png'
    import contact from '$lib/img/1034153.png'
    import {Button} from 'flowbite-svelte';
</script>

<main class="content" style="position: relative">
    <!-- Überschrift -->
    <div class="container h-full mx-auto flex justify-center items-center mt-4">
        <div class="space-y-5">
            <h1 class="text-5xl mb-10 mt-3 text-text">Informationen</h1>
        </div>

    </div>

    <div class="container mx-auto flex flex-row justify-content: center gap-4 pt-4">
        <!-- Impressum Box-->
        <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
            <img alt='banner' class="h-24 rounded-lg mx-auto" src={impress}/>
            <a class="font-bold" href="/impressum">Impressum</a>
            <p>Über den Link in der Überschrift gelangst Du direkt zu unserem Impressum.</p>

        </div>
        <!-- Datenschutz Box-->
        <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
            <img alt='banner' class="h-24 rounded-lg mx-auto" src={datenschutz}/>
            <a class="font-bold" href="/datenschutz">Datenschutz</a>
            <p>Über den Link in der Überschrift gelangst Du direkt zu der Datenschutzerklärung. Hier zeigen wir dir auf,
                wie wir mit deinen Daten umgehen.</p>

        </div>

    </div>
    <!-- Kontakt Box-->
    <div class="container mx-auto flex flex-row justify-content: center gap-4 pt-4">
        <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
            <img alt='banner' class="h-24 rounded-lg mx-auto" src={contact}/>
            <p class="font-bold">Hi!</p>
            <p>Herzlich Willkommen auf dieser Webseite. Wir sind Svenja und Samuel und studieren aktuell im 4. Semester
                Wirtschaftsinformatik an der Dualen Hochschule Baden-Württemberg am Standort Mannheim.
                Diese Webseite wurde für ein Projekt an der Dualen Hochschule Baden-Württemberg entworfen und erstellt.
                Es handelt sich um keine echtes Portfolio. Es kann kein wirklicher Fotograf angefragt werden.</p>
            <p>Bei Anfrage, Fehlerreporting oder Supportanfragen melden sie sich bitte unter den bekannten
                Mail-Adressen. Leider kann eine Bearbeitungszeit unter 1 Woche nicht gewährleistet werden.</p>
            <p>Hier gelangst du sofort zu unserem Social Media: <a class="italic"
                    href="https://www.instagram.com/svenja.vlg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Svenja</a>,&nbsp;<a
                    class="italic" href="https://www.instagram.com/samhil03/">Samuel</a></p>
        </div>
    </div>
    <!-- AGB Box-->
    <div class="container mx-auto flex flex-row justify-content: center gap-4 pt-4" >
        <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
            <a class="font-bold" href="/agb">Allgemeine Geschäftsbedinungen</a>
            <p>Über den Link in der Überschrift gelangst du direkt zu unseren Allgemeinen Geschäftsbedingungen, die du
                dir auf jeden Fall durchlesen wirst und diesen sowieso zustimmst, egal ob du eine Waschmaschine kaufst
                oder nicht.</p>
        </div>
    </div>

    <!-- Zurück Button -->
    <div class="container h-full mx-auto flex justify-center items-center mt-4 mb-10">
        <Button class="bg-accent text-background hover:bg-text hover:text-background" href="../">zurück</Button>

    </div>

</main>