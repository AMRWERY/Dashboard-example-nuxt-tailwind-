<template>
  <div>
    <ul class="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
      <template v-for="(childItem, index) in items" :key="index">
        <li>
          <nuxt-link to="" @click="handleItemClick(index)"
            class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white"
            :class="{
              '!text-white': childItem.label === sidebarStore.selected
            }">
            {{ childItem.label }}
          </nuxt-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
const sidebarStore = useSidebarStore()

const props = defineProps(['items', 'page'])
const items = ref(props.items)

const handleItemClick = (index: number) => {
  const pageName =
    sidebarStore.selected === props.items[index].label ? '' : props.items[index].label
  sidebarStore.selected = pageName
}
</script>