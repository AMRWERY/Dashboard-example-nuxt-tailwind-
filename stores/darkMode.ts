import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useDarkModeStore = defineStore("darkMode", () => {
  const darkMode = useStorage("darkMode", false);

  // Update dark mode class only on the client side
  if (typeof window !== "undefined") {
    document.documentElement.classList.toggle("dark", darkMode.value);
  }

  function toggleDarkMode() {
    darkMode.value = !darkMode.value;
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", darkMode.value);
    }
  }

  return { darkMode, toggleDarkMode };
});
