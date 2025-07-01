<template>
  <div
    :class="[
      'rounded-2xl shadow-md p-6 h-full flex flex-col justify-between transition',
      dark ? 'bg-dark2 text-gray-100 border border-border' : 'bg-white text-text border border-border',
    ]"
  >
    <svg class="w-8 h-8 mb-4 text-primary opacity-80" fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M7.17 6.17C5.59 7.76 5 9.35 5 12H9V21H2V12c0-2.77 1.05-5.27 2.93-7.14L7.17 6.17zM19.17 6.17C17.59 7.76 17 9.35 17 12h4v9h-7V12c0-2.77 1.05-5.27 2.93-7.14l2.24 1.31z"
      />
    </svg>

    <p class="text-base leading-relaxed font-lato mb-6 italic">"{{ bio }}"</p>

    <div class="flex items-center gap-4 mt-auto">
      <img :src="foto" :alt="`Foto de ${nome}`" class="w-12 h-12 rounded-full object-cover border border-primary" />
      <div>
        <p class="font-semibold text-primary">{{ nome }}</p>
        <div class="flex gap-1 mt-1 text-yellow-400">
          <svg v-for="i in 5" :key="i" class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path
              d="M12 .587l3.668 7.57 8.332 1.151-6.064 5.867L19.336 24 12 19.897 4.664 24l1.398-8.825L0 9.308l8.332-1.151z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  nome: string;
  foto: string;
  bio: string;
  dark?: boolean;
}>();
</script>
