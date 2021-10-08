import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.VITE_ENV === "dev"
    ? "/"
    : "https://ghaerdi.github.io/array-algorithms-visualizer/",
});
