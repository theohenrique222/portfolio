<template>
  <section class="relative overflow-hidden bg-neutral-950 section-padding" id="about">
    <div class="absolute top-0 right-0 w-64 h-64 opacity-20 bg-orange-color/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 opacity-10 bg-orange-color/10 rounded-full blur-3xl"></div>

    <main class="relative z-10 max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-sm font-medium tracking-widest uppercase text-orange-color mb-2" data-aos="fade-up">About</p>
        <h2 class="text-4xl font-extrabold text-white sm:text-5xl" data-aos="fade-up" data-aos-delay="100">
          {{ $t("about.title1") }} <span class="text-gradient">{{ $t("about.title2") }}</span>
        </h2>
        <div class="w-20 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-orange-color to-amber-400"></div>
      </div>

      <div class="grid items-start gap-12 lg:grid-cols-2">
        <div class="flex justify-center lg:justify-start" data-aos="fade-right" data-aos-duration="1000">
          <div class="relative group">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-orange-color to-amber-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500">
            </div>
            <img class="relative w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-2xl"
              :src="image_src" :alt="name_image" />
            <div
              class="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-color rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl animate-float">
              3+ anos
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="1000">
          <h3 class="mb-4 text-2xl font-bold text-white">
            {{ $t("about.subtitle") }}
          </h3>
          <p class="mb-8 text-base leading-relaxed text-gray-400">
            {{ $t("about.description") }}
          </p>

          <div class="space-y-6 mb-8">
            <SkillBar v-for="skill in skills" :key="skill.label" :value="skill.value" :label="skill.label"
              :icon="skill.icon" :delay="skill.delay" />
          </div>

          <div class="space-y-4 mb-8">
            <div v-for="tech in technologies" :key="tech.name"
              class="glass-card rounded-xl p-5 transition-all duration-300 hover:border-orange-color/30 hover:shadow-lg hover:shadow-orange-color/5">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-color/10 flex items-center justify-center">
                  <ion-icon :name="tech.icon" class="text-xl text-orange-color"></ion-icon>
                </div>
                <div>
                  <h4 class="font-semibold text-white">{{ $t(tech.name) }}</h4>
                  <p class="mt-1 text-sm leading-relaxed text-gray-400">{{ $t(tech.content) }}</p>
                </div>
              </div>
            </div>
          </div>

          <span class="inline-block text-xl font-bold text-gradient" data-aos="fade-up">
            {{ $t("about.conclusion") }}
          </span>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import SkillBar from '../components/SkillBar.vue';

export default {
  components: { SkillBar },
  data() {
    return {
      image_src: "/img/foto-th.png",
      name_image: "Theo Henrique",
      skills: [
        { label: 'Laravel', value: 90, icon: 'server-outline', delay: 0 },
        { label: 'Vue.js', value: 85, icon: 'logo-vue', delay: 100 },
        { label: 'React Native', value: 75, icon: 'phone-portrait-outline', delay: 200 },
        { label: 'Tailwind CSS', value: 90, icon: 'color-palette-outline', delay: 300 },
      ],
      technologies: [
        {
          name: "about.laravelTitle",
          content: "about.laravelContent",
          icon: "server-outline"
        },
        {
          name: "about.vueTitle",
          content: "about.vueContent",
          icon: "logo-vue"
        },
        {
          name: "about.tailwindTitle",
          content: "about.tailwindContent",
          icon: "color-palette-outline"
        },
      ]
    };
  }
};
</script>
