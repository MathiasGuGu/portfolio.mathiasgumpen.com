import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D_xFxf6b.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DfzdfjSK.mjs');
const _page1 = () => import('./chunks/_.._CpUjIoNk.mjs');
const _page2 = () => import('./chunks/_.._DvpesPpu.mjs');
const _page3 = () => import('./chunks/rss_BbZvMXdv.mjs');
const _page4 = () => import('./chunks/index_zqZp5lm2.mjs');
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
    "middlewareSecret": "5a5195e4-6bdc-4ef3-aebf-100943aa3266"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
