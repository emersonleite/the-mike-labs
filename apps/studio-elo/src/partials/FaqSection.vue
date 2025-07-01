<template>
  <section id="faq" :class="['py-20 px-6', props.dark ? 'bg-dark1 text-gray-100' : 'bg-background text-text']">
    <div class="max-w-4xl mx-auto">
      <SectionTitle>Dúvidas comuns</SectionTitle>

      <div class="space-y-6">
        <details
          v-for="(item, index) in faqs"
          :key="index"
          :class="[
            'rounded-xl p-4 shadow-sm border',
            props.dark ? 'bg-dark2 text-gray-100 border-border' : 'bg-white text-text border-border',
          ]"
        >
          <summary
            class="cursor-pointer font-semibold text-lg text-primary mb-2 hover:text-secondary transition font-lato"
          >
            {{ item.question }}
          </summary>
          <p class="mt-2 text-md leading-relaxed font-lato">
            {{ item.answer }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue';
const props = defineProps<{
  dark?: boolean;
}>();

const faqs = [
  {
    question: 'Preciso ter força ou preparo físico para começar no Pole?',
    answer:
      'Não! As aulas são pensadas para iniciantes e você desenvolverá força, coordenação e resistência progressivamente com a prática.',
  },
  {
    question: 'Nunca fiz dança antes. Consigo acompanhar?',
    answer: 'Com certeza. O Pole Dance é para todos os níveis e corpos. Você evolui no seu ritmo com apoio da equipe.',
  },
  {
    question: 'Qual roupa devo usar para a aula?',
    answer:
      'Recomendamos roupas que deixem pernas e braços livres (como top e shorts), pois o contato com a pele ajuda na execução dos movimentos.',
  },
  {
    question: 'Homens também podem praticar Pole Dance?',
    answer:
      'Sim! O Pole é uma atividade acessível a todos. Temos turmas mistas e instrutores capacitados para receber todos os interessados, independente do gênero ou idade.',
  },
  {
    question: 'A partir de qual idade posso começar?',
    answer:
      'Não há limite de idade para começar a praticar o Pole Dance. Contudo, a avaliação do(a) interessado(a) é aconselhável.',
  },
];
</script>
