<template>
    <!-- project - start -->
    <div class="border border-accent rounded-lg overflow-hidden">
        <img :src="image" loading="lazy" :alt="title"
            class="object-cover object-top transition duration-200 aspect-video" />
        <div class="p-5 flex flex-col gap-9">
            <div class="flex flex-col gap-3">
                <h3 class="text-lg text-center font-semibold text-primary transition duration-100">{{ title }}</h3>
                <p class="text-gray-600 text-justify">{{ description }}</p>
            </div>

            <div class="flex justify-between">
                <div class="flex justify-start gap-1">
                    <Icon v-for="(tag, index) in tags" :key="index"
                        class="flex items-center justify-center p-1.5 w-7 h-7 text-primary rounded-full bg-accent overflow-visible"
                        :icon="`simple-icons:${tag}`" style="width: 1.75rem; height: 1.75rem;" />
                </div>
                <router-link :to="`/project/${slug}`" class="text-primary font-semibold hover:underline">Detail
                    <Icon icon="mdi:arrow-right-thin" width="1.2em" height="1.2em" class="inline" />
                </router-link>
            </div>
        </div>
    </div>
    <!-- project - end -->
</template>
  
<script>
import { Icon } from '@iconify/vue';

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
  