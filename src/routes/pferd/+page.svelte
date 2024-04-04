<script>
    /**Bilder Import*/

    import {Gallery} from 'flowbite-svelte';
    import pferd1 from '$lib/img/pferd/wCellesta.jpg';
    import pferd2 from '$lib/img/pferd/hLea.jpg';
    import pferd3 from '$lib/img/pferd/wCosmo.jpg';
    import pferd4 from '$lib/img/pferd/hHintergrund.jpg';
    import pferd5 from '$lib/img/pferd/hLaterne.jpg';
    import pferd6 from '$lib/img/pferd/wDetail.jpg';
    import pferd7 from '$lib/img/pferd/hTurnier.jpg';
    import pferd8 from '$lib/img/pferd/wHans.jpg';
    import pferd9 from '$lib/img/pferd/wLotta.jpg';
    import pferd10 from '$lib/img/pferd/wSchimmel.jpg';
    import pferd11 from '$lib/img/pferd/wSpringen.jpg';
    import pferd12 from '$lib/img/pferd/wAndrea.jpg';



    /**Bilder Gruppierung*/

    const imagesPferd = [
        {alt: 'erbology', src: pferd1},
        {alt: 'lamp', src: pferd5},
        {alt: 'auto', src: pferd9}
    ];
    const imagesPferd2 = [
        {alt: 'plants', src: pferd2},
        {alt: 'shoe', src: pferd6},
        {alt: 'auto17', src: pferd10}
    ];
    const imagesPferd3 = [
        {alt: 'lamp', src: pferd3},
        {alt: 'foto', src: pferd7},
        {alt: 'watch', src: pferd11}
    ];
    const imagesPferd4 = [
        {alt: 'cream', src: pferd4},
        {alt: 'shoes', src: pferd8},
        {alt: 'toiletbag', src: pferd12}
    ];
</script>

<style>
    /**Formatierung der Bilder
    --> TODO: Anpassung! */
    .imageContainer {
        @apply w-screen;
        display: flex;
        gap: 10px;
    }

    .images {
        max-width: 20%;
        height: auto;
    }

    /**Header Text mit Card stylen*/
    .card {

        margin-left: 25%;
      }
  </style>
  
<main class="content" style="position: relative">


  <div class="card absolute top-20 bg-opacity-50 items-center w-1/2  rounded-full bg-secondary shadow-2xl">
    <p class="text-5xl mt-5 text-center font-semibold text-accent"> Pferdefotografie</p> <br>
</div>
<!-- Einfügen / Abbilden der Bilder-->
  <Gallery class="gap-4 grid-cols-2 md:grid-cols-4">
    <Gallery items={imagesPferd} />
    <Gallery items={imagesPferd2} />
    <Gallery items={imagesPferd3} />
    <Gallery items={imagesPferd4} />
  </Gallery>

</main>


  
  