<template>
  <footer
    :class="[
      'py-12 px-6 border-t',
      props.dark ? 'bg-dark1 border-border text-gray-100' : 'bg-background border-border text-text',
    ]"
  >
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p class="font-lato text-muted font-semibold text-lg md:text-xl text-center md:text-left">
        Transforme-se, liberte-se e revele-se!
      </p>

      <p class="text-sm md:text-base font-lato text-center md:text-left">
        © {{ currentYear }} Elô Alcântara Studio de Dança. Todos os direitos reservados.
      </p>

      <nav class="flex gap-6" aria-label="Redes sociais">
        <a
          v-for="(social, i) in socialLinks"
          :key="i"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.name"
          class="text-primary hover:text-secondary transition"
        >
          <component v-if="social.icon" :is="social.icon" class="w-6 h-6" />
        </a>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';
// Adicione os demais ícones quando quiser

const props = defineProps<{
  dark?: boolean;
}>();

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/eloalcantara',
    icon: IconInstagram,
  },
  // Exemplo futuro:
  // {
  //   name: 'YouTube',
  //   url: 'https://youtube.com/eloalcantara',
  //   icon: IconYoutube,
  // },
];
</script>
