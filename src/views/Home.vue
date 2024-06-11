<script setup>
import { Icon } from "@iconify/vue";
import ProjectCard from "@/components/ProjectCard.vue";
import TimelineList from "@/components/TimelineList.vue";
import data from "@/assets/data.json";
import SectionTitle from "@/components/SectionTitle.vue";
import ProfileCard from "@/components/ProfileCard.vue";
import ProfilePicture from "@/assets/images/profile-picture.webp";

const { profile, education, technical_skills, work_experience, projects } =
    data;
</script>

<template>
    <!-- Hero::start -->
    <section class="bg-light px-6 py-7 md:px-10 md:py-10 lg:py-14">
        <div class="mx-auto flex max-w-screen-xl flex-col items-center gap-6 lg:flex-row-reverse lg:items-start lg:gap-14">
            <!-- Profile Picture::start -->
            <img :src="ProfilePicture" alt="Profile" class="h-32 rounded-full md:h-56" />
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
                    <RouterLink :to="{ path: '/', hash: '#contact' }"
                        class="rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-dark">
                        Get in touch</RouterLink>
                    <a href="/CV - Nabilah Argyanti.pdf" target="_blank" rel="noopener noreferrer"
                        class="font-semibold text-primary hover:underline">Explore my
                        resume
                        <Icon icon="heroicons:arrow-top-right-on-square-16-solid" class="mx-1 mb-1 inline" width="20"
                            height="20" />
                    </a>
                </div>
            </div>
            <!-- Bio::end -->
        </div>
    </section>
    <!-- Hero::end -->

    <!-- About::start -->
    <section id="about" class="bg-light px-6 py-14 md:px-10">
        <div class="mx-auto flex max-w-screen-xl flex-col gap-14 md:flex-row md:justify-between lg:gap-20">
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
                    <div v-for="( technical_skill, index ) in  technical_skills " :key="index">
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
        </div>
    </section>
    <!-- About::End -->

    <!-- Projects::start -->
    <section id="projects" class="bg-light px-6 py-14 md:px-10">
        <div class="mx-auto max-w-screen-xl">
            <SectionTitle :title="'Projects Showcase'"
                :sub_title="`These are projects I've completed, providing effective solutions to diverse problems.`" />
            <div class="flex flex-col items-center">
                <div class="grid gap-x-6 gap-y-6 pt-3 md:grid-cols-2 lg:grid-cols-3">
                    <ProjectCard v-for="( project, index ) in  projects " :key="index" :image="project.image"
                        :tags="project.tags" :title="project.title" :description="project.description"
                        :slug="project.slug" />
                </div>
                <div class="pt-14">
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer"
                        class="rounded-lg border border-primary bg-white px-5 py-3 font-semibold text-primary hover:bg-primary hover:text-white">
                        Show more
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- Projects::end -->

    <!-- CTA::start -->
    <section id="contact" class="bg-primary px-6 py-16 md:px-10">
        <div class="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-4">
            <h2 class="text-4xl font-bold text-white text-center">Let's Collaborate!</h2>
            <p class="text-center text-lg text-white">
                Ready to discuss projects, ideas, or just connect? Feel free to
                reach out to me
            </p>
            <a href="mailto:nargyanti@gmail.com" target="_blank" rel="noopener noreferrer"
                class="mt-4 rounded-lg bg-white px-5 py-3 font-semibold text-primary hover:bg-primary-dark hover:text-white">
                <Icon icon="material-symbols:mail" class="mr-2 inline" width="30" height="30" />
                nargyanti@gmail.com
            </a>
        </div>
    </section>
    <!-- CTA::end -->
</template>
