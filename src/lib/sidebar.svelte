<script>
    import { Sidebar, SidebarWrapper, SidebarBrand, SidebarItem, SidebarGroup , SidebarDropdownWrapper , SidebarDropdownItem} from 'flowbite-svelte';
    import { HomeSolid , CameraFotoSolid , ClipboardListSolid , InfoCircleSolid} from 'flowbite-svelte-icons';  

    //let spanClass = 'text-text hover:text-secondary hover:bg-primary';

  </script>
<style>
</style>

  <Sidebar class="w-full h-screen bg-secondary text-text border-2 border-background rounded-md">
    <SidebarWrapper class="bg-secondary">
      <SidebarGroup class="bg-secondary">
        <SidebarItem label="Home" class="text-text icon-hover:text-secondary hover:text-secondary hover:bg-primary">
            <svelte:fragment slot="icon">
            <HomeSolid class="w-5 h-5 text-text transition duration-75 dark:text-text hover:text-secondary dark:group-hover:text-secondary" />
            </svelte:fragment>
        </SidebarItem>
        <SidebarDropdownWrapper label="Portfolio" class="text-text hover:text-secondary hover:bg-primary">
            <svelte:fragment slot="icon">
            <CameraFotoSolid class="w-5 h-5 text-text transition duration-75 dark:text-text group-hover:text-secondary dark:group-hover:text-black" />
            </svelte:fragment>
            <SidebarDropdownItem label="Auto" class="text-text hover:text-secondary hover:bg-primary"/>
            <SidebarDropdownItem label="Motorrad" class="text-text hover:text-secondary hover:bg-primary" />
            <SidebarDropdownItem label="Hund"  class="text-text hover:text-secondary hover:bg-primary"/>
            <SidebarDropdownItem label="Pferd"  class="text-text hover:text-secondary hover:bg-primary"/>
            <SidebarDropdownItem label="Mensch"  class="text-text hover:text-secondary hover:bg-primary"/>
          </SidebarDropdownWrapper>
        <SidebarItem label="Anfragen" class="text-text hover:text-secondary hover:bg-primary">
            <svelte:fragment slot="icon">
                <ClipboardListSolid class="w-5 h-5 text-text transition duration-75 dark:text-text group-hover:text-secondary dark:group-hover:text-black" />
            </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Info" class="text-text hover:text-secondary hover:bg-primary">
            <svelte:fragment slot="icon">
                <InfoCircleSolid class="w-5 h-5 text-text transition duration-75 dark:text-text group-hover:text-secondary dark:group-hover:text-black" />
            </svelte:fragment>
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>