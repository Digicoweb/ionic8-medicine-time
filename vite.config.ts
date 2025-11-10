import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
        }
      }
    }),
    legacy()
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // ✅ اینو اضافه کن
  optimizeDeps: {
    include: ['@number-flow/vue']
  },

  build: {
    rollupOptions: {
      external: []
    }
  },
})
