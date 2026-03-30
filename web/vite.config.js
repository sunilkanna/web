import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // change this only if deploying to subfolder

  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
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
    port: 8028,

    proxy: {
      '/api': {
        target: 'http://14.139.187.229:8081',
        changeOrigin: true,
        secure: false,

        // Correct rewrite (handles both /api and /api/)
        rewrite: (path) =>
          path.replace(/^\/api/, '/jan2026/spic741/curogenea'),
      },
    },
  },
})