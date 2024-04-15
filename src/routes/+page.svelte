<script>
	let name = 'Svenja';
	import { Gallery } from 'flowbite-svelte';

	//Import der Bilder

	import bannerIdee from '$lib/img/BannerIdee.jpg';
	import imgauto from '$lib/img/auto.jpg';
	import hund from '$lib/img/hund.jpg';
	import mensch from '$lib/img/mensch.jpg';
	import pferd from '$lib/img/pferd.jpg';

	const imgPferd = [{ alt: 'Pferd', src: pferd }];
	const imgAuto = [{ alt: 'Auto', src: imgauto }];
	const imgMensch = [{ alt: 'Mensch', src: mensch }];
	const imgHund = [{ alt: 'Hund', src: hund }];
	const images1 = [{ alt: 'Banner', src: bannerIdee }];

	//functions für dynamisches erscheinen der Titel

	function handleAutoClick() {
		window.location.assign('/autoPortfolio');
	}

	function handlePferdClick() {
		window.location.assign('/pferd');
	}

	function handleMenschClick() {
		window.location.assign('/mensch');
	}

	function handleHundClick() {
		window.location.assign('/hund');
	}
</script>

<main class="content" style="position: relative ">
	<div class="bg-background">
		<div class="banner">
			<img alt="banner" class="rounded-lg brightness-75" src={bannerIdee} />
			<div class="text-overlay">Photography</div>
			<div class="text-overlay-untertitel">create memories</div>
		</div>
		<div class="ml-2.5 mr-2.5 mt-3.5">
			<Gallery class="scale-95 grid-cols-2 gap-4 md:grid-cols-4 ">
				<button class="kategorieBezeichnung" on:click={handleAutoClick}>
					<Gallery items={imgAuto} />
					<div class="textAuto">Autos</div>
					<div class="textAutoU">Mehr erfahren!</div>
				</button>
				<button class="kategorieBezeichnung" on:click={handlePferdClick}>
					<Gallery items={imgPferd} />
					<div class="textAuto">Pferde</div>
					<div class="textAutoU">Mehr erfahren!</div>
				</button>
				<button class="kategorieBezeichnung" on:click={handleMenschClick}>
					<Gallery items={imgMensch} />
					<div class="textAuto">Menschen</div>
					<div class="textAutoU">Mehr erfahren!</div>
				</button>
				<button class="kategorieBezeichnung" on:click={handleHundClick}>
					<Gallery items={imgHund} />
					<div class="textAuto">Hunde</div>
					<div class="textAutoU">Mehr erfahren!</div>
				</button>
			</Gallery>
		</div>
	</div>
</main>

<style>
	/**Platzierung des Banners*/
	.banner {
		@apply justify-center rounded-lg;
		margin-top: 2%;
		margin-left: 5%;
		margin-right: 5%;
	}

	/**Platzierung der Schrift*/

	.text-overlay {
		position: absolute;
		@apply text-text;
		top: 15%;
		left: 32%;
		transform: translate(-50%, -50%);
		font-size: 100px;
	}

	.text-overlay-untertitel {
		position: absolute;
		@apply font-serif text-text;
		top: 25%;
		left: 63%;
		transform: translate(-50%, -50%);
		font-size: 50px;
	}

	/**Dynamischer Text über den Kategoriebildern*/

	.textAuto {
		@apply relative -translate-y-64 text-2xl font-semibold text-text brightness-200;
		opacity: 0;
	}

	.textAutoU {
		@apply relative -translate-y-64 text-base text-text brightness-200;
		opacity: 0;
	}

	.kategorieBezeichnung:hover .textAuto {
		opacity: 1;
		scale: 1;
	}

	.kategorieBezeichnung:hover .textAutoU {
		opacity: 1;
		scale: 1;
	}

	.kategorieBezeichnung {
		@apply hover:brightness-75 hover:grayscale;
	}
</style>
