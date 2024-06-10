<script setup>
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";

const props = defineProps({
    image: String,
    title: String,
    description: String,
    slug: String,
});
</script>

<template>
    <!-- Project::start -->
    <div class="flex flex-col overflow-hidden rounded-lg border border-gray-200 h-full">
        <img :src="image" loading="lazy" :alt="title"
            class="aspect-video object-cover object-top transition duration-200" />

        <div class="flex flex-col justify-between flex-grow px-7 py-5 gap-1">
            <div class="flex-grow">
                <h3 class="text-xl font-semibold text-gray-700">
                    {{ title }}
                </h3>
                <p class="pt-4 text-gray-600">{{ description }}</p>
            </div>
            <RouterLink :to="{ name: 'home' }" class="self-end text-right font-semibold text-primary hover:underline">
                Detail
                <Icon icon="mdi:arrow-right-thin" width="1.2em" height="1.2em" class="inline" />
            </RouterLink>
        </div>
    </div>
    <!-- Project::end-->
</template>
