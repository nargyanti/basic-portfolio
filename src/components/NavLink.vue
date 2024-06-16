<script setup>
import { RouterLink } from "vue-router";

defineProps({
    to: {
        type: [String, Object],
        required: true,
    },
});
</script>

<template>
    <RouterLink :to="to" class="font-semibold transition duration-100 hover:text-primary hover:underline">
        <slot></slot>
    </RouterLink>
</template>
