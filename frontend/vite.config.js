import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  server: {
    host: '0.0.0.0',
    port: 5173,
    open: false,

    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        secure: false,

        configure: (proxy) => {
          proxy.on('error', (error) => {
            console.error('[Vite Proxy Error]', error);
          });

          proxy.on('proxyReq', (proxyReq, req) => {
            console.log(
              `[Vite Proxy] ${req.method} ${req.url} → ${proxyReq.path}`
            );
          });

          proxy.on('proxyRes', (proxyRes, req) => {
            console.log(
              `[Vite Proxy Response] ${req.method} ${req.url} → ${proxyRes.statusCode}`
            );
          });
        },
      },
    },
  },

  preview: {
    host: '0.0.0.0',
    port: 4173,
  },

  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});