<template>
    <!-- hero - start -->
    <section class="pb-4 flex gap-10">
        <img src="https://i.pravatar.cc/512?img=5" alt="Profile Picture" class="rounded-full w-36 h-36 hidden md:block">
        <div class="flex flex-col gap-4">
            <h1 class="text-3xl font-bold text-center text-primary">Hi there! I'm <span class="block underline">Nabilah
                    Argyanti</span>
            </h1>
            <p class="text-base text-gray-600 text-justify">I am a Informatics Engineering graduate with a passion for
                web development. I've worked on various web projects through internships, volunteering, contracts, and
                freelancing. Currently, I'm diving into Laravel and Vue.js. I'm excited to keep learning and contribute to
                tech innovation.</p>
        </div>
    </section>
    <!-- hero - end -->

    <!-- about - start -->
    <section id="about" class="pt-3">
        <!-- tech skill - start -->
        <div class="">
            <h2 class="text-2xl font-bold text-primary pb-3">Technical Skills</h2>
            <SkillCard />
            <SkillCard />
        </div>
        <!-- tech skill - end -->
        <!-- work experience - start -->
        <div class="">
            <h2 class="text-2xl font-bold text-primary pb-3">Work Experience</h2>
            <Timeline />
        </div>
        <!-- work experience - end -->
    </section>
    <!-- about  - end -->

    <!-- projects - start -->
    <section id="projects" class="py-5 flex flex-col gap-4">
        <div class="text-center">
            <h2 class="text-2xl font-bold text-primary">Projects</h2>
            <p class="py-2 text-gray-600 max-w-screen-md mx-auto">This is a section of some simple filler text, also known
                as placeholder text. It shares some characteristics of a real written text but is random or otherwise
                generated.</p>
        </div>
        <div class="grid gap-x-6 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
            <ProjectCard v-for="(project, index) in projects" :key="index" :image="project.image" :tags="project.tags"
                :title="project.title" :description="project.description" :slug="project.slug" />
        </div>
        <div class="mx-auto">
            <button @click="$router.push('/projects')"
                class="inline-block rounded-lg bg-accent px-4 py-3 text-center text-base font-medium text-primary transition duration-100 hover:bg-primary hover:text-light">
                Show more
            </button>
        </div>
    </section>
    <!-- projects - start -->

    <!-- get in touch - start -->
    <section id="contact" class="py-4 flex flex-col gap-4">
        <h2 class="text-xl font-bold text-primary text-center">Get In Touch</h2>
        <p class="text-gray-600 text-center">Lorem ipsum dolor sit amet. Aku nggak tau apa terusannya. Pokoknya klo minat
            kerja sama
            bisa hubungi saya </p>
        <div class="flex gap-4 justify-center">
            <button @click="$router.push('/projects')"
                class="rounded-lg bg-primary px-4 py-3 text-center text-base font-medium text-light transition duration-100 hover:bg-primary hover:text-light">
                Contact
            </button>
            <button @click="$router.push('/projects')"
                class="rounded-lg bg-accent px-4 py-3 text-center text-base font-medium text-primary transition duration-100 hover:bg-primary hover:text-light">
                Resume
            </button>
        </div>
    </section>
    <!-- get in touch - end -->
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
import Timeline from '@/components/Timeline.vue';
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
        Timeline,
        ProjectCard,
        SkillCard,
    },
};
</script>