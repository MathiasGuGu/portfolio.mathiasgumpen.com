import { i as createAstro, d as createComponent, g as renderTemplate, m as maybeRenderHead, h as renderComponent } from './astro_CzQg4Qtz.mjs';
import 'kleur/colors';
import 'clsx';
import '@astrojs/internal-helpers/path';
import { a as $$Picture } from './pages/generic_XoUaQcHQ.mjs';

const $$Astro$2 = createAstro("https://example.com");
const $$Summary = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Summary;
  const { type, semester, year, shortSummary } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full min-h-64 hidden md:flex flex-col my-12 gap-4 p-8 bg-foreground border border-border rounded"> <h2 class="text-2xl font-bold">tl;dr</h2> <div class="flex items-center gap-12 py-2 border-b"> <p>Type:</p> <p>${type}</p> </div> <div class="flex items-center gap-12 py-2 border-b"> <p>Semester:</p> <p>${semester}</p> </div> <div class="flex items-center gap-12 py-2 border-b"> <p>Year:</p> <p>${year}</p> </div> <div class="flex items-center gap-12 py-2 border-b"> <p>Short Summary:</p> <p> ${shortSummary} </p> </div> </section>`;
}, "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/components/casestudy/Summary.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$Images = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Images;
  const { desk1, desk2, mobile } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full h-[500px] md:h-[1000px] grid grid-cols-2 grid-rows-2 gap-3"> <div class="w-full h-full col-span-2 row-span-1 p-2 md:p-12 rounded bg-imagebg border border-border"> ${renderComponent($$result, "Picture", $$Picture, { "width": 2880, "height": 1720, "formats": ["webp"], "src": desk1, "alt": "Desktop screenshot", "class": "w-full h-full object-contain overflow-hidden" })} </div> <div class="w-full h-full col-span-1 row-span-1 p-2 md:p-12 rounded bg-imagebg border border-border"> ${renderComponent($$result, "Picture", $$Picture, { "width": 2880, "height": 1720, "loading": "lazy", "formats": ["webp"], "class": "w-full h-full object-contain overflow-hidden", "src": desk2, "alt": "Desktop screenshot of 2nd page" })} </div> <div class="w-full h-full col-span-1 row-span-1 p-2 md:p-12 rounded bg-imagebg border border-border"> ${renderComponent($$result, "Picture", $$Picture, { "width": 720, "height": 1486, "formats": ["webp"], "loading": "lazy", "class": "w-full h-full object-contain overflow-hidden", "src": mobile, "alt": "Mobile screenshot of front page" })} </div> </section>`;
}, "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/components/casestudy/Images.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Introduction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Introduction;
  const { name, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col w-full py-6 border-b"> <h1> ${name} <span class="font-title text-green-500">.</span> </h1> <p> ${description} </p> </section>`;
}, "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/components/casestudy/Introduction.astro", void 0);

export { $$Introduction as $, $$Summary as a, $$Images as b };
