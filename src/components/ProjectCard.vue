<script setup>
import { ref } from "vue";
import FallbackImage from "@/components/FallbackImage.vue";
import IconText from "@/components/IconText.vue";
import NavLink from "@/components/NavLink.vue";

defineProps({
    image: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
});

const showFallback = ref(false);

const handleImageError = () => {
    showFallback.value = true;
};
</script>

<template>
    <div class="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200">
        <img :src="image" loading="lazy" :alt="title" @error="handleImageError" v-if="!showFallback"
            class="aspect-video object-cover transition duration-200" />
        <FallbackImage v-if="showFallback" :title="title" />

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
