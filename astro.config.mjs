import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
    site: "https://www.blender-ikkinomi.com/", // <- replace this with your site url
    integrations: [preact(), tailwind(), mdx()],
    output: 'static',
    markdown: {
        syntaxHighlight: 'shiki',
        shikiConfig: {
            theme: 'nord',
            wrap: true
        }
    },
    vite: {
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: 'entry.[hash].mjs',
                    chunkFileNames: 'chunks/chunk.[hash].mjs',
                    assetFileNames: 'assets/asset.[hash][extname]'
                }
            }
        },
        server: {
            watch: {
                usePolling: true
            }
        }
    },
    adapter: vercel(),
    redirects: {
        "/blog": "/",
        "/posts": "/",
    }
});