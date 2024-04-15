<script>
	/**Bilder Import*/

	import { Gallery } from 'flowbite-svelte';
	import mensch11 from '$lib/img/mensch/bnatur.jpg';
	import mensch22 from '$lib/img/mensch/hnah.jpg';
	import mensch33 from '$lib/img/mensch/bstein.jpg';
	import mensch44 from '$lib/img/mensch/hpink.jpg';
	import mensch51 from '$lib/img/mensch/hstreet.jpg';
	import mensch62 from '$lib/img/mensch/hnatur.jpg';
	import mensch73 from '$lib/img/mensch/hcolor.jpg';
	import mensch84 from '$lib/img/mensch/hherbst.jpg';
	import mensch91 from '$lib/img/mensch/hgeld.jpg';
	import mensch102 from '$lib/img/mensch/bfeld.jpg';
	import mensch113 from '$lib/img/mensch/hsunset.jpg';
	import mensch124 from '$lib/img/mensch/bstreet.jpg';

	/**Bilder Gruppierung*/

	const imagesAuto = [
		{ alt: 'bild', src: mensch11 },
		{ alt: 'bild', src: mensch51 },
		{ alt: 'bild', src: mensch91 }
	];
	const imagesAuto2 = [
		{ alt: 'bild', src: mensch22 },
		{ alt: 'bild', src: mensch62 },
		{ alt: 'bild', src: mensch102 }
	];
	const imagesAuto3 = [
		{ alt: 'bild', src: mensch33 },
		{ alt: 'bild', src: mensch73 },
		{ alt: 'bild', src: mensch113 }
	];
	const imagesAuto4 = [
		{ alt: 'bild', src: mensch44 },
		{ alt: 'bild', src: mensch84 },
		{ alt: 'bild', src: mensch124 }
	];
</script>

<main class="content" style="position: relative">
	<!-- Einfügen / Abbilden der Bilder-->
	<div class="static w-full align-top">
		<div
			class="card absolute top-20 w-1/2 items-center rounded-full bg-secondary bg-opacity-50 shadow-2xl"
		>
			<p class="mt-5 text-center text-5xl font-semibold text-accent">Menschen</p>
			<br />
		</div>

		<Gallery class="mb-2 ml-2 mr-5 mt-2 grid-cols-2 gap-4 md:grid-cols-4">
			<Gallery items={imagesAuto} />
			<Gallery items={imagesAuto2} />
			<Gallery items={imagesAuto3} />
			<Gallery items={imagesAuto4} />
		</Gallery>
	</div>
</main>

<style>
	/**Formatierung der Bilder */
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
