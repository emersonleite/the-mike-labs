<template>
  <section class="relative min-h-screen flex items-center justify-center text-center px-6 py-20">
    <div class="absolute inset-0 bg-cover bg-center z-0" style="background-image: url('/assets/hero.jpg')"></div>

    <div
      class="absolute inset-0 z-10"
      style="
        background: radial-gradient(
          circle at center,
          rgba(0, 0, 0, 0.9) 0%,
          rgba(0, 0, 0, 0.75) 50%,
          rgba(0, 0, 0, 0.6) 80%,
          rgba(0, 0, 0, 0.4) 100%
        );
      "
    ></div>

    <div class="relative z-20 max-w-2xl">
      <!-- <h1 class="text-4xl md:text-6xl font-bold font-sans mb-4 text-primary">Transforme-se, liberte-se e revele-se!</h1> -->
      <h1
        class="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-lato"
      >
        Transforme-se, liberte-se e revele-se!
      </h1>
      <!-- <SectionTitle class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Transforme-se, liberte-se e revele-se!</SectionTitle
      > -->
      <p class="text-lg md:text-xl tesxt-muted mb-8 font-lato">
        Aulas de Pole Dance para elevar sua autoestima, força e feminilidade.
      </p>
      <a
        href="#quero"
        class="inline-block bg-secondary text-white font-semibold px-6 py-3 rounded-xl hover:bg-secondaryDark transition font-lato"
      >
        Quero agendar uma aula experimental
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroTitle from './HeroTitle.vue';
import SectionTitle from './SectionTitle.vue';
// Nenhuma lógica JS no momento
</script>

<style scoped>
/* Nenhum estilo extra necessário */
</style>
