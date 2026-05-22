<template>
  <div class="relative -mt-1">
    <svg :viewBox="`0 0 ${width} ${height}`" :width="width" :height="height"
      preserveAspectRatio="none" class="w-full h-auto">
      <path :d="path" :fill="fill" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'wave',
      validator: v => ['wave', 'tilt', 'curve'].includes(v),
    },
    fill: {
      type: String,
      default: '#0d0d0d',
    },
    flip: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    width() { return 1440 },
    height() { return this.variant === 'wave' ? 80 : 60 },
    path() {
      const paths = {
        wave: 'M0,40 C360,100 720,0 1440,40 L1440,80 L0,80 Z',
        tilt: 'M0,60 L1440,0 L1440,60 L0,60 Z',
        curve: 'M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z',
      };
      return this.flip ? this.flipPath(paths[this.variant]) : paths[this.variant];
    },
  },
  methods: {
    flipPath(p) {
      return p.replace(/\d+/g, n => {
        const num = parseInt(n);
        return (this.width - num).toString();
      });
    }
  }
}
</script>
