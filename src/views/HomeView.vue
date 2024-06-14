<script setup>
import { Icon } from "@iconify/vue";

import ProjectCard from "@/components/ProjectCard.vue";
import TimelineList from "@/components/TimelineList.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import ProfileCard from "@/components/ProfileCard.vue";

import data from "@/assets/data.json";
import ExternalLink from "@/components/ExternalLink.vue";
import NavLink from "@/components/NavLink.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import IconText from "@/components/IconText.vue";


const { profile, education, technical_skills, work_experience, projects } = data;
console.log(profile.resume)
</script>

<template>
    <!-- Hero -->
    <section class="bg-primary-light px-6 py-7 md:px-10 md:py-12">
        <div
            class="mx-auto flex max-w-screen-xl flex-col items-center gap-6 lg:flex-row-reverse lg:items-start lg:gap-14">
            <!-- Profile Picture -->
            <img :src="profile.image" alt="Profile" class="h-32 rounded-full md:h-56" />

            <!-- Bio -->
            <div class="flex flex-col gap-6">
                <h1 class="text-center text-3xl font-bold text-gray-700 md:text-5xl lg:text-start">
                    Hi there! I'm <span class="block text-primary underline md:inline">{{ profile.name }}</span>
                </h1>
                <p class="text-justify text-gray-600 lg:text-start">{{ profile.bio }}</p>
                <div class="flex items-center justify-center gap-6 lg:justify-start">
                    <RouterLink :to="{ path: '/', hash: '#contact' }">
                        <PrimaryButton>Get in touch</PrimaryButton>
                    </RouterLink>
                    <ExternalLink :url="`${profile.resume_url}`" class="font-semibold text-primary hover:underline">
                        <IconText :icon="'heroicons:arrow-top-right-on-square-16-solid'" :iconPosition="'right'"
                            :text="'Explore my resume'" />
                    </ExternalLink>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero::end -->

    <!-- About::start -->
    <section id="about" class="bg-primary-light px-6 py-7 md:px-10 md:py-12">
        <div class="mx-auto flex max-w-screen-xl flex-col gap-14 md:flex-row md:justify-between lg:gap-20">
            <!-- Background::start -->
            <div class="flex flex-col gap-14">
                <!-- Education::start -->
                <div>
                    <SectionTitle class="pb-8">Education</SectionTitle>
                    <ProfileCard :icon="education.icon" :title="education.institution" :sub_title="education.degree"
                        :description="education.thesis" :items="education.subjects" :column="1" />
                </div>
                <!-- Education::end -->

                <!-- Skills:start -->
                <div class="">
                    <SectionTitle class="pb-8">Technical Skills</SectionTitle>
                    <div v-for="(technical_skill, index) in technical_skills" :key="index">
                        <ProfileCard :icon="technical_skill.icon" :title="technical_skill.category"
                            :sub_title="technical_skill.degree" :description="technical_skill.description"
                            :items="technical_skill.skills"
                            :class="`${index === technical_skills.length - 1 ? '' : 'pb-6'}`" />
                    </div>
                </div>
                <!-- Skills:end -->
            </div>
            <!-- Background::end -->

            <!-- Work Experience::start -->
            <div class="">
                <SectionTitle class="pb-8">Work Experience</SectionTitle>
                <TimelineList :activities="work_experience" />
            </div>
            <!-- Work Experience::end -->
        </div>
    </section>
    <!-- About::End -->

    <!-- Projects::start -->
    <section id="projects" class="bg-primary-light px-6 pb-14 pt-7 md:px-10 md:px-12 md:pt-14">
        <div class="mx-auto max-w-screen-xl">
            <SectionTitle>Project Showcase</SectionTitle>
            <p class="pt-3 text-gray-600">
                These are projects I've completed, providing effective solutions
                to diverse problems.
            </p>
            <div class="flex flex-col items-center pt-8">
                <div class="grid gap-x-6 gap-y-6 pt-3 md:grid-cols-2 lg:grid-cols-3">
                    <ProjectCard v-for="(project, index) in projects" :key="index" :image="project.image"
                        :tags="project.tags" :title="project.title" :description="project.description"
                        :slug="project.slug" />
                </div>
            </div>
        </div>
    </section>
    <!-- Projects::end -->

    <!-- CTA::start -->
    <section id="contact" class="bg-primary px-6 py-16 md:px-10">
        <div class="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-4">
            <h2 class="text-center text-4xl font-bold text-white">
                Let's Collaborate!
            </h2>
            <p class="text-center text-lg text-white">
                Ready to discuss projects, ideas, or just connect? Feel free to
                reach out to me
            </p>
            <ExternalLink :url="`mailto:${profile.email}`">
                <SecondaryButton>
                    <IconText :icon="'material-symbols:mail'" :text="profile.email" :iconSize="30" />
                </SecondaryButton>
            </ExternalLink>
        </div>
    </section>
    <!-- CTA::end -->
</template>
