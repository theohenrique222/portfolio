<template>
  <section class="bg-[url('img/home-pine.jpg')] bg-fixed" id="about">
    <div class="bg-black/70 py-10">
      <main class="m-auto max-w-6xl flex flex-col md:flex-row items-center justify-around">  
        <div data-aos="fade-in" data-aos-duration="3000" class="flex md:w-1/2 lg:justify-start justify-center pb-5">
          <img
            class="rounded-xl w-3/4 h-auto md:h-5/6"
            :src="image_src"
            :alt="name_image"
          />
        </div>
        
        <div class="flex flex-col lg:px-0 px-8 md:w-1/2 pb-10">
          <h1 data-aos="fade-up" data-aos-duration="2000" class="font-extrabold text-4xl md:text-5xl mb-5 text-white">
            {{ $t("about.title1") }} <span class="text-orange-500">{{ $t("about.title2") }}</span>
          </h1>
          <h2 data-aos="fade-up" data-aos-duration="2000" class="font-semibold text-lg md:text-xl mb-5 text-orange-color">
            {{ $t("about.subtitle") }}
          </h2>
          <h3 data-aos="fade-up" data-aos-duration="2000" class="tracking-widest font-light text-base mb-5 text-gray-300">
            {{ $t("about.description") }}
          </h3>
          <ul data-aos="fade-up" data-aos-duration="2000" class="tracking-widest font-light text-base mb-5 text-gray-300">
            <li v-for="tecnologie in tecnologies" :key="tecnologie.name" class="mb-2">
              <span class="text-orange-500 font-bold flex">> {{ $t(tecnologie.name) }}</span>
              {{ $t(tecnologie.content) }}
            </li>
          </ul>
          <span class="text-2xl font-bold text-orange-500">
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
        { name: "about.reactTitle", content: "about.reactContent" },
        { name: "about.tailwindTitle", content: "about.tailwindContent" },
      ]
    };
  }
};
</script>

