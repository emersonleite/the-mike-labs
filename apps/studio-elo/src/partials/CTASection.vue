<template>
  <section id="quero" :class="['py-20 px-6', props.dark ? 'bg-dark1 text-gray-100' : 'bg-background text-text']">
    <div class="max-w-4xl mx-auto text-center">
      <h2
        :class="[
          'text-3xl md:text-4xl font-bold mb-8 font-lato text-center',
          props.dark ? 'text-primary' : 'text-primary',
        ]"
      >
        Pronta para se descobrir no pole?
      </h2>

      <p
        :class="[
          'mb-10 max-w-3xl mx-auto font-lato text-lg md:text-xl',
          props.dark ? 'text-gray-300' : 'text-gray-700',
        ]"
      >
        Descubra os benefícios que o Pole Dance pode trazer para o seu corpo e mente:
      </p>

      <ul
        :class="[
          'mb-12 max-w-md mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left font-lato text-base',
          props.dark ? 'text-gray-300' : 'text-gray-600',
        ]"
      >
        <li v-for="(benefit, index) in benefits" :key="index" class="flex items-center gap-3">
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          {{ benefit }}
        </li>
      </ul>

      <a
        :href="whatsappLink"
        target="_blank"
        rel="noopener noreferrer"
        :class="[
          'inline-block font-semibold py-4 px-8 rounded-xl transition text-white text-lg font-lato',
          props.dark ? 'bg-secondary hover:bg-secondaryDark' : 'bg-secondary hover:bg-secondaryDark',
        ]"
      >
        Agende agora sua aula experimental no WhatsApp
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  dark?: boolean;
}>();

const benefits = [
  'Aumente sua força e resistência',
  'Melhore sua autoestima e confiança',
  'Ambiente acolhedor para todos os níveis',
  // adicione mais quando quiser
];

// Substitua pelo número real e personalize a mensagem
const whatsappNumber = '5541999999999'; // ex: 55 + DDD + número
const mensagem = encodeURIComponent(
  'Oi! Vi o site do Elô Alcântara Studio de Dança e quero agendar uma aula experimental de Pole Dance!'
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${mensagem}`;
</script>
