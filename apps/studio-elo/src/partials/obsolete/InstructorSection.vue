<template>
  <section id="equipe" :class="['py-20 px-6', isDark ? 'bg-dark-1 text-gray-100' : 'bg-background text-text']">
    <div class="max-w-6xl mx-auto">
      <SectionTitle>Equipe</SectionTitle>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <InstructorCard
          v-for="(instructor, index) in team"
          :key="index"
          :nome="instructor.nome"
          :foto="instructor.foto"
          :bio="instructor.bio"
          :dark="isDark"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import InstructorCard from '@/components/obsolete/InstructorCard.vue';
import SectionTitle from '@/components/SectionTitle.vue';

const props = defineProps<{
  dark?: boolean;
}>();

const isDark = props.dark ?? false;

const team = [
  {
    nome: 'Ana Silva',
    foto: 'https://randomuser.me/api/portraits/women/45.jpg',
    bio: 'Instrutora certificada com 5 anos de experiência em pole dance artístico e exotic.',
  },
  {
    nome: 'Carla Souza',
    foto: 'https://randomuser.me/api/portraits/women/32.jpg',
    bio: 'Fisioterapeuta e instrutora de alongamento. Especializada em prevenção de lesões.',
  },
  {
    nome: 'Letícia Rocha',
    foto: 'https://randomuser.me/api/portraits/women/12.jpg',
    bio: 'Ex-aluna que hoje inspira outras mulheres com sua energia e técnica no pole sensual.',
  },
];
</script>
