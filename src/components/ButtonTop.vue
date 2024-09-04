<template>
    <div>
      <button
        v-show="isVisible"
        @click="scrollToTop"
        class="fixed bottom-5 right-5 z-50 bg-orange-600 text-white p-2 rounded-full shadow-lg hover:bg-orange-700 transition duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false,
      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
      checkScrollPosition() {
        this.isVisible = window.scrollY > 300;
      },
    },
    mounted() {
      window.addEventListener("scroll", this.checkScrollPosition);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.checkScrollPosition);
    },
  };
  </script>
  