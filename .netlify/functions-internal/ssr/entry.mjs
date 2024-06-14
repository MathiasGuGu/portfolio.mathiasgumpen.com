import { renderers } from './renderers.mjs';
import { manifest } from './manifest_fLegMOaZ.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CB-UpAWh.mjs');
const _page1 = () => import('./chunks/_.._BRpIULQg.mjs');
const _page2 = () => import('./chunks/_.._I-oXxJ0i.mjs');
const _page3 = () => import('./chunks/rss_g1ZMxKWu.mjs');
const _page4 = () => import('./chunks/index_CL8N6ylp.mjs');
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
    "middlewareSecret": "1faf7188-4318-43c5-9223-5c7031389657"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
