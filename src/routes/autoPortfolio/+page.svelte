
<script>
/**Bilder Import*/

    import { Gallery } from 'flowbite-svelte';
    import auto1 from '$lib/img/autos/IMG_0122.jpg';
    import auto2 from '$lib/img/autos/IMG_0018-Edit.jpg';
    import auto3 from '$lib/img/autos/IMG_0129.jpg';
    import auto4 from '$lib/img/autos/IMG_0163.jpg';
    import auto5 from '$lib/img/autos/IMG_9101.jpg';
    import auto6 from '$lib/img/autos/IMG_9536.jpg';
    import auto7 from '$lib/img/autos/IMG_9558.jpg';
    import auto8 from '$lib/img/autos/IMG_9657.jpg';
    import auto9 from '$lib/img/autos/IMG_9698.jpg';
    import auto10 from '$lib/img/autos/IMG_9807.jpg';
    import auto11 from '$lib/img/autos/1709463717031.jpg';
    import auto12 from '$lib/img/autos/1709463717041.jpg';
    import auto13 from '$lib/img/autos/1709463776881.jpg';
    import auto14 from '$lib/img/autos/1709463776910.jpg';
    import auto15 from '$lib/img/autos/IMG_9823.jpg';
    import auto16 from '$lib/img/autos/IMG_9661.jpg';
    import auto17 from '$lib/img/autos/IMG_0140.jpg';




/**Bilder Gruppierung*/

const imagesAuto = [
    { alt: 'erbology', src: auto1 },
    { alt: 'lamp', src: auto9 },
    { alt: 'auto', src: auto16 },
    { alt: 'small bag', src: auto3 },
  ];
const imagesAuto2 = [
    { alt: 'plants', src: auto4 },
    { alt: 'shoe', src: auto6 },
    { alt: 'auto17', src: auto17 },
    { alt: 'small bag', src: auto8 }
  ];
  const imagesAuto3 = [
    { alt: 'lamp', src: auto12 },
    { alt: 'foto', src: auto14 },
    { alt: 'watch', src: auto5 },
    { alt: 'toiletbag', src: auto10 }
  ];
  const imagesAuto4 = [
    { alt: 'cream', src: auto15 },
    { alt: 'shoes', src: auto2 },
    { alt: 'toiletbag', src: auto13 },
    { alt: 'auto15', src: auto7}
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
    <p class="text-5xl mt-5 text-center font-semibold text-accent"> Autofotografie</p> <br>
</div>
<!-- Einfügen / Abbilden der Bilder-->
  <Gallery class="gap-4 grid-cols-2 md:grid-cols-4">
    <Gallery items={imagesAuto} />
    <Gallery items={imagesAuto3} />
    <Gallery items={imagesAuto2} />
    <Gallery items={imagesAuto4} />
  </Gallery>
</main>


  
  