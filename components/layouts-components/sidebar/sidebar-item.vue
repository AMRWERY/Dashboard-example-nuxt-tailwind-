<template>
  <div>
    <li>
      <nuxt-link to=""
        class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
        @click.prevent="handleItemClick" :class="{
          'bg-graydark dark:bg-meta-4': sidebarStore.page === item.label
        }">
        <!-- <span v-html="item.icon"></span> -->
        <icon :name="item.icon" />

        {{ item.label }}

        <icon name="material-symbols-light:keyboard-arrow-up"
          class="absolute right-4 top-1/2 -translate-y-1/2 fill-current w-5 h-5"
          :class="{ 'rotate-180': sidebarStore.page === item.label }" v-if="item.children" />
      </nuxt-link>

      <!-- Dropdown Menu Start -->
      <div class="translate transform overflow-hidden" v-show="sidebarStore.page === item.label">
        <sidebar-dropdown v-if="item.children" :items="item.children" :currentPage="currentPage" :page="item.label" />
        <!-- Dropdown Menu End -->
      </div>
    </li>
  </div>
</template>

<script setup lang="ts">
const sidebarStore = useSidebarStore()

const props = defineProps(['item', 'index'])
const currentPage = useRoute().name

interface SidebarItem {
  label: string
}

const handleItemClick = () => {
  const pageName = sidebarStore.page === props.item.label ? '' : props.item.label
  sidebarStore.page = pageName

  if (props.item.children) {
    return props.item.children.some((child: SidebarItem) => sidebarStore.selected === child.label)
  }
}
</script>