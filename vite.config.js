import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
    plugins: [react()],
    server: {
        allowedHosts: ["expense-tracker-yrvh.onrender.com"],
    },
    preview: {
        allowedHosts: ["expense-tracker-yrvh.onrender.com"],
    },
});
