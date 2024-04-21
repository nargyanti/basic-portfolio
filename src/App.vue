<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
  <div class="mx-auto max-w-screen-lg px-6 bg-light">
    <Header></Header>
    <RouterView />
  </div>
</template>