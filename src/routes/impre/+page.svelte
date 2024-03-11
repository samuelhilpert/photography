<script>
    import impress from '$lib/img/impressum.png'
    import datenschutz from '$lib/img/datenschutz.png'
    import contact from '$lib/img/1034153.png'

</script>

<main class="content" style="position: relative">
    <div class="container h-full mx-auto flex justify-center items-center mt-4">
        <div class="space-y-5">
            <h1 class="text-5xl mb-10 mt-3 text-text">Informationen</h1>
        </div>

    </div>
    <div class="container mx-auto flex flex-row justify-content: center gap-4 pl-52 pr-52">
        <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
            <img src={impress} alt='banner' class="h-24 rounded-lg mx-auto"/>
            <a href="/impressum">Impressum</a>
            <p>Über den Link in der Überschrift gelangst Du direkt zu unserem Impressum.</p>

        </div>

        <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
            <img src={datenschutz} alt='banner' class="h-24 rounded-lg mx-auto"/>
            <a href="/datenschutz">Datenschutz</a>
            <p>Über den Link in der Überschrift gelangst Du direkt zu der Datenschutzerklärung. Hier zeigen wir dir auf, wie wir mit deinen Daten umgehen.</p>

        </div>

    </div>
    <div class="container mx-auto flex flex-row justify-content: center gap-4 pl-52 pr-52 pt-4">
        <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
            <img src={contact} alt='banner' class="h-24 rounded-lg mx-auto"/>
            <p>Hi!</p>
            <p>Herzlich Willkommen auf dieser Webseite. Wir sind Svenja und Samuel und studieren aktuell im 4. Semester. Diese Webseite wurde für ein Projekt an der Dualen Hochschule Baden-Württemberg entworfen und erstellt. Es handelt sich um keine echtes Portfolio. Es kann kein wirklicher Fotograf angefragt werden.</p>

        </div>
    </div>




    <div>
        <a href="/impressum" class="text-blue-600 hover:text-blue-800 underline"
        >Impressum</a
        >
    </div>
    <div>
        <a href="/datenschutz" class="text-blue-600 hover:text-blue-800 underline"
        >Datenschutz</a
        >
    </div>
    <div class="container h-full mx-auto flex justify-center items-center mt-4">
        <h2>
            <a href = "../" class="text-blue-600 hover:text-blue-800 underline">Click here to go back!</a>
        </h2>
    </div>
</main>