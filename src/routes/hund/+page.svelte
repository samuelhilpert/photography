<script>
	/**Bilder Import*/

	import { Gallery } from 'flowbite-svelte';
	import hund1 from '$lib/img/hund/wBailyganz.jpg';
	import hund2 from '$lib/img/hund/hEmilgegen.jpg';
	import hund3 from '$lib/img/hund/wSpielen.jpg';
	import hund4 from '$lib/img/hund/hEmilgarten.jpg';
	import hund5 from '$lib/img/hund/hEmilhof.jpg';
	import hund6 from '$lib/img/hund/wEmilrennen.jpg';
	import hund7 from '$lib/img/hund/hEmilport.jpg';
	import hund8 from '$lib/img/hund/wWasser.jpg';

	/**Bilder Gruppierung*/

	const imagesHund = [
		{ alt: 'bild', src: hund1 },
		{ alt: 'bild', src: hund5 }
	];
	const imagesHund2 = [
		{ alt: 'bild', src: hund2 },
		{ alt: 'bild', src: hund6 }
	];
	const imagesHund3 = [
		{ alt: 'bild', src: hund3 },
		{ alt: 'bild', src: hund7 }
	];
	const imagesHund4 = [
		{ alt: 'bild', src: hund4 },
		{ alt: 'bild', src: hund8 }
	];
</script>

<main class="content" style="position: relative">
	<!-- Einfügen / Abbilden der Bilder-->
	<div class="static w-full align-top">
		<div
			class="card absolute top-20 w-1/2 items-center rounded-full bg-secondary bg-opacity-50 shadow-2xl"
		>
			<p class="mt-5 text-center text-5xl font-semibold text-accent">Hunde</p>
			<br />
		</div>

		<Gallery class="mb-2 ml-2 mr-5 mt-2 grid-cols-2 gap-4 md:grid-cols-4">
			<Gallery items={imagesHund} />
			<Gallery items={imagesHund2} />
			<Gallery items={imagesHund3} />
			<Gallery items={imagesHund4} />
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
