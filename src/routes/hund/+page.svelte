

<script>
    /**Bilder Import*/
    
        import { Gallery } from 'flowbite-svelte';
        import hund1 from '$lib/img/hund/wBailyganz.jpg';
        import hund2 from '$lib/img/hund/hEmilgegen.jpg';
        import hund3 from '$lib/img/hund/wSpielen.jpg';
        import hund4 from '$lib/img/hund/hEmilgarten.jpg';
        import hund5 from '$lib/img/hund/hEmilhof.jpg';
        import hund6 from '$lib/img/hund/wEmilrennen.jpg';
        import hund7 from '$lib/img/hund/hEmilport.jpg';
        import hund8 from '$lib/img/hund/wWasser.jpg';
    
    
    
    
    /**Bilder Gruppierung*/
    
    const imagesHund = [
        { alt: 'bild', src: hund1 },
        { alt: 'bild', src: hund5 }
      ];
    const imagesHund2 = [
        { alt: 'bild', src: hund2 },
        { alt: 'bild', src: hund6 }
      ];
      const imagesHund3 = [
        { alt: 'bild', src: hund3 },
        { alt: 'bild', src: hund7 }
      ];
      const imagesHund4 = [
        { alt: 'bild', src: hund4 },
        { alt: 'bild', src: hund8 }
      ];
      </script>
    
      <style>
        /**Formatierung der Bilder

        /**Header Text mit Card stylen*/
      .card {
        margin-left: 25%;
      }
    
        
      </style>
      
    <main class="content" style="position: relative">
    
    
    <!-- Einfügen / Abbilden der Bilder-->
    <div class="w-full static align-top">

        <div class="card absolute top-20 bg-opacity-50 items-center w-1/2  rounded-full bg-secondary shadow-2xl">
            <p class="text-5xl mt-5 text-center font-semibold text-accent"> Hunde </p> <br>
        </div>

      <Gallery class="ml-2 mr-5 mt-2 mb-2 gap-4 grid-cols-2 md:grid-cols-4">
        <Gallery items={imagesHund} />
        <Gallery items={imagesHund2} />
        <Gallery items={imagesHund3} />
        <Gallery items={imagesHund4} />
      </Gallery>
    </div>


    
    </main>
    
    
      
      

