<script>
    // import Bilder und Komponenten für die Seite
    import shoot from "$lib/img/photo-shoot.png";
    import {Button} from "flowbite-svelte";
    import {CameraFotoSolid} from "flowbite-svelte-icons";
</script>
<main class="content" style="position: relative">
    <!-- Box für Übersicht der Anfragen -->
    <div class="container h-full mx-auto flex justify-center items-center mt-8">
        <div class="space-y-1">
            <h1 class="text-5xl mb-10 mt-3 text-text text-center">Deine Anfrage an mich</h1>
            <h2 class="text-lg text-text text-center"> Schicke hier und jetzt unverbindlich eine Anfrage an mich.</h2>
            <h2 class="text-lg text-text text-center">Egal ob du ein eine einfache Anfrage oder ein individuelles
                Angebot haben willst.</h2>
            <p class="text-lg text-text text-center">Hier findest du dein perfektes Shooting.</p>
            <p class="text-lg text-text text-center">Wähle hierzu einfach dein gewünschtes Anfrageart aus!</p>
        </div>

    </div>

    <div class="container mx-auto flex flex-row justify-content: center gap-4 pt-8">
        <!-- Box für allgemeine Anfrage -->
        <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
            <CameraFotoSolid class="w-20 h-20 mx-auto shadow rounded-2xl shadow-background"/>
            <h1 class="text-3xl mt-2">Allgemeine Anfrage</h1>
            <p>Starte hier mit deiner allgemeinen Anfrage. Beschreibe in kurzen Sätzen wie dein perfektes Shooting
                aussehen soll und ich melde mich bei dir, was möglich ist und wie der Preis ist.</p>
            <Button class="mt-2 bg-accent text-background hover:bg-background hover:text-text" href="../allgAnfrage">
                Starte hier mit der allgemeinen Anfrage
            </Button>
        </div>
        <!-- Box für individuelle Anfrage -->
        <div class="flex-1 p-4 border rounded-lg shadow-md bg-text text-center">
            <img alt='banner' class="h-20 w-20 rounded-2xl mx-auto shadow shadow-background " src={shoot}/>
            <h1 class="text-3xl mt-2">Individuelle Anfrage</h1>
            <p>Starte hier direkt mit deiner individuellen Anfrage. Beantworte hierzu einfach ein paar Frage im
                Quizformat. Danach wird dir ein Preis genannt, zu dem du das Shooting direkt buchen kannst.</p>
            <Button class="mt-2 bg-accent text-background hover:bg-background hover:text-text" href="../indivAnfrage">
                Starte hier mit der individuellen Anfrage
            </Button>
        </div>

    </div>
    <!-- Button für zurück -->
    <div class="container h-full mx-auto flex justify-center items-center mt-8 mb-10">
        <Button class="bg-accent text-background hover:bg-text hover:text-background" href="../">zurück</Button>

    </div>

</main>