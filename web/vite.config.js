import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: '/',
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },

  },
  server: {
    host: "0.0.0.0",
    proxy: {
      '/api': {
        target: 'http://14.139.187.229:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\//, '/jan2026/spic741/curogenea/'),
      },
    },
  },
  preview: {
    host: "0.0.0.0",
    proxy: {
      '/api': {
        target: 'http://14.139.187.229:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\//, '/jan2026/spic741/curogenea/'),
      },
    },
  },
}))
