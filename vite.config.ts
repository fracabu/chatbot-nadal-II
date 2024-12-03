import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Assicurati che i percorsi relativi funzionino correttamente
  build: {
    outDir: 'dist', // Directory di output per la build
  },
});
