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
      
    <div>
        <a href="/auto" class="text-blue-600 hover:text-blue-800 underline margin"
        >Click here to go checkout our colorscheme</a
        >
    </div>
    <div class="banner">
        <img src={bannerIdee} alt='banner'/>
      </div>
 

        <div class="bg-gray-200 p-4 rounded-md shadow-sm w-64 mx-auto">
          
          <h1 class="text-center text-xl font-bold">Hallo {name}!</h1>
          <img alt="bannerIdee" src={bannerIdee}/> 
        </div>
      <div>
          <a href="/auto" class="text-blue-600 hover:text-blue-800 underline"
          >Click here to go checkout our colorscheme</a
          >
      </div>
  </main>