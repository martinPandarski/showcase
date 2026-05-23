import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";
import { VitePluginRadar } from "vite-plugin-radar";
export default defineConfig({
    plugins: [
        react(),
        svgr(),
        tailwindcss(),
        VitePluginRadar({
            gtm: { id: "GTM-P2VZSB3H" },
            analytics: { id: "G-P0C0FT308M" },
        }),
    ],
});
