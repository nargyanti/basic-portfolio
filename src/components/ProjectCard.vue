<script setup>
import IconText from "@/components/IconText.vue";
import NavLink from "@/components/NavLink.vue";

defineProps({
    image: String,
    title: String,
    description: String,
    slug: String,
});
</script>

<template>
    <div class="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200">
        <img :src="image" loading="lazy" :alt="title"
            class="aspect-video object-cover object-top transition duration-200" />

        <div class="flex flex-grow flex-col justify-between gap-1 px-7 py-5">
            <div class="mb-12 flex-grow">
                <h3 class="text-xl font-semibold text-gray-900">
                    {{ title }}
                </h3>
                <p class="pt-4 text-gray-600">{{ description }}</p>
            </div>
            <NavLink :to="{ path: `/project/${slug}` }" class="self-end text-primary">
                <IconText :icon="'mdi:arrow-right-thin'" :text="'Detail'" :iconPosition="'right'" :iconSize="22" />
            </NavLink>
        </div>
    </div>
</template>
