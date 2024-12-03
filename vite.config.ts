import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Escludi pacchetti specifici, se necessario
  },
  base: './', // Configura il base path per i file relativi
  build: {
    outDir: 'dist', // Directory di output per la build
    assetsDir: 'assets', // Directory per i file statici
  },
  server: {
    port: 5173, // Assicurati che la porta sia corretta
    open: true, // Apre automaticamente il browser
  },
});
