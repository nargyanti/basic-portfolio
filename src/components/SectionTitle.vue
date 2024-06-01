<script setup>

const props = defineProps({
    title: {
        type: String,
    },
});
</script>

<template>
    <div class="relative flex pb-8 items-center">
        <h2 class="flex-shrink mr-4 text-2xl font-semibold text-gray-700">{{ title }}</h2>
        <div class="flex-grow border-t border-4 border-primary"></div>
    </div>
</template>