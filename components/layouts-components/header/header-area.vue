<template>
  <div>
    <header class="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div class="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div class="flex items-center gap-2 sm:gap-4 lg:hidden">
          <!-- Hamburger Toggle BTN -->
          <button
            class="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
            @click="() => {
              // console.log('Toggling Sidebar')
              toggleSidebar()
            }
              ">
            <span class="relative block h-5.5 w-5.5 cursor-pointer">
              <span class="block absolute right-0 h-full w-full">
                <span
                  class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white"
                  :class="{ '!w-full delay-300': !sidebarStore.isSidebarOpen }"></span>
                <span
                  class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white"
                  :class="{ '!w-full delay-400': !sidebarStore.isSidebarOpen }"></span>
                <span
                  class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white"
                  :class="{ '!w-full delay-500': !sidebarStore.isSidebarOpen }"></span>
              </span>
              <span class="block absolute right-0 h-full w-full rotate-45">
                <span
                  class="absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white"
                  :class="{ '!h-0 delay-[0]': !sidebarStore.isSidebarOpen }"></span>
                <span
                  class="delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white"
                  :class="{ '!h-0 delay-200': !sidebarStore.isSidebarOpen }"></span>
              </span>
            </span>
          </button>
          <!-- Hamburger Toggle BTN -->
          <nuxt-link class="block flex-shrink-0 lg:hidden" to="/">
            <img src="@/assets/logo-icon.svg" />
          </nuxt-link>
        </div>
        <div class="hidden sm:block">
          <form action="" method="POST">
            <div class="relative">
              <input type="text" placeholder="Type to search..."
                class="w-full xl:w-125 bg-transparent pe-10 ps-4 focus:outline-none" />
              <button type="button" class="absolute top-1/2 right-2 -translate-y-1/2">
                <icon name="heroicons-outline:magnifying-glass"
                  class="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary mt-1" />
              </button>
            </div>
          </form>
        </div>

        <div class="flex items-center gap-3 2xsm:gap-7">
          <ul class="flex items-center gap-2 2xsm:gap-4">
            <li>
              <!-- Dark Mode Toggler -->
              <dark-mode-switcher />
              <!-- Dark Mode Toggler -->
            </li>

            <!-- Notification Menu Area -->
            <dropdown-notification />
            <!-- Notification Menu Area -->

            <!-- Chat Notification Area -->
            <dropdown-message />
            <!-- Chat Notification Area -->
          </ul>

          <!-- User Area -->
          <dropdown-user />
          <!-- User Area -->
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
const { toggleSidebar } = useSidebarStore()
const sidebarStore = useSidebarStore()
</script>