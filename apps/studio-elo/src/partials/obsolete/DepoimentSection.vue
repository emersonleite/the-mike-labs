<template>
  <section id="depoimentos" :class="['py-20 px-6', isDark ? 'bg-dark-1 text-gray-100' : 'bg-background text-text']">
    <div class="max-w-6xl mx-auto">
      <SectionTitle>Depoimentos</SectionTitle>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <DepoimentCard
          v-for="(member, index) in teamMembers"
          :key="index"
          :nome="member.name"
          :foto="member.photo"
          :bio="member.bio"
          :dark="isDark"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DepoimentCard from '@/components/obsolete/DepoimentCard.vue';
import SectionTitle from '@/components/SectionTitle.vue';

const props = defineProps<{
  dark?: boolean;
}>();

const isDark = props.dark ?? false;

const teamMembers = [
  {
    name: 'Larissa M.',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Comecei no Pole sem saber o que esperar. Hoje, me sinto mais forte, confiante e feliz com meu corpo.',
  },
  {
    name: 'Juliana P.',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    bio: 'A aula experimental foi um divisor de águas. Encontrei um espaço acolhedor e cheio de energia positiva!',
  },
  {
    name: 'Camila R.',
    photo: 'https://randomuser.me/api/portraits/women/21.jpg',
    bio: 'Nunca imaginei que me sentiria tão empoderada. O Pole Dance transformou a forma como me vejo.',
  },
];
</script>
