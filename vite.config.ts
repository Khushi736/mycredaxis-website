import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import type {Plugin} from 'vite';
import {defineConfig} from 'vite';

/** Browsers still request /favicon.ico by default; serve our webp asset. */
function faviconIcoFallback(): Plugin {
  return {
    name: 'favicon-ico-fallback',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url === '/favicon.ico' || req.url?.startsWith('/favicon.ico?')) {
          req.url = '/favicon.webp';
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url === '/favicon.ico' || req.url?.startsWith('/favicon.ico?')) {
          req.url = '/favicon.webp';
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  const disableHmr = process.env.DISABLE_HMR === 'true';

  return {
    plugins: [react(), tailwindcss(), faviconIcoFallback()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    css: {
      devSourcemap: false,
    },
    build: {
      cssCodeSplit: false,
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: disableHmr
        ? false
        : {
            overlay: true,
          },
      watch: disableHmr
        ? null
        : {
            ignored: ['**/dist/**', '**/node_modules/**', '**/.git/**'],
            awaitWriteFinish: {
              stabilityThreshold: 200,
              pollInterval: 100,
            },
          },
    },
  };
});
