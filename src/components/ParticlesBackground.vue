<template>
  <canvas ref="canvas" class="fixed inset-0 w-full h-full pointer-events-none" style="z-index: 0;"></canvas>
</template>

<script>
export default {
  data() {
    return {
      ctx: null,
      particles: [],
      animationId: null,
      mouse: { x: null, y: null, radius: 150 },
    }
  },
  mounted() {
    this.ctx = this.$refs.canvas.getContext('2d');
    this.resize();
    this.initParticles();
    this.animate();
    window.addEventListener('resize', this.resize);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('touchmove', this.onTouchMove, { passive: true });
  },
  beforeDestroy() {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.resize);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('touchmove', this.onTouchMove);
  },
  methods: {
    resize() {
      const canvas = this.$refs.canvas;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    },
    initParticles() {
      const count = Math.min(80, Math.floor(window.innerWidth / 10));
      this.particles = [];
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.$refs.canvas.width,
          y: Math.random() * this.$refs.canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.2,
        });
      }
    },
    onMouseMove(e) {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    },
    onTouchMove(e) {
      if (e.touches.length > 0) {
        this.mouse.x = e.touches[0].clientX;
        this.mouse.y = e.touches[0].clientY;
      }
    },
    animate() {
      const canvas = this.$refs.canvas;
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(255, 77, 5, ${p.alpha})`;
        this.ctx.fill();

        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.strokeStyle = `rgba(255, 77, 5, ${0.08 * (1 - dist / 150)})`;
            this.ctx.lineWidth = 0.5;
            this.ctx.stroke();
          }
        }

        if (this.mouse.x !== null) {
          const dx = this.mouse.x - p.x;
          const dy = this.mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < this.mouse.radius) {
            const force = (this.mouse.radius - dist) / this.mouse.radius;
            p.x -= dx * force * 0.02;
            p.y -= dy * force * 0.02;
          }
        }
      }

      this.animationId = requestAnimationFrame(this.animate);
    }
  }
}
</script>
