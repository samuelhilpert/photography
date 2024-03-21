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
  
  <Navbar class="bg-background border-secondary border-4 rounded-lg" let:hidden let:toggle>
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-text text-xl font-semibold">SaSv Photography</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" class="text-text">Home</NavLi>
      <NavLi class="cursor-pointer text-text">
        Portfolio<ChevronDownOutline class="w-3 h-3 ms-2  text-text dark:text-text inline" />
      </NavLi>
      <MegaMenu class="w-1/4 rounded-lg bg-background text-text"  items={menu} let:item>
        <a href={item.href} class="hover:underline hover:text-accent-600 dark:hover:text-primary-500">
          {item.name}
        </a>
      </MegaMenu>
      <NavLi href="/overviewAnfrage" class="text-text">Anfragen</NavLi>
      <NavLi href="/impre" class="text-text">Impressum</NavLi>
    </NavUl>
  </Navbar>