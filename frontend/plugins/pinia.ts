// plugins/pinia.ts

import { defineNuxtPlugin } from '#app';
import { createPinia, setActivePinia } from 'pinia';

/**
 * Denne plugin-en er nødvendig for å sikre at Pinia er aktiv
 * når stores blir kalt utenfor Vue-komponenter, f.eks. i composables.
 *
 * Selv om @pinia/nuxt modulen skal gjøre dette automatisk, er dette en feilsikker løsning.
 */
export default defineNuxtPlugin((nuxtApp) => {
  // Lager en ny Pinia-instans og aktiverer den for server-rendering (SSR)
  const pinia = createPinia();
  setActivePinia(pinia);

  // Legger den aktiverte instansen til Vue-applikasjonen
  nuxtApp.vueApp.use(pinia);
});