<template>
  <section id="onde" :class="['py-20 px-6', isDark ? 'bg-dark1 text-gray-100' : 'bg-background text-text']">
    <div class="max-w-6xl mx-auto">
      <SectionTitle>Onde Estamos</SectionTitle>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        <!-- Mapa -->
        <div class="rounded-2xl overflow-hidden shadow-xl border border-border h-full min-h-[380px]">
          <iframe
            class="w-full h-full"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            :src="mapSrc"
          ></iframe>
        </div>

        <!-- Card com informações -->
        <div
          class="bg-dark2 text-gray-100 rounded-2xl shadow-xl border border-border p-8 flex flex-col justify-center space-y-8"
        >
          <!-- Endereço -->
          <div class="flex items-start gap-4">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
              />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <h3 class="text-xl font-bold mb-1 text-primary">Endereço</h3>
              <p>Rua Exemplo, 123</p>
              <p>Bairro Exemplar</p>
              <p>Curitiba - PR</p>
            </div>
          </div>

          <!-- Horários -->
          <div class="flex items-start gap-4">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 class="text-xl font-bold mb-1 text-primary">Horários</h3>
              <p>Seg a Sex: 08h - 22h</p>
              <p>Sábado: 09h - 14h</p>
            </div>
          </div>

          <!-- Contato -->
          <div class="flex items-start gap-4">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2 5.5l3.5 3.5a2 2 0 002.5.2l1.5-1a11.042 11.042 0 005 5l-1 1.5a2 2 0 00.2 2.5l3.5 3.5a2 2 0 002.8 0l1.3-1.3a3 3 0 000-4.2L17 10a16 16 0 01-10-10L5.5 2a3 3 0 00-4.2 0L0 3.3a2 2 0 000 2.8z"
              />
            </svg>
            <div>
              <h3 class="text-xl font-bold mb-1 text-primary">Contato</h3>
              <p>WhatsApp: (41) 91234-5678</p>
              <p>Email: contato@eloalcantara.com</p>
            </div>
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

const mapSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.123456789!2d-46.656987!3d-23.592345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59e123456789%3A0xabcdef1234567890!2sSeu%20Est%C3%BAdio!5e0!3m2!1spt-BR!2sbr!4v1621873912345';
</script>
