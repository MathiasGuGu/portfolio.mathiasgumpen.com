import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CIQE1mT3.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DfzdfjSK.mjs');
const _page1 = () => import('./chunks/_.._H_Kf_Htn.mjs');
const _page2 = () => import('./chunks/_.._BBjHSoL7.mjs');
const _page3 = () => import('./chunks/rss_CZMtgiZX.mjs');
const _page4 = () => import('./chunks/index_DF9qhIkV.mjs');
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
    "middlewareSecret": "5ac7ec4a-e515-45f4-88ed-127fc6ed43ab"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
