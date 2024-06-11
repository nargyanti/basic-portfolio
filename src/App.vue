<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import IconWrapper from "@/components/IconWrapper.vue";
import NavLink from "@/components/NavLink.vue";
import data from "@/assets/data.json";

const { profile } = data;

const showMenu = ref(false);

const toggleMenu = () => {
    showMenu.value = !showMenu.value;
};
</script>

<template>
    <!-- Header::start -->
    <header class="sticky top-0 z-50 border-b border-b-gray-200 bg-light px-6 py-5 md:px-10">
        <div class="mx-auto flex max-w-screen-xl flex-col items-center drop-shadow-sm md:flex-row md:justify-between">
            <div class="flex w-full items-center justify-between md:w-auto">
                <!-- Logo::start -->
                <RouterLink :to="{ path: '/' }" class="text-lg font-semibold text-gray-700 md:text-xl">nargyanti<span
                        class="text-primary">.</span></RouterLink>
                <!-- Logo::end -->

                <!-- Hamburger Menu::start -->
                <button @click="toggleMenu" class="block md:hidden">
                    <Icon icon="pajamas:hamburger" width="24" height="24" class="text-primary" />
                </button>
                <!-- Hamburger Menu::end -->
            </div>

            <!-- Navigation::start -->
            <nav :class="{ 'hidden': !showMenu }"
                class="flex flex-col gap-4 pt-6 text-center md:flex md:flex-row md:gap-10 md:pt-0">
                <NavLink :to="{ path: '/' }">Home</NavLink>
                <NavLink :to="{ path: '/', hash: '#about' }">About</NavLink>
                <NavLink :to="{ path: '/', hash: '#projects' }">Projects</NavLink>
                <NavLink :to="{ path: '/', hash: '#contact' }">Contact</NavLink>
            </nav>
            <!-- Navigation::end -->
        </div>
    </header>
    <!-- Header::end -->

    <!-- View::start -->
    <RouterView />
    <!-- View::end -->

    <!-- Footer::start -->
    <footer class="border-t border-t-gray-200 bg-primary px-6 py-5 md:px-10">
        <div class="mx-auto flex max-w-screen-xl flex-col gap-4 md:flex-row md:justify-between">
            <p class="text-center text-white">
                © 2024 Nabilah Argyanti. All rights reserved.
            </p>
            <div class="flex justify-center gap-2">
                <div v-for="(url, platform) in profile.accounts" :key="platform">
                    <a :href="url" target="_blank" rel="noopener noreferrer">
                        <span class="sr-only">{{ platform }}</span>
                        <IconWrapper :icon="`simple-icons:${platform}`" size="20" backgroundSize="p-1.5"
                            backgroundColor="bg-white" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer::end -->
</template>
