<script>
  let name = "Svenja";
  import { Gallery , Carousel  } from 'flowbite-svelte';
  import bannerIdee from '$lib/img/BannerIdee.png';
    const images1 = [
      { alt: 'banner', src: bannerIdee }
  ];
</script>
    
<style>
    .banner {
        @apply   pr-16 rounded-lg;
        padding-left: 15%;
        }
</style>

<main class="content" style="position: relative">
    
      <div >
        <img class="banner" src={bannerIdee} alt='banner'/>
      </div>
      <div>
        <Gallery class="gap-4 grid-cols-2 md:grid-cols-4">
        <Gallery items={images1} />
        </Gallery>
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
