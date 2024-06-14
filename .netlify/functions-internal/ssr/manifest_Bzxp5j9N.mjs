import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_CzQg4Qtz.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.DZ-G83bU.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/blog/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.DZ-G83bU.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://mathiasgumpen-testsite.netlify.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/pages/projects/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/layouts/MainLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/layouts/BlogLayout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/blog/markdown-style-guide.mdx",{"propagation":"in-tree","containsHead":false}],["/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/blog/markdown-style-guide.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/index.astro":"chunks/pages/index_Dd-k5wgY.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_BehZ66P-.mjs","/src/pages/projects/[...slug].astro":"chunks/prerender_CwhI8YEb.mjs","\u0000@astrojs-manifest":"manifest_Bzxp5j9N.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DfC-1m1V.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._B03x6bIC.mjs","\u0000@astro-page:src/pages/projects/[...slug]@_@astro":"chunks/_.._DsLy1p8U.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_DqBXTsVR.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_6BW2QPNI.mjs","/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/blog/markdown-style-guide.mdx?astroContentCollectionEntry=true":"chunks/markdown-style-guide_Bx9_mV5k.mjs","/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/Tasktracker.mdx?astroContentCollectionEntry=true":"chunks/Tasktracker_pMwNaaci.mjs","/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/ecom.mdx?astroContentCollectionEntry=true":"chunks/ecom_CUM6mA41.mjs","/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/holidaze.mdx?astroContentCollectionEntry=true":"chunks/holidaze_7NnexXlR.mjs","/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/blog/markdown-style-guide.mdx?astroPropagatedAssets":"chunks/markdown-style-guide_Bnfs49zF.mjs","/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/Tasktracker.mdx?astroPropagatedAssets":"chunks/Tasktracker_BYNdpORO.mjs","/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/ecom.mdx?astroPropagatedAssets":"chunks/ecom_DvoPERDp.mjs","/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/holidaze.mdx?astroPropagatedAssets":"chunks/holidaze_TbjeNEVw.mjs","/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/blog/markdown-style-guide.mdx":"chunks/markdown-style-guide_BDDTc3Ae.mjs","/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/Tasktracker.mdx":"chunks/Tasktracker_BWoeXn-4.mjs","/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/ecom.mdx":"chunks/ecom_CBTnHWUP.mjs","/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/holidaze.mdx":"chunks/holidaze_DcF7ytR-.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/Holidazemobile.Lbqo0LYN.png","/_astro/ecommobile.BHdMQW02.png","/_astro/holidazefrontpage.CDPNzUYi.png","/_astro/ecomdesktop.1m_Dz0bU.png","/_astro/holidazeexplore.Dro0I2Es.png","/_astro/figtree-latin-wght-normal.tyJnQ6lj.woff2","/_astro/sora-latin-wght-normal.UPnOA2Rr.woff2","/_astro/figtree-latin-ext-wght-normal.Bptc-cl5.woff2","/_astro/sora-latin-ext-wght-normal.yn6Hateq.woff2","/_astro/_slug_.DZ-G83bU.css","/favicon.svg","/hero_lines.svg","/tech_stack_illu.svg"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
