<template>
    <!-- project - start -->
    <div class="overflow-hidden rounded-lg border border-secondary">
        <img
            :src="image"
            loading="lazy"
            :alt="title"
            class="aspect-video object-cover object-top transition duration-200"
        />

        <div class="flex flex-col gap-9 p-5">
            <div class="flex flex-col gap-3">
                <h3
                    class="text-center text-lg font-semibold text-primary transition duration-100"
                >
                    {{ title }}
                </h3>
                <p class="text-justify text-gray-600">{{ description }}</p>
            </div>

            <div class="flex justify-between">
                <div class="flex justify-start gap-1">
                    <Icon
                        v-for="(tag, index) in tags"
                        :key="index"
                        class="flex h-7 w-7 items-center justify-center overflow-visible rounded-full bg-secondary p-1.5 text-primary"
                        :icon="`simple-icons:${tag}`"
                        style="width: 1.75rem; height: 1.75rem"
                    />
                </div>
                <router-link
                    :to="`/project/${slug}`"
                    class="font-semibold text-primary hover:underline"
                    >Detail
                    <Icon
                        icon="mdi:arrow-right-thin"
                        width="1.2em"
                        height="1.2em"
                        class="inline"
                    />
                </router-link>
            </div>
        </div>
    </div>
    <!-- project - end -->
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
    components: {
        Icon,
    },
    props: {
        image: String,
        tags: Array,
        title: String,
        description: String,
        slug: String,
    },
};
</script>
