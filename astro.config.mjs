import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    domains: ["astro.build"],
    remotePatterns: [{ protocol: "http" }],
  },
  trailingSlash: "always",
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  server: {
    port: 4323,
    host: "127.0.0.1",
  },
  base: "/",
});
