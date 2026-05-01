import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // Allow serving the WASM files with correct MIME type
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
});
