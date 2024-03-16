<script>
    import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu, Button } from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
    let menu = [
      { name: 'Autos', href: '/autoPortfolio' },
      { name: 'Pferde', href: '/pferd' },
      { name: 'Menschen', href: '/mensch' },
      { name: 'Hunde', href: '/hund' }
    ];
  </script>
  
  <Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold">SaSv Photography</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/">Home</NavLi>
      <NavLi class="cursor-pointer">
        Portfolio<ChevronDownOutline class="w-3 h-3 ms-2 text-primary dark:text-text inline" />
      </NavLi>
      <MegaMenu full items={menu} let:item>
        <a href={item.href} class="hover:underline hover:text-primary-600 dark:hover:text-primary-500">
          {item.name}
        </a>
        <a slot="extra" href="/" class="block mt-4 p-4 text-left bg-local bg-secondary bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken" style="background-image: url(/images/nature-1.webp)">
          <p class="mb-5 max-w-xl text-sm p-0 font-extrabold tracking-tight leading-tight text-text">Preview the new Flowbite dashboard navigation.</p>
          <Button>Get started</Button>
        </a>
      </MegaMenu>
      <NavLi href="/overviewAnfrage">Anfragen</NavLi>
      <NavLi href="/impre">Impressum</NavLi>
    </NavUl>
  </Navbar>