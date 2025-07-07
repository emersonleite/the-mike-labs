<template>
  <nav
    class="hidden md:flex gap-6 transition"
    :class="[fontFamily, textSize, fontWeight, dark ? 'text-white' : textColor]"
  >
    <a
      v-for="(item, index) in items"
      :key="index"
      :href="item.href"
      :class="[hoverColor, currentSection === item.href ? activeColor : '', 'transition duration-200']"
    >
      {{ item.label }}
    </a>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = withDefaults(
  defineProps<{
    items: { label: string; href: string }[];
    dark?: boolean;
    fontFamily?: string;
    textSize?: string;
    fontWeight?: string;
    textColor?: string;
    hoverColor?: string;
    activeColor?: string;
  }>(),
  {
    dark: false,

    fontFamily: 'font-sans-2',
    textSize: 'text-md',
    fontWeight: 'font-medium',
    textColor: 'text-muted',
    hoverColor: 'hover:text-primary',
    activeColor: 'text-primary font-semibold',
  }
);

const currentSection = ref('');

const handleScroll = () => {
  const sectionOffsets = props.items.map((item) => {
    const el = document.querySelector(item.href) as HTMLElement;
    return {
      href: item.href,
      top: el?.offsetTop || 0,
    };
  });

  const scrollPos = window.scrollY + 100;

  for (let i = sectionOffsets.length - 1; i >= 0; i--) {
    if (scrollPos >= sectionOffsets[i].top) {
      currentSection.value = sectionOffsets[i].href;
      break;
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
