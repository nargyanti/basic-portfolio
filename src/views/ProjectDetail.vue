<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import List from '@/components/List.vue';
import data from '@/assets/data.json';
import { Icon } from '@iconify/vue';
import NavLink from '@/components/NavLink.vue';
import SectionTitle from '@/components/SectionTitle.vue';

const router = useRouter();
const project = ref(null);

onMounted(() => {
    const { slug } = router.currentRoute.value.params;
    project.value = getProjectBySlug(slug);
    console.log(project.value);
});

function getProjectBySlug(slug) {
    return data.projects.find(project => project.slug === slug) || null;
}
</script>
<template>
    <div v-if="project" class="pb-20">
        <section class="bg-light px-6 pt-7 pb-14 md:px-10">
            <div class="mb-6">
                <NavLink :to="{ path: '/', hash: '#projects', query: { noSmooth: true } }" class="text-primary">
                    <Icon icon="mdi:arrow-left-thin" class="inline mb-1" width="24px" height="24px" />
                    Back to projects
                </NavLink>
            </div>
            <div class="mx-auto flex max-w-screen-xl flex-col lg:flex-row gap-8 lg:gap-14">
                <img class="max-w-xl object-cover rounded-lg" :src="project.image" :alt="project.title">

                <div class="flex flex-col gap-5">
                    <h1 class="text-gray-700 text-3xl font-semibold">{{ project.title }}</h1>
                    <p>{{ project.description }}</p>
                    <List :items="project.tools" :column="2" />
                    <div class="flex items-center gap-6 mt-6">
                        <RouterLink :to="{ path: '/', hash: '#contact' }"
                            class="rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-dark">
                            Source code</RouterLink>
                        <a href="/CV - Nabilah Argyanti.pdf" target="_blank" rel="noopener noreferrer"
                            class="font-semibold text-primary hover:underline">View demo
                            <Icon icon="heroicons:arrow-top-right-on-square-16-solid" class="mx-1 mb-1 inline" width="20"
                                height="20" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-light px-6 py-7 md:px-10">
            <div class="mx-auto max-w-screen-xl">
                <SectionTitle>Latar Belakang</SectionTitle>
                <p class="text-gray-600 pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem
                    nesciunt doloremque quae, omnis architecto esse illo eveniet repellendus sequi numquam autem ducimus
                    expedita maiores cumque sit. Aliquid, dignissimos totam! Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Deserunt dolores
                    iure a iste sed facere repudiandae modi nesciunt est voluptate. Doloribus quaerat ullam doloremque
                    veritatis facilis perspiciatis soluta dolore autem?</p>
            </div>
        </section>
        <section class="bg-light px-6 py-7 md:px-10">
            <div class="mx-auto max-w-screen-xl">
                <SectionTitle>Latar Belakang</SectionTitle>
                <p class="text-gray-600 pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem
                    nesciunt doloremque quae, omnis architecto esse illo eveniet repellendus sequi numquam autem ducimus
                    expedita maiores cumque sit. Aliquid, dignissimos totam! Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Deserunt dolores
                    iure a iste sed facere repudiandae modi nesciunt est voluptate. Doloribus quaerat ullam doloremque
                    veritatis facilis perspiciatis soluta dolore autem?</p>
            </div>
        </section>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>