<template>
  <h1 class="text-center text-3xl font-bold">{{ content.title }}</h1>
  <div class="mt-2 text-center text-sm text-gray-400">Por {{ author }} em {{ formattedDate }}</div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['content', 'author']);

const formattedDate = computed(() => {
  return new Date(props.content.pubDate).toLocaleString('pt-BR', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
});
</script>
