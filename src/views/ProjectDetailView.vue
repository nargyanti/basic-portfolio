<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import data from "@/assets/data.json";

import PrimaryButton from "@/components/PrimaryButton.vue";
import ExternalLink from "@/components/ExternalLink.vue";
import MarkdownRenderer from "@/components/MarkdownRenderer.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";

const router = useRouter();
const project = ref(null);

async function getProjectBySlug(slug) {
    const foundProject =
        data.projects.find((project) => project.slug === slug) || null;
    if (!foundProject) {
        console.error(`Project dengan slug ${slug} tidak ditemukan.`);
    }
    return foundProject;
}

onMounted(async () => {
    const { slug } = router.currentRoute.value.params;
    project.value = await getProjectBySlug(slug);
    if (!project.value) {
        router.push({ name: "NotFound" });
    }
});
</script>

<template>
    <div v-if="project" class="pb-14">
        <!-- Hero -->
        <section class="bg-gray-50 px-6 pb-7 pt-6 md:px-10 md:py-10">
            <div class="mx-auto flex max-w-screen-lg flex-col items-center gap-7">
                <div class="flex flex-col items-center gap-3 text-center">
                    <h1 class="text-3xl font-semibold text-gray-900 lg:text-4xl">
                        {{ project.title }}
                    </h1>
                    <p class="max-w-xl text-gray-700">
                        {{ project.description }}
                    </p>
                </div>
                <div v-if="project.source_code_url || project.demo_url" class="flex gap-4">
                    <ExternalLink v-if="project.source_code_url" :url="project.source_code_url">
                        <PrimaryButton>Source code</PrimaryButton>
                    </ExternalLink>
                    <ExternalLink v-if="project.demo_url" :url="project.demo_url">
                        <SecondaryButton>View demo</SecondaryButton>
                    </ExternalLink>
                </div>
                <img class="w-full object-cover rounded-lg" :src="project.image" :alt="project.title" />
            </div>
        </section>

        <!-- Overview -->
        <div v-if="project.detail" class="bg-primary-light px-6 py-10 md:px-10">
            <div class="mx-auto max-w-screen-lg">
                <MarkdownRenderer :path="project.detail" />
            </div>
        </div>
    </div>
    <div v-else>
        <!-- Loading -->
        <section class="bg-primary-light px-6 pb-7 md:px-10">
            <div class="mx-auto max-w-screen-lg">
                <p class="text-gray-700">Loading...</p>
            </div>
        </section>
    </div>
</template>
