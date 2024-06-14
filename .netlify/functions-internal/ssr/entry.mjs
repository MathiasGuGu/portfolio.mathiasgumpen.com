import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BhxI0CIe.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CB-UpAWh.mjs');
const _page1 = () => import('./chunks/_.._DyqKrHdp.mjs');
const _page2 = () => import('./chunks/_.._PoaC4h0a.mjs');
const _page3 = () => import('./chunks/rss_Qu7u8fBI.mjs');
const _page4 = () => import('./chunks/index_BqibvBxf.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/[...slug].astro", _page1],
    ["src/pages/projects/[...slug].astro", _page2],
    ["src/pages/rss.xml.js", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "45466d84-17ad-4c59-8fd9-0b65d5458e01"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
