<script>

    import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink } from 'flowbite-svelte';
    import logo from '$lib/img/Logo.jpg';

    
  </script>
  
  <Footer footerType="logo" class="bg-secondary w-full overflow-hidden">
    <div class=" sm:flex sm:items-center sm:justify-between">
      <FooterBrand href="/" src={logo} alt="logo"/>

      <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-text sm:mb-0 dark:text-text h-1/6">
        <FooterLink href="/">Portfolio</FooterLink>
        <FooterLink href="/impressum">Impressum</FooterLink>
        <FooterLink href="/datenschutz">Datenschutz</FooterLink>
        <FooterLink href="/impre">Informationen</FooterLink>
        <FooterBrand href="https://www.instagram.com/svenja.vlg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</FooterBrand>

      </FooterLinkGroup>

   
    </div>
    <hr class="my-6 pb-0 border-primary sm:mx-auto dark:border-primary lg:my-8 "/>
    <FooterCopyright by="SaSv Photography™" class="text-text " href="/"/>
</Footer>