<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template class="">
    <Header></Header>
    <div class="bg-light">
        <div class="mx-auto max-w-screen-xl px-6 md:px-10">
            <RouterView />
        </div>
    </div>
    <Footer></Footer>
</template>
