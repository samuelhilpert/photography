<script>
	/**Bilder Import*/

	import { Gallery } from 'flowbite-svelte';
	import pferd1 from '$lib/img/pferd/wCellesta.jpg';
	import pferd2 from '$lib/img/pferd/hLea.jpg';
	import pferd3 from '$lib/img/pferd/wCosmo.jpg';
	import pferd4 from '$lib/img/pferd/hHintergrund.jpg';
	import pferd5 from '$lib/img/pferd/hLaterne.jpg';
	import pferd6 from '$lib/img/pferd/wDetail.jpg';
	import pferd7 from '$lib/img/pferd/hTurnier.jpg';
	import pferd8 from '$lib/img/pferd/wHans.jpg';
	import pferd9 from '$lib/img/pferd/wLotta.jpg';
	import pferd10 from '$lib/img/pferd/wSchimmel.jpg';
	import pferd11 from '$lib/img/pferd/wSpringen.jpg';
	import pferd12 from '$lib/img/pferd/wAndrea.jpg';

	/**Bilder Gruppierung*/

	const imagesPferd = [
		{ alt: 'bild', src: pferd1 },
		{ alt: 'bild', src: pferd5 },
		{ alt: 'bild', src: pferd9 }
	];
	const imagesPferd2 = [
		{ alt: 'bild', src: pferd2 },
		{ alt: 'bild', src: pferd6 },
		{ alt: 'bild', src: pferd10 }
	];
	const imagesPferd3 = [
		{ alt: 'bild', src: pferd3 },
		{ alt: 'bild', src: pferd7 },
		{ alt: 'bild', src: pferd11 }
	];
	const imagesPferd4 = [
		{ alt: 'bild', src: pferd4 },
		{ alt: 'bild', src: pferd8 },
		{ alt: 'bild', src: pferd12 }
	];
</script>

<main class="content" style="position: relative">
	<div
		class="card absolute top-20 w-1/2 items-center rounded-full bg-secondary bg-opacity-50 shadow-2xl"
	>
		<p class="mb-2 mt-5 text-center text-5xl font-semibold text-accent">Pferde</p>
		<br />
	</div>
	<!-- Einfügen / Abbilden der Bilder-->
	<Gallery class="grid-cols-2 gap-4 md:grid-cols-4">
		<Gallery items={imagesPferd} />
		<Gallery items={imagesPferd2} />
		<Gallery items={imagesPferd3} />
		<Gallery items={imagesPferd4} />
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
