<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
    to: {
        type: [String, Object],
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <RouterLink :to="to" class="font-semibold text-gray-600 transition duration-100 hover:text-primary hover:underline">
        {{ label }}
    </RouterLink>
</template>
