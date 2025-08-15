import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
// @ts-ignore
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [svelte()],
  base: '/nzb-sources/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
