import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const { NODE_ENV } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: NODE_ENV === "production"
    ? "https://ghaerdi.github.io/array-algorithms-visualizer/"
    : "/",
});
