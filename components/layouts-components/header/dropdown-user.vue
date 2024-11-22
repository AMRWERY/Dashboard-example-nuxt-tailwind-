<template>
  <div>
    <div class="relative" ref="target">
      <nuxt-link class="flex items-center gap-4" to="" @click.prevent="dropdownOpen = !dropdownOpen">
        <span class="hidden text-right lg:block">
          <span class="block text-sm font-medium text-black dark:text-white">Thomas Anree</span>
          <span class="block text-xs font-medium">UX Designer</span>
        </span>

        <span class="h-12 w-12 rounded-full">
          <img src="@/assets/user-01.png" />
        </span>
        <icon name="eva:arrow-ios-downward-outline" :class="dropdownOpen && 'rotate-180'"
          class="hidden fill-current sm:block w-5 h-5" />
      </nuxt-link>
      <!-- Dropdown Start -->
      <div v-show="dropdownOpen"
        class="absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <ul class="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <nuxt-link to=""
              class="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
              <icon name="eva:person-outline" class="w-[22px] h-[22px] fill-current" />
              My Profile
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to=""
              class="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
              <icon name="material-symbols:contact-phone-outline-sharp" class="w-[22px] h-[22px] fill-current" />
              My Contacts
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to=""
              class="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
              <icon name="material-symbols:settings-outline" class="w-[22px] h-[22px] fill-current" />
              Account Settings
            </nuxt-link>
          </li>
        </ul>
        <button
          class="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
          <icon name="material-symbols:logout-rounded" class="w-[22px] h-[22px] fill-current" />
          Log Out
        </button>
      </div>
      <!-- Dropdown End -->
    </div>
  </div>
</template>

<script setup>
const target = ref(null)
const dropdownOpen = ref(false)

onClickOutside(target, () => {
  dropdownOpen.value = false
})
</script>