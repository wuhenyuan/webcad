import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['webcad-sdk'],
  },
});
