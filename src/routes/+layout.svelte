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
        top: 14%;

    }

    .layout {
        @apply flex bg-background h-full;

    }

    .footer {
        @apply bottom-0 w-screen;
    }


</style>
<div class="layout">

    <div class="triangle"></div>
    <div class="content bg-background">
        <div class="top-0">
            <Menu/>
        </div>

        <slot></slot>

        <div class="footer">
            <Footer/>
        </div>

    </div>


</div>