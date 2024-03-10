

<script>
	import '../app.pcss';
	import Sidebar from '../lib/sidebar.svelte';

</script>

<style>
	/* Stil für das Layout */
	.triangle {

		border-left: 30vw solid transparent;
		border-right: 70vw solid transparent;
		border-top: 28vw solid #724044;
		position: fixed;
		top: 0;

	}
	.layout {
		@apply flex justify-center items-center h-screen bg-background;

	}

	.sidebar {
		@apply absolute left-0 top-0 w-screen;

	}



</style>
<div class="layout w-full">

	<div class="triangle"></div>
	<div class="sidebar"><Sidebar /></div>

	<div class="content">
		<slot></slot></div>


</div>
