import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CCNnxoaH.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DfzdfjSK.mjs');
const _page1 = () => import('./chunks/_.._DYjKRLtb.mjs');
const _page2 = () => import('./chunks/_.._BpMgemLe.mjs');
const _page3 = () => import('./chunks/rss_D9gtgVas.mjs');
const _page4 = () => import('./chunks/index_6ZMMtJln.mjs');
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
    "middlewareSecret": "7ebaaf5a-1fe0-49af-9943-75fa24c8ebdf"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
