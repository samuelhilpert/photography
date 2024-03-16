<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink } from 'flowbite-svelte';
  </script>
  
  <Footer footerType="logo" class="bg-secondary">
    <div class="h-1/7 sm:flex sm:items-center sm:justify-between">
      <FooterBrand href="/+page" src="" alt="logo" name="logo" />
      <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-test sm:mb-0 dark:text-text">
        <FooterLink href="/">Portfolio</FooterLink>
        <FooterLink href="/">Datenschutz/Impressum</FooterLink>
#        <FooterLink href="/">Info</FooterLink>
      </FooterLinkGroup>
    </div>
    <hr class="my-6 border-primary sm:mx-auto dark:border-primary lg:my-8" />
    <FooterCopyright href="/" by="SaSv Photography™" class="text-text " />
  </Footer>