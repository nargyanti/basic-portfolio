<script setup>
import UnderConstruction from '@/components/UnderConstruction.vue';
</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-lg px-4 md:px-8">
      <div class="grid gap-8 sm:grid-cols-2">
        <!-- content - start -->
        <div class="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
          <p class="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">Error 503</p>
          <h1 class="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl">Under Construction</h1>

          <p class="mb-8 text-center text-gray-500 sm:text-left md:text-lg">This page is currently undergoing maintenance
            to enhance visitor experience. We apologize for any inconvenience caused.</p>
        </div>
        <!-- content - end -->

        <!-- image - start -->
        <div class="relative h-80 overflow-hidden rounded-lg bg-gray-100 md:h-auto">
          <UnderConstruction />
        </div>
        <!-- image - end -->
      </div>
    </div>
  </div>
</template>
