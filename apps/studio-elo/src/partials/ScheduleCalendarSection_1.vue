<template>
  <section id="horarios" class="bg-background text-text py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Agenda Semanal de Aulas</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(dia, index) in calendario"
          :key="index"
          class="bg-card border border-border rounded-2xl p-6 shadow-sm"
        >
          <h3 class="text-xl font-bold text-secondary mb-4 uppercase tracking-wide text-center">
            {{ dia.dia }}
          </h3>

          <div
            v-for="(aula, i) in dia.aulas"
            :key="i"
            class="mb-4 p-4 rounded-xl border border-border bg-white text-text"
          >
            <p class="text-sm font-semibold text-primary">{{ aula.modalidade }}</p>
            <p class="text-sm">{{ aula.horario }}</p>
            <p class="text-sm text-muted">{{ aula.professora }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const calendario = [
  {
    dia: 'Segunda',
    aulas: [
      { modalidade: 'Pole Dance', horario: '09:15', professora: 'Profª. Elô' },
      { modalidade: 'Exotic', horario: '17:00', professora: 'Profª. Maria Mosson' },
      { modalidade: 'Pole Dance', horario: '18:00', professora: 'Profª. Maria Mosson' },
      { modalidade: 'Pole Dance', horario: '19:00', professora: 'Profª. Jana' },
    ],
  },
  {
    dia: 'Terça',
    aulas: [
      { modalidade: 'Pole Dance', horario: '08:40', professora: 'Profª. Jana' },
      { modalidade: 'Pole Dance', horario: '12:00', professora: 'Profª. Elô' },
      { modalidade: 'Pole Sensual', horario: '20:00', professora: 'Profª. Jana' },
    ],
  },
  {
    dia: 'Quarta',
    aulas: [
      { modalidade: 'Pole Dance', horario: '09:15', professora: 'Profª. Elô' },
      { modalidade: 'Exotic', horario: '17:00', professora: 'Profª. Maria Mosson' },
      { modalidade: 'Pole Dance', horario: '18:00', professora: 'Profª. Maria Mosson' },
      { modalidade: 'Pole Dance', horario: '19:00', professora: 'Profª. Jana' },
    ],
  },
  {
    dia: 'Quinta',
    aulas: [
      { modalidade: 'Pole Dance', horario: '08:40', professora: 'Profª. Jana' },
      { modalidade: 'Pole Dance', horario: '12:00', professora: 'Profª. Elô' },
      { modalidade: 'Pole Dance', horario: '19:00', professora: 'Profª. Jana' },
      { modalidade: 'Flex', horario: '20:00', professora: 'Profª. Nay' },
    ],
  },
  {
    dia: 'Sexta',
    aulas: [
      { modalidade: 'Pole Dance', horario: '09:15', professora: 'Profª. Elô' },
      { modalidade: 'Chair Dance', horario: '10:30', professora: 'Profª. Elô' },
    ],
  },
  {
    dia: 'Sábado',
    aulas: [{ modalidade: 'Pole Dance', horario: '10:00', professora: 'Atletas' }],
  },
];
</script>
