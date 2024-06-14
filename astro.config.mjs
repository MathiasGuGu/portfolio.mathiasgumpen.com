import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerMetaHighlight,
} from "@shikijs/transformers";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    shikiConfig: {
      wrap: true,
      transformers: [
        transformerNotationDiff(),
        transformerNotationErrorLevel(),
        transformerMetaHighlight(),
      ],
    },
  },
  output: "server",
  adapter: netlify(),
});
