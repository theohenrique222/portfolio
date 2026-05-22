<template>
  <section class="relative overflow-hidden bg-neutral-950 section-padding" id="about">
    <div class="absolute top-0 right-0 w-64 h-64 opacity-20 bg-orange-color/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-80 h-80 opacity-10 bg-orange-color/10 rounded-full blur-3xl"></div>

    <main class="relative z-10 max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-sm font-medium tracking-widest uppercase text-orange-color mb-2" data-aos="fade-up">{{ $t("about.intro") }}</p>
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
            <img class="relative w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-2xl shadow-2xl"
              :src="image_src" :alt="name_image" />
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="1000">
          <h3 class="mb-4 text-2xl font-bold text-white">
            {{ $t("about.subtitle") }}
          </h3>
          <p class="mb-8 text-base leading-relaxed text-gray-400">
            {{ $t("about.description") }}
          </p>

          <div class="space-y-4 mb-8">
            <div v-for="tech in technologies" :key="tech.name"
              class="glass-card rounded-xl p-5 transition-all duration-300 hover:border-orange-color/30 hover:shadow-lg hover:shadow-orange-color/5">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-color/10 flex items-center justify-center">
                  <svg v-if="tech.type === 'laravel'" class="w-5 h-5 text-orange-color" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"/>
                  </svg>
                  <svg v-else-if="tech.type === 'docker'" class="w-5 h-5 text-orange-color" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/>
                  </svg>
                  <ion-icon v-else :name="tech.icon" class="text-xl text-orange-color"></ion-icon>
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
export default {
  data() {
    return {
      image_src: "/img/foto-th.png",
      name_image: "Theo Henrique",
      technologies: [
        {
          name: "about.laravelTitle",
          content: "about.laravelContent",
          type: "laravel"
        },
        {
          name: "about.vueTitle",
          content: "about.vueContent",
          type: "ion",
          icon: "logo-vue"
        },
        {
          name: "about.dockerTitle",
          content: "about.dockerContent",
          type: "docker"
        },
        {
          name: "about.reactTitle",
          content: "about.reactContent",
          type: "ion",
          icon: "logo-react"
        },
      ]
    };
  }
};
</script>
