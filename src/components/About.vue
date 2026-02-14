<template>
  <section class="bg-[url('img/home-pine.jpg')] bg-fixed" id="about">
    <div class="py-10 bg-black/75 backdrop-blur-sm">
      <main class="flex flex-col items-center justify-around max-w-6xl m-auto md:flex-row">  
        <div data-aos="fade-up" data-aos-duration="3000" class="flex justify-center pb-5 md:w-1/2 lg:justify-start">
          <img
            class="w-3/4 h-auto rounded-xl md:h-5/6"
            :src="image_src"
            :alt="name_image"
          />
        </div>
        
        <div class="flex flex-col px-8 pb-10 lg:px-0 md:w-1/2">
          <h1 data-aos="fade-up" data-aos-duration="2000" class="mb-5 text-4xl font-extrabold text-white md:text-5xl">
            {{ $t("about.title1") }} <span class="text-orange-500">{{ $t("about.title2") }}</span>
          </h1>
          <h2 data-aos="fade-up" data-aos-duration="2000" class="mb-5 text-lg font-semibold md:text-xl text-orange-color">
            {{ $t("about.subtitle") }}
          </h2>
          <h3 data-aos="fade-up" data-aos-duration="2000" class="mb-5 text-base font-light tracking-widest text-gray-300">
            {{ $t("about.description") }}
          </h3>
          <ul 
          data-aos="fade-up" 
          data-aos-duration="2000" class="mb-5 text-base font-light tracking-widest text-gray-300">
            <li v-for="tecnologie in tecnologies" :key="tecnologie.name" class="mb-2">
              <span class="flex font-bold text-orange-500">> 
                {{ $t(tecnologie.name) }}
              </span>
                {{ $t(tecnologie.content) }}
            </li>
          </ul>
          <span 
            data-aos="fade-up" 
            data-aos-duration="2000"
            class="text-2xl font-bold text-orange-500">
              {{ $t("about.conclusion") }}
          </span>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      image_src: "/img/foto-th.png",
      name_image: "Theo Henrique",
      tecnologies: [
        { name: "about.laravelTitle", content: "about.laravelContent" },
        { name: "about.vueTitle", content: "about.vueContent" },
        { name: "about.tailwindTitle", content: "about.tailwindContent" },
      ]
    };
  }
};
</script>

