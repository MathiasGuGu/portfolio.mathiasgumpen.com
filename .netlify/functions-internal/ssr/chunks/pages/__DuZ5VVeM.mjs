/* empty css                           */
import { A as AstroError, c as UnknownContentCollectionError, d as createComponent, r as renderUniqueStylesheet, e as renderScriptElement, f as createHeadAndContent, g as renderTemplate, h as renderComponent, u as unescapeHTML, i as createAstro, j as addAttribute, m as maybeRenderHead, k as renderHead, l as renderTransition, n as renderSlot } from '../astro_CzQg4Qtz.mjs';
import 'kleur/colors';
import pLimit from 'p-limit';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import 'clsx';
/* empty css                                    */

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://example.com", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/markdown-style-guide.mdx": () => import('../markdown-style-guide_Bx9_mV5k.mjs'),"/src/content/projects/Tasktracker.mdx": () => import('../Tasktracker_pMwNaaci.mjs'),"/src/content/projects/ecom.mdx": () => import('../ecom_CUM6mA41.mjs'),"/src/content/projects/holidaze.mdx": () => import('../holidaze_7NnexXlR.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"markdown-style-guide":"/src/content/blog/markdown-style-guide.mdx"}},"projects":{"type":"content","entries":{"holidaze":"/src/content/projects/holidaze.mdx","ecom":"/src/content/projects/ecom.mdx","tasktracker":"/src/content/projects/Tasktracker.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/markdown-style-guide.mdx": () => import('../markdown-style-guide_zRUPezoq.mjs'),"/src/content/projects/Tasktracker.mdx": () => import('../Tasktracker_CUOVAPgf.mjs'),"/src/content/projects/ecom.mdx": () => import('../ecom_DkOL8gTS.mjs'),"/src/content/projects/holidaze.mdx": () => import('../holidaze_n1ZN4XQj.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const figtree = "/_astro/figtree-latin-wght-normal.tyJnQ6lj.woff2";

const sora = "/_astro/sora-latin-wght-normal.UPnOA2Rr.woff2";

const $$Astro$1 = createAstro("https://example.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<!-- preload fonts --><link rel="preload"${addAttribute(figtree, "href")} as="font" type="font/woff2" crossorigin><link rel="preload"${addAttribute(sora, "href")} as="font" type="font/woff2" crossorigin><!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/components/BaseHead.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="h-16"> <nav class="main flex items-center justify-between h-full"> <a href="/" class="w-8 h-8 rounded-full bg-gradient-to-tr from-green-200 to-green-500"> <span class="sr-only">Go to frontpage</span> <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40"> <defs> <style>
            .cls-1 {
              clip-path: url(#clippath);
            }

            .cls-2 {
              fill: none;
              stroke-width: 0px;
            }

            .cls-3 {
              clip-path: url(#clippath-1);
            }
          </style> <clipPath id="clippath"> <circle class="cls-2" cx="20" cy="20" r="20"></circle> </clipPath> <clipPath id="clippath-1"> <rect class="cls-2" x="-5" y="-5" width="50" height="50"></rect> </clipPath> </defs> <g id="Layer_1-2" data-name="Layer 1"> <g class="cls-1"> <g class="cls-3"> <image width="105" height="105" transform="translate(-5.28 -5.36) scale(.48)" xlink:href="data:image/png;base64,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"></image> </g> </g> </g> </svg> </a> <div class="flex gap-10 text-base items-center"> <!-- <HeaderLink href="/">Home</HeaderLink> --> <div> <a href="https://github.com/mathiasgugu" target="_blank"> <span class="sr-only">Go to my github profile</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg> </a> </div> </div> </nav> </header>`;
}, "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="w-screen h-64 flex items-center justify-center">
&copy; ${today.getFullYear()} Mathias Gumpen. All rights reserved.
</footer>`;
}, "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/components/Footer.astro", void 0);

const SITE_TITLE = "GUMPEN";
const SITE_DESCRIPTION = "Welcome to my website!";

const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-theme="light"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main${addAttribute(renderTransition($$result, "h63idg3f"), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/layouts/MainLayout.astro", "self");

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MainLayout as $, SITE_TITLE as S, ____slug_ as _, SITE_DESCRIPTION as a, getCollection as g };
