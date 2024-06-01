<script setup>
import { Icon } from "@iconify/vue";
import { computed } from "vue";

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        default: 22,
    },
    color: {
        type: String,
        default: "text-primary",
    },
    backgroundColor: {
        type: String,
        default: "bg-secondary",
    },
    backgroundSize: {
        type: String,
        default: "p-2",
    },
});

const backgroundClasses = computed(() => {
    return `rounded-full ${props.backgroundColor} ${props.backgroundSize}`;
});
</script>

<template>
    <div class="flex items-start">
        <div :class="backgroundClasses">
            <Icon :icon="icon" :width="size" :height="size" :class="color" />
        </div>
    </div>
</template>
