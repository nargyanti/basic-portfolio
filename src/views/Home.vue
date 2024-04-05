<template>
    <!-- hero - start -->
    <section class="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:mb-16 lg:flex-row">
        <!-- content - start -->
        <div
            class="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            <h1 class="text-center mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl lg:text-left">Nabilah
                Argyanti Ardyningrum
            </h1>

            <p class="mb-8 text-center leading-relaxed text-gray-500 md:mb-12 lg:text-left lg:w-4/5 xl:text-lg">This is a
                section of some simple filler text, also known as placeholder text. It shares some characteristics of a real
                written text but is random.
            </p>

            <div class="flex flex-row gap-2.5 justify-center lg:justify-start">
                <a href="#"
                    class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">About
                    me</a>

                <a href="#"
                    class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Download
                    CV</a>
            </div>
        </div>
        <!-- content - end -->

        <!-- image - start -->
        <div class="hidden h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:block lg:h-auto xl:w-5/12">
            <img src="https://images.unsplash.com/photo-1620206343767-7da98185edd4?auto=format&q=75&fit=crop&w=1000"
                loading="lazy" alt="Fakurian Design" class="h-full w-full object-cover object-center" />
        </div>
        <!-- image - end -->
    </section>
    <!-- hero - end -->

    <!-- what can i do - start -->
    <section class="mb-8 lg:mb-12">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">What I Do</h2>
            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple
                filler text, also known as placeholder text. It shares some characteristics of a real written text
                but is random or otherwise generated.</p>
        </div>
        <!-- text - end -->

        <div class="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
            <SkillCard v-for="(skill, index) in skills" :key="index" :title="skill.title"
                :description="skill.description" />
        </div>
    </section>
    <!-- what can i do - end -->

    <!-- projects - start -->
    <section id="projects" class="mb-8 lg:mb-12">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Projects</h2>
            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple
                filler text, also known as placeholder text. It shares some characteristics of a real written text but is
                random or otherwise generated.</p>
        </div>
        <!-- text - end -->

        <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
            <ProjectCard v-for="(project, index) in projects" :key="index" :image_url="project.image" :tags="project.tags"
                :title="project.title" :description="project.description" :slug="project.slug" />
        </div>
        <div class="flex justify-center my-10">
            <a href="#"
                class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">Show
                more</a>
        </div>

    </section>
    <!-- projects - start -->
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
import jsonData from '@/assets/data.json';
import SkillCard from '@/components/SkillCard.vue';

const { profile, skills, projects } = jsonData;

export default {
    data() {
        return {
            profile: profile,
            skills: skills,
            projects: projects
        };
    },
    components: {
        ProjectCard,
        SkillCard,
    },
};
</script>