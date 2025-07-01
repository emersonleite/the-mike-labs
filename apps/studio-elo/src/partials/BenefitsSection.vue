<template>
  <section
    id="beneficios"
    :class="['py-20 px-6 transition-colors duration-300', dark ? 'bg-dark text-white' : 'bg-background text-text']"
  >
    <div class="max-w-6xl mx-auto">
      <h2 class="font-script text-5xl md:text-7xl leading-tight font-bold text-primary mb-6 text-center">Benefícios</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(beneficio, index) in beneficios"
          :key="index"
          :class="[
            'flex items-start gap-4 p-4 rounded-2xl border shadow-sm transition-colors duration-300',
            dark ? 'bg-dark2 border-primary/30 text-white/90' : 'bg-white border-border text-text',
          ]"
        >
          <!-- Ícone (ainda numérico) -->
          <div
            class="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-bold font-lato"
          >
            {{ index + 1 }}
          </div>

          <div>
            <h3 class="text-lg font-semibold text-primary mb-1">
              {{ beneficio.titulo }}
            </h3>
            <p class="text-md leading-relaxed font-lato" :class="dark ? 'text-white/70' : 'text-text'">
              {{ beneficio.descricao }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ dark?: boolean }>();

const beneficios = [
  {
    titulo: 'Fortalecimento Muscular',
    descricao: 'Trabalha braços, tronco, core e pernas com movimentos intensos e controlados na barra.',
  },
  {
    titulo: 'Mais Flexibilidade',
    descricao: 'A prática constante melhora a mobilidade e deixa os movimentos mais fluidos.',
  },
  {
    titulo: 'Autoestima e Confiança',
    descricao: 'Ao superar desafios e evoluir, a autoestima cresce junto com a consciência corporal.',
  },
  {
    titulo: 'Alta Queima Calórica',
    descricao: 'Aulas exigentes fisicamente ajudam a queimar calorias e manter o condicionamento.',
  },
  {
    titulo: 'Coordenação e Equilíbrio',
    descricao: 'Melhora o controle motor e a percepção corporal a cada nova técnica aprendida.',
  },
  {
    titulo: 'Conexão Social',
    descricao: 'As aulas em grupo criam laços e promovem um ambiente de apoio e motivação.',
  },
  {
    titulo: 'Expressão Criativa',
    descricao: 'Você pode criar coreografias e explorar sua identidade através do movimento.',
  },
  {
    titulo: 'Redução do Estresse',
    descricao: 'O exercício libera endorfinas e promove bem-estar físico e emocional.',
  },
];
</script>
