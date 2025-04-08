<template>
    <section class="bg-[url('public/img/bg3.jpg')] w-full bg-fixed bg-no-repeat bg-cover" id="portfolio">
        <div class="pt-14 mb-20 text-center text-white">
            <p data-aos="fade-up" data-aos-duration="2000"  class="font-light text-base">{{ $t("portfolio.title") }}</p>
            <h2 data-aos="fade-up" data-aos-duration="2000"  class="font-bold text-4xl">
              <span class="text-orange-color text-4xl md:text-5xl">{{ $t("portfolio.projects") }}</span> {{
                $t("portfolio.recent") }}
            </h2>
          </div>
        <div class="grid grid-cols-1 md:grid-cols-2 max-w-6xl m-auto">
            <Card v-for="card in cardsContainer" :key="card.id" data-aos="fade-up" data-aos-duration="2000"  class="overflow-hidden w-11/12 text-center m-auto mb-5">
                <template #header>
                    <Image :src="card.cardImage" :alt="card.cardTitle" preview />
                </template>
                <template #title>
                    <p class="text-orange-color font-bold text-2xl">
                        {{ $t(card.cardTitle) }}
                    </p>
                </template>
                <template #content>
                    <p class="m-0 font-light text-center">
                        {{ $t(card.cardContent) }}
                    </p>
                </template>
                <template #footer>
                    <div class="flex gap-4 mt-3 justify-center">
                        <a class="flex justify-center text-base items-center gap-2 bg-transparent hover:bg-neutral-100 hover:text-neutral-950 w-44 h-12 rounded-md border border-neutral-400 transition-all"
                            href="#">
                            Repositório<i class="pi pi-github" style="font-size: 1.5rem"></i>
                        </a>
                        <a class="flex justify-center text-base items-center gap-2 bg-orange-color hover:bg-neutral-100 hover:text-black w-44 rounded-md"
                            :href=card.link>
                            Ver Projeto<i class="pi pi-external-link" style="font-size: 1rem"></i>
                        </a>
                    </div>
                </template>
            </Card>
        </div>

    </section>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            cardsContainer: [
                {
                    id: 1,
                    cardTitle: "portfolio.burgerTitle",
                    cardImage: "/img/burger-manager.jpg",
                    link: "https://burger-manager.vercel.app/",
                    repositorio: "https://github.com/theohenrique222/burger-manager.git",
                    cardContent: "portfolio.burgerContent",
                },
                {
                    id: 2,
                    cardTitle: "portfolio.smileTitle",
                    cardImage: "/img/ha-smile-designer.jpg",
                    link: "https://smile-designer.vercel.app/",
                    repositorio: "https://github.com/theohenrique222/smile-designer.git",
                    cardContent: "portfolio.smileContent",
                },
                {
                    id: 3,
                    cardTitle: "portfolio.nutriTitle",
                    cardImage: "/img/nutri-base.jpg",
                    link: "https://nutribase-wheat.vercel.app/",
                    repositorio: "https://github.com/theohenrique222/nutribase.git",
                    cardContent: "portfolio.nutriContent",
                },
                {
                    id: 4,
                    cardTitle: "Gerenciador de Tarefas",
                    cardImage: "/img/lista-de-afazeres.jpg",
                    link: "",
                    repositorio: "",
                    cardContent: "portfolio.tasksContent",
                },
            ],
        };
    },
};
</script>

<style></style>
