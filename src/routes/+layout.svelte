<script>
    import '../app.pcss';
    import Menu from '../lib/menu.svelte';
    import Footer from '../lib/footer.svelte';
</script>

<style>

    /* Stil für das Layout */
    .triangle {
        border-left: 28vmax solid transparent;
        border-right: 70vmax solid transparent;
        border-top: 45vw solid #2f2f38;
        position: absolute;
        top: 16%;

    }

    .layout {
        @apply flex bg-background h-full;

    }

    .footer {
        @apply bottom-0 w-screen;
    }



</style>
<div class="flex bg-background h-full overflow-clip">

    <div class="triangle"></div>
    <div class="content bg-background">
        <div class="top-0">
            <Menu/>
        </div>

        <slot></slot>


		<div class=" bottom-0 w-screen"><Footer /></div>

       
    </div>


</div>