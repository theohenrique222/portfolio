<template>
  <div class="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-neutral-800">
    <div class="h-full bg-gradient-to-r from-orange-color to-amber-400 transition-all duration-150 ease-out"
      :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      this.progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    }
  }
}
</script>
