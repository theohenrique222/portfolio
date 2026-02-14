<template>
    <section class="bg-[url('public/img/bg3.jpg')] w-full bg-fixed bg-no-repeat bg-cover" id="portfolio">
        <div class="mb-10 text-center text-white pt-14">
            <p data-aos="fade-up" data-aos-duration="2000" class="text-base font-light">{{ $t("portfolio.title") }}</p>
            <h2 data-aos="fade-up" data-aos-duration="2000" class="text-4xl font-bold">
                <span class="text-4xl text-orange-color md:text-5xl">{{ $t("portfolio.projects") }}</span> {{
                    $t("portfolio.recent") }}
            </h2>
        </div>
        <div class="flex justify-center mb-10" data-aos="fade-up" data-aos-duration="2000">
            <Select v-model="selectedTech" :options="allTechnologies" :placeholder="$t('portfolio.filter')"
                class="w-11/12 md:w-1/2" />
        </div>
        <div class="grid max-w-6xl grid-cols-1 pb-10 m-auto md:grid-cols-2">
            <Card v-for="card in filteredCards" :key="card.id" data-aos="fade-up" data-aos-duration="2000"
                class="w-11/12 m-auto mb-5 overflow-hidden text-center">
                <template #header>
                    <Image style="max-height: 25rem;" :class=card.class :src="card.cardImage" :alt="card.cardTitle"
                        preview />
                </template>

                <template #title>
                    <p class="text-2xl font-bold text-orange-color">
                        {{ $t(card.cardTitle) }}
                    </p>
                </template>
                <template #content>
                    <div class="min-h-24">
                        <p class="m-0 font-light text-center">
                            {{ $t(card.cardContent) }}
                        </p>
                    </div>
                </template>
                <template #footer>
                    <div class="flex justify-center gap-4 mt-3">
                        <a class="flex items-center justify-center h-12 gap-2 text-base transition-all bg-transparent border rounded-md hover:bg-neutral-100 hover:text-neutral-950 w-44 border-neutral-400"
                            target="_blank" :href=card.repositorio>
                            Repositório<i class="pi pi-github" style="font-size: 1.5rem"></i>
                        </a>
                        <a class="flex items-center justify-center gap-2 text-base rounded-md w-44" :class="[
                            card.link ? 'bg-orange-color hover:bg-neutral-100 hover:text-black' : 'cursor-not-allowed bg-orange-700 opacity-60 pointer-events-none'
                        ]" :href="card.link || '#'" :target="card.link ? '_blank' : null">
                            Ver Projeto
                            <i class="pi pi-external-link" style="font-size: 1rem"></i>
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
            selectedTech: null,
            allTechnologies: [
                "Laravel",
                "Vue.js",
                "React Native",
                "Tailwind CSS",
                "JavaScript",
                "Json",
            ],
            cardsContainer: [
                {
                    id: 1,
                    cardTitle: "portfolio.flexTitle",
                    cardImage: "/img/flex-sales.jpg",
                    link: "",
                    repositorio: "https://github.com/theohenrique222/FlexSales.git",
                    cardContent: "portfolio.flexContent",
                    technologies: ["Laravel", "MySQL", "AdminLTE", "JavaScript"]
                },
                {
                    id: 2,
                    cardTitle: "portfolio.nutriTitle",
                    cardImage: "/img/nutri-base.jpg",
                    link: "https://nutri-base.vercel.app/",
                    repositorio: "https://github.com/theohenrique222/nutribase.git",
                    cardContent: "portfolio.nutriContent",
                    technologies: ["Vue.js", "Tailwind CSS"]
                },
                {
                    id: 3,
                    cardTitle: "portfolio.burgerTitle",
                    cardImage: "/img/burger-manager.jpg",
                    link: "https://burger-manager.vercel.app/",
                    repositorio: "https://github.com/theohenrique222/burger-manager.git",
                    cardContent: "portfolio.burgerContent",
                    technologies: ["Vue.js", "JSON", "Bootstrap"]
                },
                {
                    id: 4,
                    cardTitle: "portfolio.smileTitle",
                    cardImage: "/img/ha-smile-designer.jpg",
                    link: "https://smile-designer.vercel.app/",
                    repositorio: "https://github.com/theohenrique222/smile-designer.git",
                    cardContent: "portfolio.smileContent",
                    technologies: ["Vue.js", "Tailwind CSS"]
                },
                {
                    id: 5,
                    cardTitle: "portfolio.generatorTitle",
                    cardImage: "/img/password-generator.jpg",
                    link: "",
                    repositorio: "https://github.com/theohenrique222/password-generator.git",
                    cardContent: "portfolio.generatorContent",
                    technologies: ["React Native"]
                },
                {
                    id: 6,
                    cardTitle: "portfolio.dentalTitle",
                    cardImage: "/img/dental-lab.jpg",
                    link: "",
                    repositorio: "https://github.com/theohenrique222/password-generator.git",
                    cardContent: "portfolio.dentalContent",
                    technologies: ["Laravel", "Filament", "MySQL", "Vue.js", "Tailwind CSS"]
                },
                {
                    id: 7,
                    cardTitle: "portfolio.jsonTitle",
                    cardImage: "/img/json-server.jpg",
                    link: "",
                    repositorio: "",
                    cardContent: "portfolio.jsonContent",
                    technologies: ["JavaScript", "HTML", "CSS"]
                },
                {
                    id: 8,
                    cardTitle: "Gerenciador de Tarefas",
                    cardImage: "/img/lista-de-afazeres.jpg",
                    link: "",
                    repositorio: "",
                    cardContent: "portfolio.tasksContent",
                    technologies: ["JavaScript", "HTML", "CSS"]
                },
            ]
        };
    },
    computed: {
        filteredCards() {
            if (!this.selectedTech) return this.cardsContainer;
            return this.cardsContainer.filter(card =>
                card.technologies.includes(this.selectedTech)
            );
        }
    }
};
</script>


<style></style>
