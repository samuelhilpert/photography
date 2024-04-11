<script>
    let name = 'Svenja';
    import {Gallery} from 'flowbite-svelte';

    /**Import der Bilder
     * --TODO:
     */
    import bannerIdee from '$lib/img/BannerIdee.jpg';
    import imgauto from '$lib/img/auto.jpg';
    import hund from '$lib/img/hund.jpg';
    import mensch from '$lib/img/mensch.jpg';
    import pferd from '$lib/img/pferd.jpg';

    const imgPferd = [{alt: 'Pferd', src: pferd}];
    const imgAuto = [{alt: 'Auto', src: imgauto}];
    const imgMensch = [{alt: 'Mensch', src: mensch}];
    const imgHund = [{alt: 'Hund', src: hund}];
    const images1 = [{alt: 'Banner', src: bannerIdee}];

    /**functions für dynamisches erscheinen der Titel
     * --TODO: hover über schrift s/w
     */

    function handleAutoClick() {
        window.location.assign('/auto');
    }

    function handlePferdClick() {
        window.location.assign('/pferd');
    }

    function handleMenschClick() {
        window.location.assign('/mensch');
    }

    function handleHundClick() {
        window.location.assign('/hund');
    }
</script>

<main class="content" style="position: relative ">
    <div class="bg-background">
        <div class="banner">
            <img alt="banner" class="rounded-lg brightness-75" src={bannerIdee}/>
            <div class="text-overlay">Photography</div>
            <div class="text-overlay-untertitel">create memories</div>
        </div>
        <div class="ml-2.5 mr-2.5 mt-3.5">
            <Gallery class="scale-95 grid-cols-2 gap-4 md:grid-cols-4 ">
                <button class="kategorieBezeichnung" on:click={handleAutoClick}>
                    <Gallery items={imgAuto}/>
                    <div class="textAuto"> Autos</div>
                    <div class="textAutoU"> Mehr erfahren!</div>
                </button>
                <button class="kategorieBezeichnung" on:click={handlePferdClick}>
                    <Gallery items={imgPferd}/>
                    <div class="textAuto"> Pferde</div>
                    <div class="textAutoU"> Mehr erfahren!</div>
                </button>
                <button class="kategorieBezeichnung" on:click={handleMenschClick}>
                    <Gallery items={imgMensch}/>
                    <div class="textAuto"> Menschen</div>
                    <div class="textAutoU"> Mehr erfahren!</div>
                </button>
                <button class="kategorieBezeichnung" on:click={handleHundClick}>
                    <Gallery items={imgHund}/>
                    <div class="textAuto"> Hunde</div>
                    <div class="textAutoU"> Mehr erfahren!</div>
                </button>              
            </Gallery>
        </div>
    </div>

</main>

<style>
    /**Platzierung des Banners*/
    /** Platzierung des Banners*/
    .banner {
        position: relative;
        @apply justify-center rounded-lg;
        margin-top: 2%;
        margin-left: 5%;
        margin-right: 5%;
    }

    /**Platzierung der Schrift*/

    .text-overlay {
        position: absolute;
        @apply text-text;
        top: 33%; /* Vertikal zentrieren */
        left: 31%; /* Horizontal zentrieren */
        transform: translate(-50%, -50%); /* Zentrierung anpassen */
        font-size: 6.944444444444445vw;
        /* Weitere Stile nach Bedarf */
    }

    .text-overlay-untertitel {
        position: absolute;
        @apply font-serif text-text;
        top: 56%; /* Vertikal zentrieren */
        left: 65%; /* Horizontal zentrieren */
        transform: translate(-50%, -50%); /* Zentrierung anpassen */
        font-size: 3.4722222222222223vw;
    }

    /**Dynamischer Text über den Kategoriebildern*/

    .textAuto {
        @apply relative -translate-y-64 text-2xl font-semibold text-text brightness-200;
        opacity: 0;
    }

    .textAutoU {
        @apply relative -translate-y-64 text-base text-text brightness-200;
        opacity: 0;
    }

    
    .kategorieBezeichnung:hover .textAuto {
        opacity: 1;
        scale: 1;
    }

    .kategorieBezeichnung:hover .textAutoU {
        opacity: 1;
        scale: 1;
    }

    .kategorieBezeichnung {
        @apply hover:grayscale hover:brightness-75;
    }
</style>
