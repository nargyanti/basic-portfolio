<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Header></Header>
  <div class="mx-auto max-w-screen-lg px-6 bg-light">
    <RouterView />
  </div>
  <Footer></Footer>
</template>