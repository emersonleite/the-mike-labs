<template>
  <div class="flex items-center gap-2">
    <component :is="linkTo ? 'a' : 'div'" :href="linkTo || undefined">
      <img :src="src" :alt="alt" :class="[heightClass, widthClass, rounded ? 'rounded-full' : '']" />
    </component>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src?: string;
    alt: string;
    height?: string;
    width?: string;
    linkTo?: string;
    rounded?: boolean;
  }>(),
  {
    src: '/assets/logo.png',
    alt: '',
    height: 'h-20',
    width: '', // opcional, pode usar w-auto
    linkTo: '/',
    rounded: false,
  }
);

const heightClass = props.height;
const widthClass = props.width;
</script>
