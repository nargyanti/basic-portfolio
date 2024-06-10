<script setup>
import { Icon } from "@iconify/vue";
import { computed } from "vue";

const props = defineProps({
    title: {
        type: String,
    },
    items: {
        type: Array,
        required: true,
    },
    column: {
        type: Number,
        default: 1,
    },
});

const gridColumn = computed(() => {
    return `grid-cols-${props.column}`;
});
</script>

<template>
    <p class="mb-1 text-gray-600">{{ title }}</p>
    <ul class="grid gap-y-1" :class="gridColumn">
        <li v-for="item in items" :key="item.id" class="flex items-start py-1">
            <Icon icon="f7:bolt-fill" class="mr-2 flex-shrink-0 text-primary mt-1" width="20" height="20" />
            <span class="flex-grow text-gray-600">{{ item }}</span>
        </li>
    </ul>
</template>
