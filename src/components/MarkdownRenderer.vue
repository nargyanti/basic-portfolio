<script setup>
import { ref, onMounted } from "vue";
import { marked } from "marked";

const props = defineProps({
    path: {
        type: String,
    },
});

const markdownContent = ref(null);

function fetchMarkdownFile() {
    const markdownPath = props.path;

    fetch(markdownPath)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then((markdownText) => {
            markdownContent.value = marked(markdownText);
        })
        .catch((error) => {
            console.error("Error fetching markdown file:", error);
        });
}

onMounted(() => {
    fetchMarkdownFile();
});
</script>

<template>
    <div v-if="path">
        <article
            class="prose max-w-none prose-headings:font-semibold prose-headings:text-gray-900"
            v-html="markdownContent"></article>
    </div>
</template>
