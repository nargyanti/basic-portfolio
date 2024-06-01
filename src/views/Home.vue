<script setup>
import { Icon } from "@iconify/vue";
import ProjectCard from "@/components/ProjectCard.vue";
import TimelineList from "@/components/TimelineList.vue";
import jsonData from "@/assets/data.json";
import SectionTitle from "@/components/SectionTitle.vue";
import ProfileCard from "@/components/ProfileCard.vue";

const { profile, education, technical_skills, work_experience, projects } = jsonData;
</script>

<template>
    <!-- Hero::start -->
    <section class="flex flex-col items-center gap-6 py-7 md:py-10 lg:flex-row-reverse lg:items-start lg:gap-14 lg:py-14">
        <!-- Profile Picture::start -->
        <img src="@/assets/images/profile-picture.jpg" alt="Profile" class="h-32 rounded-full md:h-56" />
        <!-- Profile Picture::end -->

        <!-- Bio::start -->
        <div class="flex flex-col gap-6">
            <h1 class="text-center text-3xl font-bold text-gray-700 md:text-5xl lg:text-start">
                Hi there! I'm
                <span class="block text-primary underline md:inline">{{
                    profile.name
                }}</span>
            </h1>
            <p class="text-justify text-gray-600 lg:text-start">
                {{ profile.bio }}
            </p>
            <div class="flex items-center justify-center gap-6 lg:justify-start">
                <a href="https://example.com" target="_blank" rel="noopener noreferrer"
                    class="rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-dark">
                    Get in touch
                </a>
                <a href="" class="font-semibold text-primary hover:underline">Explore my resume
                    <Icon icon="heroicons:arrow-top-right-on-square-16-solid" class="mx-1 mb-1 inline" width="20"
                        height="20" />
                </a>
            </div>
        </div>
        <!-- Bio::end -->
    </section>
    <!-- Hero::end -->

    <!-- About::start -->
    <section id="about" class="py-14 md:flex md:gap-10 lg:gap-20 md:justify-between">
        <!-- Background::start -->
        <div class="flex flex-col gap-14">
            <!-- Education::start -->
            <div>
                <SectionTitle :title="'Education'" />
                <ProfileCard :icon="education.icon" :title="education.institution" :sub_title="education.degree"
                    :description="education.thesis" :items="education.subjects" :column="1" />
            </div>
            <!-- Education::end -->

            <!-- Skills:start -->
            <div class="">
                <SectionTitle :title="'Technical Skills'" />
                <div v-for="(technical_skill, index) in technical_skills" :key="index">
                    <ProfileCard :icon="technical_skill.icon" :title="technical_skill.category"
                        :sub_title="technical_skill.degree" :description="technical_skill.description"
                        :items="technical_skill.skills" :column="2"
                        :class="`${index === technical_skills.length - 1 ? '' : 'pb-6'}`" />
                </div>
            </div>
            <!-- Skills:end -->
        </div>
        <!-- Background::end -->

        <!-- Work Experience::start -->
        <div class="">
            <SectionTitle :title="'Work Experience'" />
            <TimelineList :activities="work_experience" />
        </div>
        <!-- Work Experience::end -->
    </section>
    <!-- About::End -->

    <!-- projects - start -->
    <section id="projects" class="flex flex-col gap-4 py-5 md:gap-6">
        <div class="text-center">
            <h2 class="text-2xl font-bold text-primary">Projects</h2>
            <p class="mx-auto max-w-screen-md py-2 text-gray-600">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated.
            </p>
        </div>
        <div class="flex flex-wrap justify-center gap-2">
            <button
                class="flex items-center gap-2 rounded-lg bg-secondary p-2 text-primary hover:bg-primary hover:text-light active:bg-primary active:text-light">
                <Icon icon="simple-icons:laravel" style="width: 1.25rem; height: 1.25rem" /><span>Laravel</span>
            </button>
            <button
                class="flex items-center gap-2 rounded-lg bg-secondary p-2 text-primary hover:bg-primary hover:text-light active:bg-primary active:text-light">
                <Icon icon="simple-icons:laravel" style="width: 1.25rem; height: 1.25rem" /><span>Laravel</span>
            </button>
            <button
                class="flex items-center gap-2 rounded-lg bg-secondary p-2 text-primary hover:bg-primary hover:text-light active:bg-primary active:text-light">
                <Icon icon="simple-icons:laravel" style="width: 1.25rem; height: 1.25rem" /><span>Laravel</span>
            </button>
            <button
                class="flex items-center gap-2 rounded-lg bg-secondary p-2 text-primary hover:bg-primary hover:text-light active:bg-primary active:text-light">
                <Icon icon="simple-icons:laravel" style="width: 1.25rem; height: 1.25rem" /><span>Laravel</span>
            </button>
            <button
                class="flex items-center gap-2 rounded-lg bg-secondary p-2 text-primary hover:bg-primary hover:text-light active:bg-primary active:text-light">
                <Icon icon="simple-icons:laravel" style="width: 1.25rem; height: 1.25rem" /><span>Laravel</span>
            </button>
            <!-- Tambahkan button-button lainnya di sini -->
        </div>
        <div class="grid gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard v-for="(project, index) in projects" :key="index" :image="project.image" :tags="project.tags"
                :title="project.title" :description="project.description" :slug="project.slug" />
        </div>
        <div class="mx-auto">
            <button @click="$router.push('/projects')"
                class="inline-block rounded-lg bg-secondary px-4 py-3 text-center text-base font-medium text-primary transition duration-100 hover:bg-primary hover:text-light">
                Show more
            </button>
        </div>
    </section>
    <!-- projects - start -->

    <!-- get in touch - start -->
    <section id="contact" class="py-4">
        <h2 class="text-center text-xl font-bold text-primary md:text-start">
            GET IN TOUCH
        </h2>
        <div class="flex flex-col gap-10 md:flex-row">
            <p class="text-center text-gray-600 md:text-start">
                Lorem ipsum dolor sit amet. Aku nggak tau apa terusannya.
                Pokoknya klo minat kerja sama bisa hubungi saya
            </p>
            <div class="flex justify-center gap-4">
                <button @click="$router.push('/projects')"
                    class="rounded-lg bg-primary px-4 py-3 text-center text-base font-medium text-light transition duration-100 hover:bg-primary hover:text-light">
                    Contact
                </button>
                <button @click="$router.push('/projects')"
                    class="rounded-lg bg-secondary px-4 py-3 text-center text-base font-medium text-primary transition duration-100 hover:bg-primary hover:text-light">
                    Resume
                </button>
            </div>
        </div>
    </section>
    <!-- get in touch - end -->
</template>
