<template>
  <div class="flex justify-center gap-8">
    <a v-if="page.url.prev" :href="page.url.prev">← Posts mais recentes (Newer Posts)</a>
    <a v-if="page.url.next" :href="page.url.next">Posts mais antigos (Older Posts) →</a>
  </div>
</template>

<script setup>
const props = defineProps(['page']);
</script>
