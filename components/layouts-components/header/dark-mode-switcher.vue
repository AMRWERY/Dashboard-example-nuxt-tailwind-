<template>
  <div>
    <label :class="{ 'bg-primary': darkModeStore.darkMode, 'bg-stroke': !darkModeStore.darkMode }"
      class="relative m-0 block h-7.5 w-14 rounded-full" @click="darkModeStore.toggleDarkMode">
      <input type="checkbox" class="absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0" />
      <span :class="{ 'right-1 translate-x-full': darkModeStore.darkMode }"
        class="absolute top-1/2 left-1 flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear">
        <span class="dark:hidden">
          <icon name="heroicons-outline:sun" class="w-5 h-5 flex justify-center" />
        </span>
        <span class="hidden dark:inline-block">
          <icon name="heroicons-outline:moon" class="w-5 h-5 flex justify-center" />
        </span>
      </span>
    </label>
  </div>
</template>

<script setup>
const darkModeStore = useDarkModeStore()
</script>