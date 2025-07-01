<template>
  <div class="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
    <div class="flex items-center gap-2">
      <img :src="'/assets/logo.png'" alt="Logo Elô Alcântara" class="h-20" />
    </div>

    <nav class="hidden md:flex gap-6 text-sm font-medium" :style="{ color: colors.secondary }">
      <a
        v-for="item in items"
        :key="item.href"
        :href="item.href"
        class="transition"
        :style="{ '--hover-color': colors.primary }"
        @mouseover="hover = item.href"
        @mouseleave="hover = null"
        :class="{ 'text-[var(--hover-color)]': hover === item.href }"
      >
        {{ item.label }}
      </a>
    </nav>

    <!-- Menu mobile -->
    <div class="md:hidden">
      <button :style="{ color: colors.primary }">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  colors: {
    primary: string;
    secondary: string;
    highlight?: string;
    background?: string;
  };
  items: { label: string; href: string }[];
}>();

const hover = ref<string | null>(null);
</script>
