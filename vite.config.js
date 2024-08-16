import { defineConfig } from "vite";
import { scss, sveltePreprocess } from "svelte-preprocess";
import svelte from "rollup-plugin-svelte";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      /**
       * Auto preprocess supported languages with
       * '<template>'/'external src files' support
       **/
      preprocess: sveltePreprocess({ scss }),
    }),
  ],
});
