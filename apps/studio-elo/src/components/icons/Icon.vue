<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed } from 'vue';

const props = defineProps<{
  name: string;
  size?: string;
  class?: string;
}>();

// Define como uma computed para reagir às props corretamente
const sizeClass = computed(() => props.size ?? 'w-6 h-6');
</script>

<template>
  <Icon :icon="props.name" :class="[sizeClass, props.class]" />
</template>
