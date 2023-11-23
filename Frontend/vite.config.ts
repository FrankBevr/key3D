import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    nodePolyfills(),
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
      'mindar': 'mind-ar/dist/mindar-image-three.prod.js'
    }
  },
  assetsInclude: ['**/*.mind'],
  appType: 'spa',
  build: {
    minify: false
  }
});
