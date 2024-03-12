<script>
    let name = "Svenja";
    import { Gallery , Carousel  } from 'flowbite-svelte';
    import bannerIdee from '$lib/img/BannerIdee.png';
    import auto from '$lib/img/auto.jpg';
    import hund from '$lib/img/hund.jpg';
    import mensch from '$lib/img/mensch.jpg';
    import pferd from '$lib/img/pferd.png';

    const imgPferd = [
        { alt: 'pferd', src: pferd }
    ];
    const imgAuto = [
        { alt: 'auto', src: auto }
    ];
    const imgMensch = [
        { alt: 'Mensch', src: mensch }
    ];
    const imgHund = [
        { alt: 'hund', src: hund }
    ];
      const images1 = [
        { alt: 'erbology', src: bannerIdee }
    ];
  </script>
      
  <style>
      .banner {
          @apply rounded-lg justify-center;
          margin-top: 2%;
          margin-left: 5%;
          margin-right: 5%;

          }
          .text-overlay {
    position: absolute;
    @apply text-text;
    top: 15%; /* Vertikal zentrieren */
    left: 32%; /* Horizontal zentrieren */
    transform: translate(-50%, -50%); /* Zentrierung anpassen */
    font-size: 100px;
    /* Weitere Stile nach Bedarf */
  }
  .text-overlay-untertitel {
    position: absolute;
    @apply text-text font-serif;
    top: 25%; /* Vertikal zentrieren */
    left: 63%; /* Horizontal zentrieren */
    transform: translate(-50%, -50%); /* Zentrierung anpassen */
    font-size: 50px;
    /* Weitere Stile nach Bedarf */
  }
  </style>
  
  <main class="content" style="position: relative">
      
    <div class="banner">
        <img class="rounded-lg brightness-75" src={bannerIdee} alt='banner'/>
        <div class="text-overlay"> Photography</div>
        <div class="text-overlay-untertitel"> create memories</div>

      </div>
    <div class="mt-3.5 ml-2.5 mr-2.5">
      <Gallery class="scale-95 gap-4 grid-cols-2 md:grid-cols-4">
        <Gallery items={imgAuto} />
        <Gallery items={imgPferd} />
        <Gallery items={imgMensch} />
        <Gallery items={imgHund} />
      </Gallery>
    </div>

      <div>
          <a href="/allgAnfrage" class="text-blue-600 hover:text-blue-800 underline"
          >allgemeine Anfrage</a
          >
      </div>
      <div>
          <a href="/indivAnfrage" class="text-blue-600 hover:text-blue-800 underline"
          >individuelle Anfrage</a
          >
      </div>
      <div>
          <a href="/overviewAnfrage" class="text-blue-600 hover:text-blue-800 underline"
          >overview Anfrage</a
          >
      </div>
      <div>
          <a href="/motorrad" class="text-blue-600 hover:text-blue-800 underline"
          >Motorrad</a
          >
      </div>
      <div>
          <a href="/hund" class="text-blue-600 hover:text-blue-800 underline"
          >hund</a
          >
      </div>
      <div>
          <a href="/pferd" class="text-blue-600 hover:text-blue-800 underline"
          >pferd</a
          >
      </div>
      <div>
          <a href="/mensch" class="text-blue-600 hover:text-blue-800 underline"
          >mensch</a
          >
      </div>
      <div>
          <a href="/impre" class="text-blue-600 hover:text-blue-800 underline"
          >Impressum/Datenschutz</a
          >
      </div>
  </main>