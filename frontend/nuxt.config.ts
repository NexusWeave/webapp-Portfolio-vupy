// https://nuxt.com/docs/api/configuration/nuxt-config

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const srcDir = dirname(fileURLToPath(import.meta.url));
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ],

  css:
  [
    '$src/assets/index.css'
  ],

  vite:
  {
    resolve:
    {
      alias:
      {
        "$src": `${srcDir}`
        }
      }
    }
  })