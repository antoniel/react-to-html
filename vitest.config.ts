/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],

  test: {
    watch: false,
    globals: true,
    exclude: [
      'examples/**/*.{jsx,tsx}',
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
    ],
    environment: 'node',
    includeSource: ['src/**/*.{js,ts}'],
  },
});
