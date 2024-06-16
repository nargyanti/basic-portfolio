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
import MarkdownRenderer from "@/components/MarkdownRenderer.vue";

const router = useRouter();
const project = ref(null);

async function getProjectBySlug(slug) {
    const foundProject = data.projects.find((project) => project.slug === slug) || null;
    if (!foundProject) {
        console.error(`Project dengan slug ${slug} tidak ditemukan.`);
    }
    return foundProject;
}

const text = project.detail;

onMounted(async () => {
    const { slug } = router.currentRoute.value.params;
    project.value = await getProjectBySlug(slug);
    if (!project.value) {
        router.push({ name: 'NotFound' });
    }
    console.log(project.value.detail)
});
</script>

<template>
    <div v-if="project" class="pb-14">
        <section class="bg-primary-light px-6 pt-6 md:px-10 pb-7">
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
                    <p class="text-center px-3 md:px-0 md:text-start">
                        {{ project.description }}
                    </p>
                    <!-- <ItemList :items="project.tools" :column="2" /> -->
                    <div class="flex items-center gap-6">
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
        <div class="bg-white px-6 md:px-10">
            <div class="mx-auto max-w-screen-xl">
                <MarkdownRenderer :path="project.detail" />
            </div>
        </div>
    </div>
    <div v-else>
        <!-- Loading -->
        <section class="bg-white px-6 pb-7 md:px-10">
            <div class="mx-auto max-w-screen-xl">
                <p>Loading...</p>
            </div>
        </section>
    </div>
</template>
