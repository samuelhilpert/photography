

<script>
    /**Bilder Import*/
    
        import { Gallery } from 'flowbite-svelte';
        import mensch11 from '$lib/img/mensch/bnatur.jpg';
        import mensch22 from '$lib/img/mensch/hnah.jpg';
        import mensch33 from '$lib/img/mensch/bstein.jpg';
        import mensch44 from '$lib/img/mensch/hpink.jpg';
        import mensch51 from '$lib/img/mensch/hstreet.jpg';
        import mensch62 from '$lib/img/mensch/hnatur.jpg';
        import mensch73 from '$lib/img/mensch/hcolor.jpg';
        import mensch84 from '$lib/img/mensch/hherbst.jpg';
        import mensch91 from '$lib/img/mensch/hgeld.jpg';
        import mensch102 from '$lib/img/mensch/bfeld.jpg';
        import mensch113 from '$lib/img/mensch/hsunset.jpg';
        import mensch124 from '$lib/img/mensch/bstreet.jpg';
    
    
    
    
    /**Bilder Gruppierung*/
    
    const imagesAuto = [
        { alt: 'erbology', src: mensch11 },
        { alt: 'lamp', src: mensch51 },
        { alt: 'auto', src: mensch91 }
      ];
    const imagesAuto2 = [
        { alt: 'plants', src: mensch22 },
        { alt: 'shoe', src: mensch62 },
        { alt: 'auto17', src: mensch102 }
      ];
      const imagesAuto3 = [
        { alt: 'lamp', src: mensch33 },
        { alt: 'foto', src: mensch73 },
        { alt: 'watch', src: mensch113 }
      ];
      const imagesAuto4 = [
        { alt: 'cream', src: mensch44 },
        { alt: 'shoes', src: mensch84 },
        { alt: 'toiletbag', src: mensch124 }
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
    
    
    <!-- Einfügen / Abbilden der Bilder-->
    <div class="w-full static align-top">

        <div class="card absolute top-20 bg-opacity-50 items-center w-1/2  rounded-full bg-secondary shadow-2xl">
            <p class="text-5xl mt-5 text-center font-semibold text-accent"> Menschen </p> <br>
        </div>

      <Gallery class="ml-2 mr-5 gap-4 grid-cols-2 md:grid-cols-4">
        <Gallery items={imagesAuto} />
        <Gallery items={imagesAuto2} />
        <Gallery items={imagesAuto3} />
        <Gallery items={imagesAuto4} />
      </Gallery>
    </div>


    
    </main>
    
    
      
      

