import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    outDir: 'dist', // Output directory for the built files
    emptyOutDir: true, // Clear the output directory before building
    sourcemap: true, // Generate source maps
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: `MV-Launcher`,
        files: [
          `dist/**/*`,
          `node_modules/**/*`,
          `package.json`,
          `main.js`
        ]
      }
    }
  }
})
