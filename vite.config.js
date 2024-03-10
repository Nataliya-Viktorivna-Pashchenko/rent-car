import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
      constants: '/src/constants',
      // images: '/src/images',
      // icons: '/src/icons',
      // customHooks: '/src/customHooks',
    },
  },
  base: '/rent-car/',
})
