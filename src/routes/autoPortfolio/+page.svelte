<script>
	/**Bilder Import*/

	import { Gallery } from 'flowbite-svelte';
	import auto1 from '$lib/img/autos/IMG_0122.jpg';
	import auto2 from '$lib/img/autos/IMG_0018-Edit.jpg';
	import auto3 from '$lib/img/autos/IMG_0129.jpg';
	import auto4 from '$lib/img/autos/IMG_0163.jpg';
	import auto5 from '$lib/img/autos/IMG_9101.jpg';
	import auto6 from '$lib/img/autos/IMG_9536.jpg';
	import auto7 from '$lib/img/autos/IMG_9558.jpg';
	import auto8 from '$lib/img/autos/IMG_9657.jpg';
	import auto9 from '$lib/img/autos/IMG_9698.jpg';
	import auto10 from '$lib/img/autos/IMG_9807.jpg';
	import auto12 from '$lib/img/autos/1709463717041.jpg';
	import auto13 from '$lib/img/autos/1709463717031.jpg';
	import auto14 from '$lib/img/autos/1709463776910.jpg';
	import auto15 from '$lib/img/autos/IMG_9823.jpg';
	import auto16 from '$lib/img/autos/IMG_9661.jpg';
	import auto17 from '$lib/img/autos/IMG_0140.jpg';

	/**Bilder Gruppierung*/

	const imagesAuto = [
		{ alt: 'auto', src: auto1 },
		{ alt: 'auto', src: auto9 },
		{ alt: 'auto', src: auto16 },
		{ alt: 'auto', src: auto3 }
	];
	const imagesAuto2 = [
		{ alt: 'auto', src: auto4 },
		{ alt: 'auto', src: auto6 },
		{ alt: 'auto', src: auto17 },
		{ alt: 'auto', src: auto8 }
	];
	const imagesAuto3 = [
		{ alt: 'auto', src: auto12 },
		{ alt: 'auto', src: auto14 },
		{ alt: 'auto', src: auto5 },
		{ alt: 'auto', src: auto10 }
	];
	const imagesAuto4 = [
		{ alt: 'auto', src: auto15 },
		{ alt: 'auto', src: auto2 },
		{ alt: 'auto', src: auto13 },
		{ alt: 'auto', src: auto7 }
	];
</script>

<main class="content" style="position: relative">
	<div
		class="card absolute top-20 w-1/2 items-center rounded-full bg-secondary bg-opacity-50 shadow-2xl"
	>
		<p class="mt-5 text-center text-5xl font-semibold text-accent">Auto</p>
		<br />
	</div>
	<!-- Einfügen / Abbilden der Bilder-->
	<Gallery class="grid-cols-2 gap-4 md:grid-cols-4">
		<Gallery items={imagesAuto} />
		<Gallery items={imagesAuto3} />
		<Gallery items={imagesAuto2} />
		<Gallery items={imagesAuto4} />
	</Gallery>
</main>

<style>
	/**Formatierung der Bilder*/
	.imageContainer {
		@apply w-screen;
		display: flex;
		gap: 10px;
	}

	.images {
		max-width: 20%;
		height: auto;
	}

	/**Header Text mit Card stylen*/
	.card {
		margin-left: 25%;
	}
</style>
