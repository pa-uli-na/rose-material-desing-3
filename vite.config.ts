import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // template: {
      //   compilerOptions: {
      //     isCustomElement: (tag) => tag.indexOf("mwc-") != 0, // material web components
      //   },
      // },
    }),
  ],
});
