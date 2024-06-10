<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    sub_title: {
        type: String,
    },
});
</script>

<template>
    <div class="pb-8">
        <div class="relative flex items-center">
            <h2 class="flex-shrink mr-4 text-2xl font-semibold text-gray-700">{{ title }}</h2>
            <div class="flex-grow border-t border-4 border-primary"></div>
        </div>
        <p class="text-gray-600 pt-3">{{ sub_title }}</p>
    </div>
</template>