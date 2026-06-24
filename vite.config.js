import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    base: "/Hair-Web/",
    plugins: [tailwindcss()],
    build: {
        rollupOptions: {
            input: {
                main: "index.html",
                about: "about/index.html",
                contact: "contact/index.html",
                promotion: "promotion/index.html",
                services: "services/index.html",
            },
        },
    },
});
