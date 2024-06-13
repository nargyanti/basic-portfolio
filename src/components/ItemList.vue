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
        type: [Number, String],
        default: 2,
    },
});

const gridColumn = computed(() => {
    return `grid-cols-${props.column}`;
});
</script>

<template>
    <p v-if="title" class="mb-1 text-gray-600">{{ title }}</p>
    <ul class="grid gap-y-1" :class="gridColumn">
        <li v-for="item in items" :key="item.id" class="flex items-start py-1">
            <Icon icon="f7:bolt-fill" class="mr-2 mt-1 flex-shrink-0 text-primary" width="20" height="20" />
            <span class="flex-grow text-gray-600">{{ item }}</span>
        </li>
    </ul>
</template>
