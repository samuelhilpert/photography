<script>
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu, Button } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import logo from '$lib/img/Logo.jpg';

	let menu = [
		{ name: 'Autos', href: '/autoPortfolio' },
		{ name: 'Pferde', href: '/pferd' },
		{ name: 'Menschen', href: '/mensch' },
		{ name: 'Hunde', href: '/hund' }
	];
</script>

<div class="w-full">
	<Navbar class="rounded-lg border-4 border-secondary bg-background" let:hidden let:toggle>
		<NavBrand href="/">
			<img alt="logo" src={logo} class="h-1/6 w-1/12 rounded-full" />
			<span class=" whitespace-nowrap text-xl font-semibold text-text">SaSv Photography</span>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
			<NavLi class="text-text  hover:text-accent " href="/">Home</NavLi>
			<NavLi class="cursor-pointer text-text hover:text-accent ">
				Portfolio
				<ChevronDownOutline
					class=" ms-2  inline h-3 w-3  text-text hover:text-accent dark:text-text"
				/>
			</NavLi>
			<MegaMenu class="z-50 mt-6 w-1/5 rounded-lg bg-background text-text " items={menu} let:item>
				<a
					class=" hover:text-accent-600 dark:hover:text-primary-500 hover:text-accent hover:underline"
					href={item.href}
				>
					{item.name}
				</a>
			</MegaMenu>
			<NavLi class="text-text hover:text-accent " href="/overviewAnfrage">Anfragen</NavLi>
			<NavLi class="text-text hover:text-accent " href="/impre">Info</NavLi>
		</NavUl>
	</Navbar>
</div>
