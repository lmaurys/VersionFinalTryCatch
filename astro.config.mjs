import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  outDir: './dist',
  integrations: [
    tailwind(),
    react({
      include: ['**/react/*', '**/components/*.tsx', '**/components/*.jsx']
    })
  ]
});