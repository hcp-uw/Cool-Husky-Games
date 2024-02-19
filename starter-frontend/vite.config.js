import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"

export default defineConfig(() => {
    return {
        // GITHUB PAGES SPECIFIC CONFIG
        // TODO: REMOVE WHEN DEPLOYING TO AWS
        base: '/cool-husky-games/',
        build: {
            outDir: 'build',
        },
        plugins: [react()]
    }
})