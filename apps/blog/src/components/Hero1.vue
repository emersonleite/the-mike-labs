<template>
  <section
    class="relative bg-cover bg-center bg-no-repeat text-white py-32 px-6"
    style="background-image: url('/assets/images/hero-pole-dance.jpg')"
  >
    <!-- Overlay escuro -->
    <div class="absolute inset-0 bg-black bg-opacity-60"></div>

    <!-- Conteúdo -->
    <div class="relative z-10 max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-4">Desperte sua força, sensualidade e liberdade</h1>
      <p class="text-lg md:text-xl text-gray-200 mb-8">
        Experimente o pole dance como forma de expressão, saúde e empoderamento.
      </p>
      <button
        @click="handleClick"
        class="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
      >
        Agende sua aula experimental
      </button>
    </div>
  </section>
</template>

<script setup>
function handleClick() {
  // Aqui você pode rotear ou abrir um modal, ou rolar até o formulário
  alert('Vamos agendar sua aula!');
}
</script>
