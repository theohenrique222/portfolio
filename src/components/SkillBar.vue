<template>
  <div class="space-y-2">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-lg bg-orange-color/10 flex items-center justify-center">
          <ion-icon :name="icon" class="text-sm text-orange-color"></ion-icon>
        </div>
        <span class="text-sm font-medium text-gray-300">{{ label }}</span>
      </div>
      <span class="text-sm font-bold text-orange-color">{{ animatedValue }}%</span>
    </div>
    <div class="w-full h-2 overflow-hidden rounded-full bg-neutral-800">
      <div class="h-full rounded-full bg-gradient-to-r from-orange-color to-amber-400 transition-all duration-1000 ease-out"
        :style="{ width: animatedValue + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Number, default: 0 },
    label: { type: String, default: '' },
    icon: { type: String, default: 'code-outline' },
    delay: { type: Number, default: 0 },
  },
  data() {
    return {
      animatedValue: 0,
      hasAnimated: false,
    }
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          setTimeout(() => this.animateCount(), this.delay);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(this.$el);
    this.$once('hook:beforeDestroy', () => observer.disconnect());
  },
  methods: {
    animateCount() {
      const duration = 1200;
      const start = performance.now();
      const animate = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        this.animatedValue = Math.round(easeOut * this.value);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }
}
</script>
