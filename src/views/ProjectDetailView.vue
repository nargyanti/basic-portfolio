<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import data from "@/assets/data.json";

import ItemList from "@/components/ItemList.vue";
import NavLink from "@/components/NavLink.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import IconText from "@/components/IconText.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import ExternalLink from "@/components/ExternalLink.vue";

const router = useRouter();
const project = ref(null);

onMounted(async () => {
    const { slug } = router.currentRoute.value.params;
    project.value = await getProjectBySlug(slug);
});

async function getProjectBySlug(slug) {
    const foundProject = data.projects.find((project) => project.slug === slug) || null;
    if (!foundProject) {
        console.error(`Project with slug ${slug} not found.`);
    }
    return foundProject;
}
</script>

<template>
    <div v-if="project" class="pb-14">
        <section class="bg-primary-light px-6 pb-7 pt-6 md:px-10 md:pb-14">
            <!-- Navigation -->
            <div class="mb-6 mx-auto max-w-screen-xl">
                <NavLink :to="{ path: '/', hash: '#projects' }" class="text-primary">
                    <IconText icon="mdi:arrow-left-thin" text="Back to projects" iconSize="24" />
                </NavLink>
            </div>

            <!-- Hero -->
            <div
                class="mx-auto flex max-w-screen-xl flex-col items-center md:items-stretch gap-8 md:flex-row lg:gap-14">
                <div class="flex-grow w-full md:w-1/2 lg:w-1/2 overflow-hidden rounded-lg">
                    <img class="w-full h-full object-cover" :src="project.image" :alt="project.title" />
                </div>

                <div class="flex flex-col items-center gap-4 md:items-stretch md:w-1/2 lg:w-1/2">
                    <h1 class="text-center text-2xl lg:text-3xl font-semibold text-gray-700 md:text-start">
                        {{ project.title }}
                    </h1>
                    <p class="text-center text-gray-600 px-3 md:px-0 md:text-start">
                        {{ project.description }}
                    </p>
                    <ItemList :items="project.tools" :column="2" />
                    <div class="mt-6 flex items-center gap-6">
                        <ExternalLink v-if="project.source_code_url" :url="project.source_code_url">
                            <PrimaryButton>Source code</PrimaryButton>
                        </ExternalLink>
                        <ExternalLink v-if="project.demo_url" :url="project.demo_url"
                            class="font-semibold text-primary hover:underline">
                            <IconText :icon="'heroicons:arrow-top-right-on-square-16-solid'" :iconPosition="'right'"
                                :text="'View demo'" />
                        </ExternalLink>
                    </div>
                </div>
            </div>


        </section>

        <!-- Overview -->
        <section v-if="project.overview" class="bg-white px-6 py-6 md:px-10">
            <div class="mx-auto max-w-screen-xl">
                <SectionTitle class="mb-4">Overview</SectionTitle>
                <p class="text-gray-600">{{ project.overview }}</p>
            </div>
        </section>

        <!-- Features -->
        <section v-if="project.features" class="bg-white px-6 py-6 md:px-10">
            <div class="mx-auto max-w-screen-xl">
                <SectionTitle class="mb-4">Features</SectionTitle>
                <ItemList :items="project.features" :column="1" />
            </div>
        </section>

        <!-- Challenges -->
        <section v-if="project.challenges" class="bg-white px-6 py-6 md:px-10">
            <div class="mx-auto max-w-screen-xl">
                <SectionTitle class="mb-4">Challenges</SectionTitle>
                <p class="text-gray-600">{{ project.challenges }}</p>
            </div>
        </section>
    </div>
    <div v-else>
        <!-- Loading -->
        <section class="bg-white px-6 py-7 md:px-10">
            <div class="mx-auto max-w-screen-xl">
                <p class="text-gray-600">Loading...</p>
            </div>
        </section>
    </div>
</template>