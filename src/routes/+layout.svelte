

<script>
	import '../app.pcss';
	import Sidebar from '../lib/sidebar.svelte';
	
</script>

<style>
	/* Stil für das Layout */
	.layout {
	  @apply flex justify-center items-center h-screen bg-background;

	}
	.triangle {
	align-items: top;
    border-left: 30vw solid transparent;
    border-right: 70vw solid transparent;
    border-top: 28vw solid #724044;
	position: fixed;
    top: 0;

	}
	.sidebar {
		@apply absolute left-0 top-0 w-screen;

	}


  </style>
<div class="layout w-full">

	<div class="triangle"></div>
	<div class="sidebar"><Sidebar /></div>
	<slot class="content"></slot>


</div>
