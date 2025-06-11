<template>
  <Section>
    <HeroAvatar>
      <template #title> <GradientText>Hey Mike</GradientText>!</template>

      <!--  <template v-slot:socialButtons>
        <a class="mr-2" href="/">
          <HeroSocial :src="'/assets/images/social/linkedin-icon.png'" :alt="'Linkedin icon'" />
        </a>
        <a href="/">
          <HeroSocial :src="'/assets/images/social/github-icon.png'" :alt="'Github icon'" />
        </a>
      </template> -->

      <template #description
        >O objetivo desse blog é apresentar meus projetos e pensamentos. Pretendo falar sobre tecnologia, como ela pode
        facilitar nossa vida entre outros aspectos. Minha intenção é, também, abordar outros assuntos, apresentados de
        forma natural e que mostrem um pouco sobre como penso e vivo (não, necessariamente nesse ordem). Esse blog é
        especialmente dedicado ao meu eterno cãozinho <a href="" class="text-cyan-400 hover:underline">Mike</a> (in
        memoriam) que dá nome a ele (blog), representado em forma de figura, alegre, ao lado.
      </template>

      <template #avatar>
        <img class="h-40 w-40" :src="'/assets/images/social/mike.png'" alt="Avatar image" loading="lazy" />
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
