<script setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
    list_title: {
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
    const col = Number(props.column);
    if (isNaN(col) || col < 1 || col > 12) {
        return "grid-cols-2";
    }
    return `grid-cols-${col}`;
});
</script>

<template>
    <p v-if="list_title" class="mb-1">{{ list_title }}</p>
    <ul class="grid gap-x-5 gap-y-1" :class="gridColumn">
        <li v-for="item in items" :key="item.id" class="flex items-start py-1">
            <Icon icon="f7:bolt-fill" class="mr-2 mt-1 flex-shrink-0 text-primary" width="20" height="20" />
            <span class="flex-grow">{{ item }}</span>
        </li>
    </ul>
</template>
