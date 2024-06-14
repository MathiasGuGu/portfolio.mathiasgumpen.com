import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Bd63VpoB.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DfzdfjSK.mjs');
const _page1 = () => import('./chunks/_.._ByJaqpgO.mjs');
const _page2 = () => import('./chunks/_.._DQAaKy6l.mjs');
const _page3 = () => import('./chunks/rss_CdzK2Sge.mjs');
const _page4 = () => import('./chunks/index_B02MCVxG.mjs');
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
    "middlewareSecret": "9345f6f6-ca90-4d8a-8f65-3abb05804f2f"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
