<template>
  <Section>
    <template #title>
      <div class="flex items-baseline justify-between">
        <div><GradientText>Posts</GradientText> recentes</div>
        <div class="text-sm">
          <a href="/blog/">Ver todos os posts (View all Posts) →</a>
        </div>
      </div>
    </template>
    <BlogGallery :postList="postList" />
  </Section>
</template>

<script setup>
import GradientText from '@/components/GradientText.vue';
import Section from '@/components/Section.vue';
import BlogGallery from '@/components/BlogGallery.vue';

const { postList } = defineProps(['postList']);
</script>
