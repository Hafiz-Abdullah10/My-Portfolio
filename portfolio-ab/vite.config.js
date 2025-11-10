import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Server configuration for local development
  server: {
    port: 5173,        // default Vite dev server port
    open: true,        // automatically opens the browser
  },

  // Build configuration for deployment
  build: {
    outDir: 'dist',    // output folder for Vercel
    sourcemap: true,   // optional, generates source maps
    rollupOptions: {
      output: {
        // Recommended for SPA: include hash in filenames
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },

  // Resolve aliases (optional, for cleaner imports)
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
