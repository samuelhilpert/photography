<script>
    import {
        Sidebar,
        SidebarDropdownItem,
        SidebarDropdownWrapper,
        SidebarGroup,
        SidebarItem,
        SidebarWrapper
    } from 'flowbite-svelte';
    import {CameraFotoSolid, ClipboardListSolid, HomeSolid, InfoCircleSolid} from 'flowbite-svelte-icons';

    //let spanClass = 'text-text hover:text-secondary hover:bg-primary';

</script>

<Sidebar class="w-full h-screen bg-secondary text-text border-2 border-background rounded-md">
    <SidebarWrapper class="bg-secondary">
        <SidebarGroup class="bg-secondary">
            <SidebarItem class="text-text icon-hover:text-secondary hover:text-secondary hover:bg-primary" href="/"
                         label="Home">
                <svelte:fragment slot="icon">
                    <HomeSolid
                            class="w-5 h-5 text-text transition duration-75 dark:text-text hover:text-secondary dark:group-hover:text-secondary"/>
                </svelte:fragment>
            </SidebarItem>
            <SidebarDropdownWrapper class="text-text hover:text-secondary hover:bg-primary" label="Portfolio">
                <svelte:fragment slot="icon">
                    <CameraFotoSolid
                            class="w-5 h-5 text-text transition duration-75 dark:text-text group-hover:text-secondary dark:group-hover:text-black"/>
                </svelte:fragment>
                <SidebarDropdownItem class="text-text hover:text-secondary hover:bg-primary" href="/autoPortfolio"
                                     label="Auto"/>
                <SidebarDropdownItem class="text-text hover:text-secondary hover:bg-primary" href="/motorrad"
                                     label="Motorrad"/>
                <SidebarDropdownItem class="text-text hover:text-secondary hover:bg-primary" href="/hund" label="Hund"/>
                <SidebarDropdownItem class="text-text hover:text-secondary hover:bg-primary" href="/pferd"
                                     label="Pferd"/>
                <SidebarDropdownItem class="text-text hover:text-secondary hover:bg-primary" href="/mensch"
                                     label="Mensch"/>
            </SidebarDropdownWrapper>
            <SidebarItem class="text-text hover:text-secondary hover:bg-primary" href="/overviewAnfrage"
                         label="Anfragen">
                <svelte:fragment slot="icon">
                    <ClipboardListSolid
                            class="w-5 h-5 text-text transition duration-75 dark:text-text group-hover:text-secondary dark:group-hover:text-black"/>
                </svelte:fragment>
            </SidebarItem>
            <SidebarItem class="text-text hover:text-secondary hover:bg-primary" href="/information" label="Info">
                <svelte:fragment slot="icon">
                    <InfoCircleSolid
                            class="w-5 h-5 text-text transition duration-75 dark:text-text group-hover:text-secondary dark:group-hover:text-black"/>
                </svelte:fragment>
            </SidebarItem>
        </SidebarGroup>
    </SidebarWrapper>
</Sidebar>