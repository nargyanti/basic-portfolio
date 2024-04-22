<template>
    <!-- skill - start -->
    <div class="pb-4 flex gap-3">
        <Icon icon="mdi:star"
            class="flex items-center justify-center p-1.5 w-7 h-7 text-primary rounded-full bg-accent overflow-visible" />
        <div class="flex flex-col gap-1">
            <h2 class="text-xl font-semibold text-primary">Frontend</h2>
            <p class="text-gray-600">Jelaskan kalau di skill ini kamu bisa buat apa saja (misal: bisa
                bikin app responsive, kalau di backend bisa bikin REST API dan GraphQL)</p>
            <ul class="list-disc list-inside text-gray-600">
                <li>Laravel</li>
                <li>Laravel</li>
                <li>Laravel</li>
                <li>Laravel</li>
            </ul>
        </div>
    </div>
    <!-- skill - end -->
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon,
    },
    props: {
        title: String,
        description: String,
    },
};

</script>