import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

const repoName = 'agas-interiors'
const base = process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'github-pages-image-prefix',
      transform(code, id) {
        if (process.env.NODE_ENV === 'production' && id.includes('/src/')) {
          return code.replace(/(['"])\/img\//g, `$1/${repoName}/img/`);
        }
      }
    }
  ],
  build: {
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/@react-three')) {
            return 'vendor-r3f';
          }
          if (id.includes('node_modules/three')) {
            return 'vendor-three';
          }
          if (id.includes('node_modules/gsap') || id.includes('node_modules/lenis')) {
            return 'vendor-motion';
          }
          if (id.includes('node_modules/react') || id.includes('node_modules/react-router')) {
            return 'vendor-react';
          }
        },
      },
    },
  },
})
