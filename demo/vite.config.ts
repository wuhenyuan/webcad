import { defineConfig } from 'vite';

export default defineConfig({
  server: {},
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        mesh_text: 'mesh_text.html',
      },
    },
  },
});
