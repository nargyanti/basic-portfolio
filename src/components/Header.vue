<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const showMenu = ref(false);

const toggleMenu = () => {
    showMenu.value = !showMenu.value;
};
</script>

<template>
    <header class="sticky top-0 z-50 border-b border-b-gray-200 bg-light">
        <div
            class="mx-auto flex max-w-screen-xl flex-col items-center px-6 py-5 drop-shadow-sm md:flex-row md:justify-between md:px-10">
            <div class="flex w-full items-center justify-between md:w-auto">
                <!-- Logo::start -->
                <a href="/" class="text-lg font-semibold text-gray-700 md:text-xl">nargyanti<span
                        class="text-primary">.</span></a>
                <!-- Logo::end -->

                <!-- Hamburger Menu::start -->
                <button @click="toggleMenu" class="block md:hidden">
                    <Icon icon="pajamas:hamburger" width="24" height="24" class="text-primary" />
                </button>
                <!-- Hamburger Menu::end -->
            </div>

            <!-- Navigation::start -->
            <nav :class="{ hidden: !showMenu }"
                class="flex flex-col gap-4 pt-6 text-center md:flex md:flex-row md:gap-10 md:pt-0">
                <a href="/"
                    class="font-semibold text-gray-600 transition duration-100 hover:text-primary hover:underline">Home</a>
                <a href="#about"
                    class="font-semibold text-gray-600 transition duration-100 hover:text-primary hover:underline">About</a>
                <a href="#projects"
                    class="font-semibold text-gray-600 transition duration-100 hover:text-primary hover:underline">Projects</a>
                <a href="#contact"
                    class="font-semibold text-gray-600 transition duration-100 hover:text-primary hover:underline">Contact</a>
            </nav>
            <!-- Navigation::end -->
        </div>
    </header>
</template>
