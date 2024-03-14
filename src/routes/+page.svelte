<script>
    let name = "Svenja";
    import { Gallery , Carousel  } from 'flowbite-svelte';
    import bannerIdee from '$lib/img/BannerIdee.png';
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
  </style>
  
  <main class="content" style="position: relative">
      
    <div class="banner">
        <img src={bannerIdee} alt='banner'/>
      </div>
 

        <div class="bg-gray-200 p-4 rounded-md shadow-sm w-64 mx-auto">
          
          <h1 class="text-center text-xl font-bold">Hallo {name}!</h1>
          <img alt="bannerIdee" src={bannerIdee}/> 
        </div>
      <div>
          <a href="/autoPortfolio" class="text-blue-600 hover:text-blue-800 underline"
          >Auto</a
          >
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
          <a href="/email" class="text-blue-600 hover:text-blue-800 underline"
          >mensch</a
          >
      </div>
      <div>
          <a href="/impre" class="text-blue-600 hover:text-blue-800 underline"
          >Impressum/Datenschutz</a
          >
      </div>
  </main>