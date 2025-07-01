<template>
  <section id="horarios" class="bg-background text-text py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Horários das Aulas</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(aula, index) in horarios"
          :key="index"
          class="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition"
        >
          <h3 class="text-xl font-semibold text-secondary mb-2">{{ aula.modalidade }}</h3>
          <p class="text-sm text-muted"><strong>Dias:</strong> {{ aula.dias }}</p>
          <p class="text-sm text-muted"><strong>Horário:</strong> {{ aula.horario }}</p>
          <p class="text-sm text-muted"><strong>Professora:</strong> {{ aula.professora }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const horarios = [
  {
    modalidade: 'Pole Dance',
    dias: 'Terça e Quinta',
    horario: '08:40',
    professora: 'Profª. Jana',
  },
  {
    modalidade: 'Pole Dance',
    dias: 'Segunda, Quarta e Sexta',
    horario: '09:15',
    professora: 'Profª. Elô',
  },
  {
    modalidade: 'Chair Dance',
    dias: 'Sexta',
    horario: '10:30',
    professora: 'Profª. Elô',
  },
  {
    modalidade: 'Pole Dance',
    dias: 'Terça e Quinta',
    horario: '12:00',
    professora: 'Profª. Elô',
  },
  {
    modalidade: 'Exotic',
    dias: 'Segunda e Quarta',
    horario: '17:00',
    professora: 'Profª. Maria Mosson',
  },
  {
    modalidade: 'Pole Dance',
    dias: 'Segunda e Quarta',
    horario: '18:00',
    professora: 'Profª. Maria Mosson',
  },
  {
    modalidade: 'Pole Dance',
    dias: 'Segunda, Quarta e Quinta',
    horario: '19:00',
    professora: 'Profª. Jana',
  },
  {
    modalidade: 'Pole Sensual',
    dias: 'Terça',
    horario: '20:00',
    professora: 'Profª. Jana',
  },
  {
    modalidade: 'Flex',
    dias: 'Quinta',
    horario: '20:00',
    professora: 'Profª. Nay',
  },
  {
    modalidade: 'Pole Dance',
    dias: 'Sábado',
    horario: '10:00',
    professora: 'Atletas',
  },
];
</script>
