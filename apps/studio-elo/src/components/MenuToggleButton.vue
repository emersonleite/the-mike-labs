<template>
  <button :class="[color, 'transition']" @click="$emit('toggle')">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    color?: string;
  }>(),
  {
    color: 'text-primary',
  }
);
</script>
