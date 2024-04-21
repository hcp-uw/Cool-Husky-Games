import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import million from "million/compiler";

// https://vitejs.dev/config/
export default defineConfig({
  // Added million to optimize react components
  plugins: [
    ViteImageOptimizer(),
    million.vite({ auto: true }),
    react(),
    TanStackRouterVite(),
  ],
});
