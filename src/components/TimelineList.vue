<script setup>
import IconWrapper from "@/components/IconWrapper.vue";
import List from "@/components/List.vue";

const props = defineProps({
    activities: {
        type: Array,
        default: () => [],
    },
});
</script>

<template>
    <ol class="relative border-s-2 border-secondary ms-4">
        <li v-for="(activity, index) in activities" :key="index" class="mb-10 ms-10">
            <span class="absolute -start-3 flex w-6 items-center justify-center">
                <IconWrapper :icon="activity.icon" />
            </span>
            <h3 class="text-xl font-semibold text-gray-600">
                {{ activity.title }}
            </h3>
            <span class="font-light text-gray-600">{{ activity.period }}</span>
            <div class="pt-2" v-if="activity.jobdesk?.length > 0">
                <List :items="activity.jobdesk" :column="1" />
            </div>
        </li>
    </ol>
</template>
