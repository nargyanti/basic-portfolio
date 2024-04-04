<template>
    <!-- skill - start -->
    <div class="flex gap-4 md:gap-6">
        <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        </div>

        <div>
            <h3 class="mb-2 text-lg font-semibold md:text-xl">{{ title }}</h3>
            <p class="mb-2 text-gray-500">{{ description }}</p>
        </div>
    </div>
    <!-- skill - end -->
</template>

<script>

export default {
    props: {
        title: String,
        description: String,
    },
};

</script>