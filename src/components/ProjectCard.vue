<template>
    <!-- project - start -->
    <div>
        <a :href="`/project/${slug}`" class="group mb-6 block h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <img :src="image_url" loading="lazy" :alt="title"
                class="h-full w-full object-cover object-top transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col gap-2.5">
            <div class="flex justify-start gap-2.5">
                <span v-for="(tag, index) in tags" :key="index"
                    class="items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">{{
                        tag }}</span>
            </div>
            <h3 class="text-lg font-bold text-gray-800 transition duration-100 lg:text-xl">{{ title }}</h3>
            <p class="text-gray-500">{{ description }}</p>
            <div class="flex flex-row mt-2 gap-2.5 justify-start lg:mt-3">
                <router-link :to="`/project/${slug}`"
                    class="inline-block rounded-lg bg-indigo-500 px-5 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Detail</router-link>
                <a href="#"
                    class="inline-flex items-center rounded-lg bg-gray-200 px-5 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd"
                            d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                            clip-rule="evenodd"></path>
                        <path fill-rule="evenodd"
                            d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="ml-3">Demo</span>
                </a>
            </div>
        </div>
    </div>
    <!-- project - end -->
</template>
  
<script>
export default {
    props: {
        image_url: String,
        tags: Array,
        title: String,
        description: String,
        slug: String,
    },
};
</script>
  