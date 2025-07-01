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
            class="mb-4 p-4 rounded-xl border border-primary/20 bg-white shadow-md flex flex-col gap-1"
          >
            <div class="flex items-center gap-2 text-primary font-semibold mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M6 2a1 1 0 00-1 1v1H5a2 2 0 00-2 2v1h14V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1z"
                />
                <path fill-rule="evenodd" d="M4 9v7a2 2 0 002 2h8a2 2 0 002-2V9H4zm3 2h2v2H7v-2z" clip-rule="evenodd" />
              </svg>
              {{ aula.modalidade }}
            </div>
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
