<template>
    <footer class="mt-5 pt-5 pb-10 px-5 bg-primary md:px-10 md:py-3">
        <div class="flex flex-col gap-4 max-w-screen-lg mx-auto md:flex-row-reverse md:justify-between md:items-center">
            <div class="flex gap-1.5 justify-center items-center">
                <Icon v-for="(account, index) in profile.accounts" :key="index"
                    class="flex items-center justify-center p-2 w-12 h-12 text-primary rounded-full bg-accent overflow-visible"
                    :icon="`simple-icons:${account}`" style="width: 2rem; height: 2rem;" />
            </div>
            <p class="text-center text-sm text-light">© 2024 - Made with ❤️ by Nabilah Argyanti</p>
        </div>
    </footer>
</template>

<script>
import jsonData from '@/assets/data.json';
import { Icon } from '@iconify/vue';

const { profile } = jsonData;

export default {
    data() {
        return {
            profile: profile,
        };
    },
    components: {
        Icon,
    },
};
</script>