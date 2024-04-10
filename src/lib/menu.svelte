<script>

    import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu, Button } from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
    import logo from '$lib/img/Logo.jpg';

    let menu = [
        {name: 'Autos', href: '/autoPortfolio'},
        {name: 'Pferde', href: '/pferd'},
        {name: 'Menschen', href: '/mensch'},
        {name: 'Hunde', href: '/hund'}
    ];

  </script>
  <div class="w-full">
  <Navbar class="bg-background border-secondary border-4 rounded-lg" let:hidden let:toggle>
    <NavBrand href="/">
      <img alt="logo" src={logo} class="rounded-full h-1/6 w-1/12">
      <span class=" whitespace-nowrap text-text text-xl font-semibold ">SaSv Photography</span>

    </NavBrand>
    <NavHamburger on:click={toggle}/>
    <NavUl {hidden}  >
        <NavLi class="text-text  hover:text-accent bg-background" href="/">Home</NavLi>
        <NavLi class="cursor-pointer text-text hover:text-accent bg-background ">
            Portfolio
            <ChevronDownOutline class=" hover:text-accent  w-3 h-3 ms-2  text-text dark:text-text inline"/>
        </NavLi>
        <MegaMenu class="w-1/5 mt-6 rounded-lg bg-background text-text z-50 " items={menu} let:item>
            <a class=" hover:text-accent  hover:underline hover:text-accent-600 dark:hover:text-primary-500" href={item.href}>
                {item.name}
            </a>
        </MegaMenu>
        <NavLi class="text-text hover:text-accent bg-background" href="/overviewAnfrage">Anfragen</NavLi>
        <NavLi class="text-text hover:text-accent bg-background" href="/impre">Info</NavLi>
    </NavUl>

  </Navbar>
</div>

