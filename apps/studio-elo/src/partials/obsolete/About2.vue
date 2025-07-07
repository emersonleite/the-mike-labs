<template>
  <section id="sobre" :class="['relative py-20 px-6', isDark ? 'bg-dark-1 text-gray-100' : 'bg-background text-text']">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="flex justify-center">
        <img
          :src="'/assets/elo-2.png'"
          alt="Elô Alcântara"
          class="rounded-3xl shadow-2xl border border-border w-full max-w-sm object-cover"
        />
      </div>

      <div>
        <SectionTitle>Sobre o Studio</SectionTitle>
        <p class="text-lg mb-4 font-sans-2">
          O Studio Elô Alcântara foi fundado em 2011 em uma pequena sala dentro de um salão de beleza em Curitiba (PR).
          Hoje, conta com uma estrutura acolhedora, equipada com oito barras de pole, localizado na Rua Chile, 1603, no
          bairro Rebouças — uma região de fácil acesso com estacionamento próprio gratuito.
        </p>

        <p class="text-lg mb-4 font-sans-2">
          Em 2015, nasceu a Cia Elô Alcântara, companhia artística responsável por uma série de espetáculos autorais que
          combinam criatividade, técnica e emoção. Entre as produções estão: <strong>Romeu e Julieta (2015)</strong>,
          <strong>Burlesque (2016)</strong>, <strong>Brasilidades – História do Samba (2017)</strong>,
          <strong>Los Siete Pecados (2018)</strong>, <strong>A Bela e a Fera (2018)</strong>,
          <strong>De Volta para os Anos 80 (2019)</strong>, <strong>A Caixa de Pandora (2021)</strong>,
          <strong>O Rei Leão (2022)</strong>, <strong>Moulin Rouge (2023)</strong> e
          <strong>L’amour à Paris (2024)</strong>.
        </p>

        <p class="text-lg mb-4 font-sans-2">
          O Studio oferece aulas de <strong>Pole Dance</strong>, uma prática que desenvolve força, flexibilidade e
          autoestima por meio da dança acrobática no poste, ideal para quem busca superar limites com sensualidade e
          empoderamento.
        </p>

        <p class="text-lg mb-4 font-sans-2">
          Outra modalidade oferecida é o <strong>Chair Dance</strong>, uma dança que mistura movimentos sensuais e
          elegantes ao redor de uma cadeira. Com influências do jazz, burlesque e contemporâneo, essa prática valoriza a
          expressão corporal, a coordenação e a fluidez dos movimentos.
        </p>

        <p class="text-lg mb-4 font-sans-2">
          O <strong>Sexy Dance Mix</strong> combina elementos do Chair Dance, Pole Dance e Floorwork, criando uma
          experiência única e libertadora. As coreografias integram força, sensualidade e criatividade, promovendo
          autoconfiança, empoderamento e conexão com o corpo.
        </p>

        <p class="text-lg mb-4 font-sans-2">
          Já o <strong>Pole Heels</strong> traz a potência do Pole Dance com o charme dos saltos altos. Inspirada no
          Exotic Pole, essa vertente enfatiza a fluidez, o controle corporal e a expressão sensual, com coreografias
          envolventes que realçam a beleza e a presença de quem pratica.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/obsolete/SectionTitle.vue';

const props = defineProps<{
  dark?: boolean;
}>();

const isDark = props.dark ?? false;
</script>
