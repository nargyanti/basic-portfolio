<script setup>
import List from "@/components/List.vue";
import IconWrapper from "@/components/IconWrapper.vue";

const props = defineProps({
    icon: {
        type: String,
    },
    title: {
        type: String,
    },
    sub_title: {
        type: String,
    },
    description: {
        type: String,
    },
    items: {
        type: Array,
        default: () => [],
    },
    column: {
        type: [Number, String],
        default: 2,
    },
});
</script>

<template>
    <div class="flex gap-4">
        <IconWrapper :icon="icon" />
        <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-0">
                <h3 class="text-xl font-semibold text-gray-700">{{ title }}</h3>
                <p class="font-light text-gray-600">{{ sub_title }}</p>
            </div>
            <p class="text-gray-600">{{ description }}</p>
            <div class="pt-2" v-if="items?.length > 0">
                <List :items="items" :column="column" />
            </div>
        </div>
    </div>
</template>
