
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
    import auto11 from '$lib/img/autos/1709463717031.jpg'
    import auto12 from '$lib/img/autos/1709463717041.jpg'
    import auto13 from '$lib/img/autos/1709463776881.jpg'
    import auto14 from '$lib/img/autos/1709463776910.jpg'

/**Bilder Gruppierung*/

const imagesAuto = [
    { alt: 'erbology', src: auto1 },
    { alt: 'lamp', src: auto9 },
    { alt: 'small bag', src: auto3 },
  ];
const imagesAuto2 = [
    { alt: 'plants', src: auto4 },
    { alt: 'shoe', src: auto6 },
    { alt: 'small bag', src: auto8 }
  ];
  const imagesAuto3 = [
    { alt: 'lamp', src: auto12 },
    { alt: 'foto', src: auto14 },
    { alt: 'watch', src: auto5 },
    { alt: 'toiletbag', src: auto10 }
  ];
  const imagesAuto4 = [
    { alt: 'small bag', src: auto11 },
    { alt: 'cream', src: auto7 },
    { alt: 'shoes', src: auto2 },
    { alt: 'toiletbag', src: auto13 }
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
  </style>
  
<main class="content" style="position: relative">




<!-- Einfügen / Abbilden der Bilder-->
  <Gallery class="gap-4 grid-cols-2 md:grid-cols-4">
    <Gallery items={imagesAuto} />
    <Gallery items={imagesAuto2} />
    <Gallery items={imagesAuto3} />
    <Gallery items={imagesAuto4} />
  </Gallery>
</main>


  
  