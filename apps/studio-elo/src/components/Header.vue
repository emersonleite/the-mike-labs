<template>
  <header :class="[isDark ? 'bg-dark-0 text-gray-100' : 'bg-background text-text']">
    <div class="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img :src="'/assets/logo.png'" alt="Logo Elô Alcântara" class="h-20" />
      </div>

      <!-- Menu Desktop -->
      <nav
        class="hidden md:flex gap-6 text-md font-medium font-sans-2"
        :class="isDark ? 'text-gray-300' : 'text-muted'"
      >
        <a
          v-for="(link, i) in navLinks"
          :key="i"
          :href="link.href"
          :class="['hover:text-primary transition', isDark ? 'hover:text-primary-light' : '']"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Botão Mobile -->
      <button
        @click="toggleMenu"
        :class="['md:hidden z-50', isDark ? 'text-secondary' : 'text-secondary']"
        aria-label="Toggle menu"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Menu Mobile -->
      <transition name="fade">
        <div
          v-if="isOpen"
          :class="[
            'absolute top-full left-0 w-full border-t flex flex-col gap-6 p-6 md:hidden z-40 shadow-lg',
            isDark ? 'bg-dark-1 text-gray-100 border-gray-700' : 'bg-background text-text border-border',
          ]"
        >
          <a
            v-for="(link, i) in navLinks"
            :key="i"
            :href="link.href"
            :class="['hover:text-primary transition text-lg font-medium', isDark ? 'hover:text-primary-light' : '']"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps<{
  dark?: boolean;
}>();

const isDark = props.dark ?? false;

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#horarios', label: 'Horários' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'Dúvidas' },
  { href: '#onde', label: 'Onde estamos?' },
  { href: '#quero', label: 'Quero!' },
];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
