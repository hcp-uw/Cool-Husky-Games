import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import million from "million/compiler";
import adsense from "vite-plugin-adsense";

// https://vitejs.dev/config/
export default defineConfig({
  // Added million to optimize react components
  plugins: [
    adsense({
      client: "ca-pub-7611749932378016",
    }),
    ViteImageOptimizer(),
    million.vite({ auto: true }),
    react(),
    TanStackRouterVite(),
  ],
});
