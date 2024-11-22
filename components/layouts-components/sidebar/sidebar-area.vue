  <template>
    <div>
      <aside
        class="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0"
        :class="{
          'translate-x-0': sidebarStore.isSidebarOpen,
          '-translate-x-full': !sidebarStore.isSidebarOpen
        }" ref="target">
        <!-- SIDEBAR HEADER -->
        <div class="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <nuxt-link to="/">
            <img src="@/assets/logo.svg" />
          </nuxt-link>

          <button class="block lg:hidden" @click="sidebarStore.isSidebarOpen = false">
            <icon name="material-symbols:arrow-back-rounded" class="fill-current w-5 h-[18px]" />
          </button>
        </div>
        <!-- SIDEBAR HEADER -->

        <div class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <!-- Sidebar Menu -->
          <nav class="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
            <template v-for="menuGroup in menuGroups" :key="menuGroup.name">
              <div>
                <h3 class="mb-4 ml-4 text-sm font-medium text-bodydark2">{{ menuGroup.name }}</h3>

                <ul class="mb-6 flex flex-col gap-1.5">
                  <sidebar-item v-for="(menuItem, index) in menuGroup.menuItems" :item="menuItem" :key="index"
                    :index="index" />
                </ul>
              </div>
            </template>
          </nav>
          <!-- Sidebar Menu -->
        </div>
      </aside>
    </div>
  </template>

<script setup>
const target = ref(null)

const sidebarStore = useSidebarStore()

onClickOutside(target, () => {
  sidebarStore.isSidebarOpen = false
})

const menuGroups = ref([
  {
    name: 'MENU',
    menuItems: [
      {
        icon: 'material-symbols:dashboard-outline-rounded',
        label: 'Dashboard',
        route: '/',
        children: [{ label: 'eCommerce', route: '/' }]
      },
      {
        icon: 'material-symbols:calendar-month-sharp',
        label: 'Calendar',
        route: ''
      },
      {
        icon: 'material-symbols:account-box-sharp',
        label: 'Profile',
        route: ''
      },
      {
        icon: 'material-symbols:forms-add-on',
        label: 'Forms',
        route: '',
        children: [
          { label: 'Form Elements', route: '' },
          { label: 'Form Layout', route: '' }
        ]
      },
      {
        icon: 'material-symbols:table-chart-outline',
        label: 'Tables',
        route: ''
      },
      {
        icon: 'simple-icons:powerpages',
        label: 'Pages',
        route: '',
        children: [{ label: 'Settings', route: '' }]
      }
    ]
  },
  {
    name: 'Others',
    menuItems: [
      {
        icon: 'cbi:other-reading',
        label: 'Charts',
        route: '',
        children: [{ label: 'Basic Chart', route: '' }]
      },
      {
        icon: 'uil:archive-alt',
        label: 'UI Elements',
        route: '',
        children: [
          { label: 'Alerts', route: '' },
          { label: 'Buttons', route: '' }
        ]
      },
      {
        icon: 'carbon:two-factor-authentication',
        label: 'Authentication',
        route: '',
        children: [
          { label: 'Sign In', route: '' },
          { label: 'Sign Up', route: '' }
        ]
      }
    ]
  }
])
</script>