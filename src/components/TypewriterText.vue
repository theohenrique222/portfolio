<template>
  <span class="inline-block">
    <span class="text-gradient">{{ displayText }}</span>
    <span class="inline-block w-[2px] h-[1em] bg-orange-color ml-1 align-middle animate-pulse"
      :class="{ 'opacity-0': !showCursor }">|</span>
  </span>
</template>

<script>
export default {
  props: {
    texts: {
      type: Array,
      default: () => []
    },
    speed: {
      type: Number,
      default: 80
    },
    deleteSpeed: {
      type: Number,
      default: 40
    },
    pauseTime: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      displayText: '',
      textIndex: 0,
      charIndex: 0,
      isDeleting: false,
      showCursor: true,
    }
  },
  mounted() {
    this.type();
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  methods: {
    type() {
      const currentText = this.texts[this.textIndex];

      if (this.isDeleting) {
        this.displayText = currentText.substring(0, this.charIndex--);
      } else {
        this.displayText = currentText.substring(0, this.charIndex++);
      }

      let delay = this.isDeleting ? this.deleteSpeed : this.speed;

      if (!this.isDeleting && this.charIndex === currentText.length) {
        delay = this.pauseTime;
        this.isDeleting = true;
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.texts.length;
        delay = this.speed;
      }

      this.timeout = setTimeout(() => this.type(), delay);
    }
  }
}
</script>
