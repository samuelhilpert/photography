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
		@apply flex bg-background h-screen;

	}

	.sidebar {
		@apply fixed left-0 top-0;
	}
	.content{
		margin-left: 10%;
	}



</style>
<div class="layout bg-background">

	<div class="triangle"></div>

	<div class="content">
		<slot></slot></div>

		<div class="sidebar"><Sidebar /></div>

</div>