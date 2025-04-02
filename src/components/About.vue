<template>
  <section class="w-full bg-black" id="sobre">
    <main class="m-auto max-w-6xl flex flex-col md:flex-row items-center justify-around">
      
      <div class="flex md:w-1/2 lg:justify-start justify-center pb-5">
        <img
          class="rounded-xl w-3/4 h-auto md:h-5/6"
          :src="image_src"
          :alt="name_image"
        />
      </div>
      
      <div class="flex flex-col lg:px-0 px-8 md:w-1/2 pb-10">
        <h1 class="font-extrabold text-4xl md:text-5xl mb-5 text-white">
          {{ $t("about-1") }} <span class="text-orange-500">{{ $t("about-2") }}</span>
        </h1>
        <h2 class="font-semibold text-lg md:text-xl mb-5 text-gray-300">
          {{ $t("about-3") }}
        </h2>
        <h3 class="tracking-widest font-light text-base mb-5 text-gray-400">
          {{ $t("about-4") }}
        </h3>
        <ul class="tracking-widest font-light text-base mb-5 text-gray-300 pl-3 list-disc">
          <li v-for="tecnologie in tecnologies" :key="tecnologie.name" class="mb-2">
            <ion-icon name="chevron-forward-outline" class="text-orange-500"></ion-icon>
            <span class="text-orange-500 font-bold">{{ $t(tecnologie.name) }}</span>
            {{ $t(tecnologie.content) }}
          </li>
        </ul>
        <span class="text-xl font-bold text-orange-500">
          {{ $t("about-conclusion") }}
        </span>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      image_src: "/img/avatar.jpg",
      name_image: "Theo Henrique",
      tecnologies: [
        { name: "about-laravel", content: "about-laravel-desc" },
        { name: "about-tailwind", content: "about-tailwind-desc" },
        { name: "about-vue", content: "about-vue-desc" }
      ]
    };
  }
};
</script>

