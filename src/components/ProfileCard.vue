<script setup>
import IconWrapper from "@/components/IconWrapper.vue";
import ItemList from "@/components/ItemList.vue";

defineProps({
    icon: {
        type: String,
    },
    title: {
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
            </div>
            <p>{{ description }}</p>
            <div v-if="items?.length > 0">
                <ItemList :items="items" :column="column" />
            </div>
        </div>
    </div>
</template>
