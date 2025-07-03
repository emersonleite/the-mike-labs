<template>
  <div class="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
    <div class="flex items-center gap-2">
      <img :src="'/assets/logo.png'" alt="Logo Elô Alcântara" class="h-20" />
    </div>

    <nav class="hidden md:flex gap-6 text-md font-medium text-muted font-sans-2">
      <a href="#sobre" class="hover:text-primary transition">Sobre</a>
      <a href="#equipe" class="hover:text-primary transition">Equipe</a>
      <a href="#beneficios" class="hover:text-primary transition">Benefícios</a>
      <a href="#horarios" class="hover:text-primary transition">Horários</a>
      <a href="#depoimentos" class="hover:text-primary transition">Depoimentos</a>
      <a href="#faq" class="hover:text-primary transition">Dúvidas</a>
      <a href="#onde" class="hover:text-primary transition">Onde estamos?</a>
      <a href="#quero" class="hover:text-primary transition">Quero!</a>
    </nav>

    <div class="md:hidden">
      <button class="text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
// Este script pode futuramente controlar um menu mobile.
</script>

<style scoped>
/* Estilos adicionais se precisar */
</style>
