<template>
  <Section>
    <HeroAvatar>
      <template #title> Olá, eu sou o <GradientText>Emerson</GradientText> 👋 </template>
      <template #description
        >Nesse misto de site e blog vou apresentar meus projetos e pensamentos. Ele é especimente dedicado ao meu eterno
        cãozinho <a href="" class="text-cyan-400 hover:underline">Mike Tyson</a> (in memoriam).
      </template>

      <template #avatar>
        <img class="h-64 w-64" :src="'/assets/images/social/mike.png'" alt="Avatar image" loading="lazy" />
      </template>
      <template v-slot:socialButtons>
        <a href="/">
          <HeroSocial :src="'/assets/images/social/linkedin-icon.png'" :alt="'Linkedin icon'" />
        </a>
        <a href="/">
          <HeroSocial :src="'/assets/images/social/github-icon.png'" :alt="'Github icon'" />
        </a>
      </template>
    </HeroAvatar>
  </Section>
</template>

<script setup>
import GradientText from '@/components/GradientText.vue';
import HeroAvatar from '@/components/HeroAvatar.vue';
import HeroSocial from '@/components/HeroSocial.vue';
import Section from '@/components/Section.vue';
</script>
