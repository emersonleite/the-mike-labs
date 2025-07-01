<template>
  <section id="sobre" class="relative bg-background text-gray-800 py-20 px-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="flex justify-center">
        <img
          :src="'/assets/elo-1.jpg'"
          alt="Elô Alcântara"
          class="rounded-3xl shadow-2xl border border-border w-full max-w-sm object-cover"
        />
      </div>

      <div>
        <SectionTitle>Sobre o Estúdio</SectionTitle>
        <p class="text-lg text-text mb-4 font-lato">
          Elô Alcântara é professora, coreógrafa e fundadora do Elô Alcântara Studio de Dança, referência no Pole Dance
          no Brasil com mais de 14 anos de história. Reconhecida como pioneira da modalidade no país, Elô também é
          diretora da primeira companhia brasileira de Pole Dance e técnica de atletas de alto rendimento.
        </p>
        <p class="text-lg text-text mb-4 font-lato">
          Formada em Educação Física com MBA em Dança, Gestão e Produção Cultural, é criadora da modalidade Sexy Dance
          Mix e soma décadas de experiência em dança, ginástica e expressão feminina. Seu estilo único é fruto de uma
          trajetória que começou no jazz e se expandiu por ritmos de salão, técnicas de sensualidade e formaações com
          grandes nomes nacionais e internacionais.
        </p>
        <p class="text-lg text-text font-lato">
          Além de atuar como jurada em campeonatos, Elô criou o Curitiba Pole Arte (CPA), um dos principais eventos da
          cena artística do país. Com sua metodologia própria, ela formou e inspirou uma nova geração de profissionais e
          estúdios em Curitiba — consolidando-se como uma das maiores referências do Pole Dance brasileiro.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue';
</script>
