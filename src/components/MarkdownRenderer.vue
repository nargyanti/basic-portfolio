<script setup>
import { ref, onMounted } from 'vue';
import { marked } from 'marked';

const props = defineProps({
    path: {
        type: String,
        required: true
    }
});

const markdownContent = ref('');

function fetchMarkdownFile() {
    const markdownPath = props.path;

    fetch(markdownPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(markdownText => {
            markdownContent.value = marked(markdownText);
        })
        .catch(error => {
            console.error('Error fetching markdown file:', error);
        });
}

// watch(() => props.content, async (newContent) => {
//     markdownContent.value = marked(newContent);
// }, { immediate: true });

onMounted(() => {
    fetchMarkdownFile();
});
</script>

<template>
    <article class="prose max-w-none" v-html="markdownContent"></article>
</template>