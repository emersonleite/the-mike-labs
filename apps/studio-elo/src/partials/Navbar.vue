<template>
  <VueNavbar :colors="colors" :items="items" />
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import VueNavbar from '@/components/VueNavbar.vue';

defineProps({
  colors: {
    type: Object as PropType<{
      primary: string;
      secondary: string;
      highlight?: string;
      background?: string;
    }>,
    required: true,
  },
  items: {
    type: Array as PropType<Array<{ label: string; href: string }>>,
    required: true,
  },
});
</script>
