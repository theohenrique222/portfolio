<template>
  <transition name="fade">
    <button v-show="isVisible" @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-2xl bg-orange-color text-white shadow-lg shadow-orange-color/30 transition-all duration-300 hover:bg-orange-600 hover:-translate-y-1 hover:shadow-orange-color/50 animate-pulse-glow">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </transition>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
