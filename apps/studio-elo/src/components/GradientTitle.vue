<template>
  <h1 class="gradient-text" :class="customClass">
    <slot />
  </h1>
</template>

<script setup lang="ts">
defineProps<{ customClass?: string }>();
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(90deg, #d6a39c 0%, #d81b60 50%, #ad1457 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;
  font-size: 3.5rem; /* ajuste conforme necessário */
  line-height: 1.2;
}
</style>
