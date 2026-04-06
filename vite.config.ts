import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Leading dot allows any *.onrender.com host (Render changes URLs on redeploy). */
const renderHosts = [".onrender.com"];

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: renderHosts,
  },
  preview: {
    allowedHosts: renderHosts,
  },
});
