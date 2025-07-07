<script setup lang="ts">
import Icon from './Icon.vue';

const props = defineProps<{
  brand: 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'twitter' | 'whatsapp';
  size?: string; // Tailwind class: 'w-6 h-6', 'text-lg', etc.
  customClass?: string;
}>();

const iconsMap: Record<string, string> = {
  instagram: 'mdi:instagram',
  facebook: 'mdi:facebook',
  tiktok: 'mdi:tiktok',
  youtube: 'mdi:youtube',
  twitter: 'mdi:twitter',
  whatsapp: 'mdi:whatsapp',
};

const iconName = iconsMap[props.brand];
</script>

<template>
  <Icon :name="iconName" :size="size" :class="customClass" />
</template>
