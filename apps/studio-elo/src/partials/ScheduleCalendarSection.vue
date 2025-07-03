<template>
  <section id="horarios" :class="['py-20 px-6', isDark ? 'bg-dark text-white' : 'bg-background text-text']">
    <div class="max-w-6xl mx-auto">
      <SectionTitle>Horários</SectionTitle>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(day, index) in schedule"
          :key="index"
          :class="[
            'rounded-2xl p-6 shadow-md border',
            isDark ? 'bg-dark1 border-border text-white' : 'bg-white border-border text-text',
          ]"
        >
          <h3 class="text-xl font-bold text-secondary mb-4 tracking-wide text-center font-sans-2">
            {{ day.day }}
          </h3>

          <div
            v-for="(classItem, i) in day.classes"
            :key="i"
            :class="[
              'mb-4 p-4 rounded-xl border shadow-inner flex flex-col gap-1',
              isDark ? 'bg-dark2 border-primary/30' : 'bg-background border-primary/30',
            ]"
          >
            <div class="flex items-center gap-2 text-primary font-semibold mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M6 2a1 1 0 00-1 1v1H5a2 2 0 00-2 2v1h14V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1z"
                />
                <path fill-rule="evenodd" d="M4 9v7a2 2 0 002 2h8a2 2 0 002-2V9H4zm3 2h2v2H7v-2z" clip-rule="evenodd" />
              </svg>
              {{ classItem.type }}
            </div>
            <p class="text-sm font-sans-2 font-bold" :class="isDark ? 'text-white/90' : 'text-text'">
              {{ classItem.time }}
            </p>
            <p class="text-sm font-sans-2 font-bold text-muted">
              {{ classItem.teacher }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue';
const props = defineProps<{
  dark?: boolean;
}>();

const isDark = props.dark ?? false;

const schedule = [
  {
    day: 'Segunda',
    classes: [
      { type: 'Pole Dance', time: '09:15', teacher: 'Profª. Elô' },
      { type: 'Exotic', time: '17:00', teacher: 'Profª. Maria Mosson' },
      { type: 'Pole Dance', time: '18:00', teacher: 'Profª. Maria Mosson' },
      { type: 'Pole Dance', time: '19:00', teacher: 'Profª. Jana' },
    ],
  },
  {
    day: 'Terça',
    classes: [
      { type: 'Pole Dance', time: '08:40', teacher: 'Profª. Jana' },
      { type: 'Pole Dance', time: '12:00', teacher: 'Profª. Elô' },
      { type: 'Pole Sensual', time: '20:00', teacher: 'Profª. Jana' },
    ],
  },
  {
    day: 'Quarta',
    classes: [
      { type: 'Pole Dance', time: '09:15', teacher: 'Profª. Elô' },
      { type: 'Exotic', time: '17:00', teacher: 'Profª. Maria Mosson' },
      { type: 'Pole Dance', time: '18:00', teacher: 'Profª. Maria Mosson' },
      { type: 'Pole Dance', time: '19:00', teacher: 'Profª. Jana' },
    ],
  },
  {
    day: 'Quinta',
    classes: [
      { type: 'Pole Dance', time: '08:40', teacher: 'Profª. Jana' },
      { type: 'Pole Dance', time: '12:00', teacher: 'Profª. Elô' },
      { type: 'Pole Dance', time: '19:00', teacher: 'Profª. Jana' },
      { type: 'Flex', time: '20:00', teacher: 'Profª. Nay' },
    ],
  },
  {
    day: 'Sexta',
    classes: [
      { type: 'Pole Dance', time: '09:15', teacher: 'Profª. Elô' },
      { type: 'Chair Dance', time: '10:30', teacher: 'Profª. Elô' },
    ],
  },
  {
    day: 'Sábado',
    classes: [{ type: 'Pole Dance', time: '10:00', teacher: 'Atletas' }],
  },
];
</script>
