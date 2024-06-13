<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import ItemList from "@/components/ItemList.vue";
import data from "@/assets/data.json";
import { Icon } from "@iconify/vue";
import NavLink from "@/components/NavLink.vue";
import SectionTitle from "@/components/SectionTitle.vue";

const router = useRouter();
const project = ref(null);

onMounted(() => {
    const { slug } = router.currentRoute.value.params;
    project.value = getProjectBySlug(slug);
});

function getProjectBySlug(slug) {
    return data.projects.find((project) => project.slug === slug) || null;
}
</script>

<template>
    <div v-if="project" class="pb-14">
        <section class="bg-light px-6 pb-7 pt-7 md:px-10 md:pb-14">
            <div class="mb-6">
                <NavLink :to="{ path: '/', hash: '#projects' }" class="text-primary">
                    <Icon icon="mdi:arrow-left-thin" class="mb-1 inline" width="24px" height="24px" />
                    Back to projects
                </NavLink>
            </div>
            <div class="mx-auto flex max-w-screen-xl flex-col gap-8 lg:flex-row lg:gap-14">
                <div class="max-w-xl overflow-hidden rounded-lg shadow-lg">
                    <img class="h-full w-full object-cover" :src="project.image" :alt="project.title" />
                </div>

                <div class="flex flex-col items-center gap-5 md:items-start">
                    <h1 class="text-center text-3xl font-semibold text-gray-700 md:text-start">
                        {{ project.title }}
                    </h1>
                    <p class="text-center text-gray-600 md:text-start">
                        {{ project.description }}
                    </p>
                    <ItemList :items="project.tools" :column="2" />
                    <div class="mt-6 flex items-center gap-6">
                        <RouterLink :to="{ path: '/', hash: '#contact' }"
                            class="rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-dark">
                            Source code</RouterLink>
                        <a href="/CV - Nabilah Argyanti.pdf" target="_blank" rel="noopener noreferrer"
                            class="font-semibold text-primary hover:underline">View demo
                            <Icon icon="heroicons:arrow-top-right-on-square-16-solid" class="mx-1 mb-1 inline"
                                width="20" height="20" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section v-if="project.overview" class="bg-white px-6 py-7 md:px-10">
            <div class="mx-auto max-w-screen-xl">
                <SectionTitle class="mb-4">Overview</SectionTitle>
                <p class="text-gray-600">{{ project.overview }}</p>
            </div>
        </section>
        <section v-if="project.features" class="bg-white px-6 py-7 md:px-10">
            <div class="mx-auto max-w-screen-xl">
                <SectionTitle class="mb-4">Features</SectionTitle>
                <ItemList :items="project.features" :column="1" />
            </div>
        </section>
        <section v-if="project.challenges" class="bg-white px-6 py-7 md:px-10">
            <div class="mx-auto max-w-screen-xl">
                <SectionTitle class="mb-4">Challenges</SectionTitle>
                <p class="text-gray-600">{{ project.challenges }}</p>
            </div>
        </section>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<style scoped>
.content h1 {
    font-size: 50px;
}
</style>
