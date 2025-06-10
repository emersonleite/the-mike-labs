<template>
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <img
          class="h-32 w-32"
          :src="'/assets/images/logo/hey_mike-logo-yellow.png'"
          alt="Avatar image"
          loading="lazy"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/blog/">Blog</NavMenuItem>
        <NavMenuItem href="https://github.com/barthol0/Astro-boilerplate-vue">GitHub</NavMenuItem>
        <NavMenuItem href="/">Linkedin</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
</template>

<script setup>
import Logo from '@/components/Logo.vue';
import NavbarTwoColumns from '@/components/NavbarTwoColumns.vue';
import NavMenu from '@/components/NavMenu.vue';
import NavMenuItem from '@/components/NavMenuItem.vue';
import Section from '@/components/Section.vue';
</script>
