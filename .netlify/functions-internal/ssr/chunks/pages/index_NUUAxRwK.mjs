/* empty css                           */
import { i as createAstro, d as createComponent, g as renderTemplate, m as maybeRenderHead, j as addAttribute, h as renderComponent } from '../astro_CzQg4Qtz.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './__Cfa4Dth1.mjs';
import 'clsx';

const $$Astro = createAstro("https://mathiasgumpen-testsite.netlify.app/");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, description, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col md:flex-row border-b border-foreground py-8"> <div class="w-1/2 h-72 bg-green-500/10 rounded"></div> <div class="flex flex-col gap-4 pt-3 md:px-8 text-balance w-full md:w-1/2 relative"> <p class="font-bold text-2xl text-text font-heading">${title}</p> <p class="row-span-1 place-content-start">${description}</p> <a${addAttribute(link, "href")} class="w-fit h-fit absolute bottom-6">Read more
<span class="sr-only">about the ${title} project</span> </a> </div> </article>`;
}, "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/components/Projects/ProjectCard.astro", void 0);

const topProjects = [
  {
    title: "Receipto",
    description: "Receipto is a finance app that allows users to scan receipts and categorize their spending into custom categories and tags. Receipto allows users to track their spending and see where their money is going.",
    image: "/blog-placeholder-4.jpg",
    imageAlt: "Project 1",
    link: "https://www.google.com"
  },
  {
    title: "Holidaze ",
    description: "Holidaze is a booking app that allows users to book hotels and accommodations for their holidays.",
    image: "/blog-placeholder-2.jpg",
    imageAlt: "Project 1",
    link: "/projects/holidaze"
  },
  {
    title: "Ecom",
    description: "FinnJobb is a job search app that scrapes work data from Finn.no and makes it easier and faster for a user to unserstand what criteria they must meet to get a job.",
    image: "/blog-placeholder-3.jpg",
    imageAlt: "Project 1",
    link: "/projects/ecom"
  }
];

const $$ProjectList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="space-y-5 pt-12"> ${topProjects.map((project, index) => {
    return renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { ...project, "key": index })}`;
  })} </section>`;
}, "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/components/Projects/ProjectList.astro", void 0);

const $$BlogList = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/components/Blog/BlogList.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="pt-[200px] flex flex-col justify-center relative isolate text-balance"> <div class="absolute top-[50px] md:top-[150px] md:left-[500px] overflow-hidden -z-10 max-w-[calc(100%-4rem)]"> <div class="art w-[600px] h-96"></div> </div> <h1 class="font-normal">
Hi, my name is <span class="font-bold text-text">Mathias</span><span class="text-orange-500">.</span> </h1> <p class="limit-w">
I am a software engineer / frontend developer with a passion for
      performance, accessibility, and user experience.
</p> <p class="text-balance">
currently working as a software developer at
<a href="https://norkart.no" target="_blank" aria-label="Link to Norkart's website" rel="noreferer noopener" class="underline underline-offset-4 decoration-green-500">
Norkart
<span class="text-green-500 font-bold font-heading">.</span> </a> </p> <div class="h-auto w-24 flex flex-col gap-4 opacity-40 items-center justify-center pt-12"> <p>scroll</p> <span class="h-64 w-[1px] bg-text block"></span> </div> </section> <section class="pt-20 h-auto relative isolate bg-background"> <h2>
Frontend Guru
<span class="text-green-500">.</span> </h2> <div class="w-full h-[800px md:h-[600px] grid md:grid-cols-2 grid-rows-2 gap-8 md:gap-0"> <div class="p-4 border-r border-b border-[#444cf720]"> <p class="text-xl font-heading text-text mt-8">About me</p> <p class="limit-w">
I am a 22 year old Software developer / Frontend developer from
          Kristiansand, Norway. I have a Higher Professional Degree in Frontend
          development and will be interning at Norkart in the summer of 2024. I
          have
<span class="font-bold text-text">4+ years</span> of experience with web-development
          and have worked on many projects, both personal and professional. I am
          an eager and fast learner and I am always looking for new challenges.
</p> </div> <div class="w-full h-full hidden md:block"></div> <div class="w-full h-full hidden md:block"></div> <div class="p-4 border-t border-l border-[#444cf720]"> <p class="text-xl font-heading text-text mt-8">Tech</p> <p class="limit-w">
While I have experience in many technologies and tools, I am most
          comfortable with <span class="font-bold text-text">React</span> , <span class="font-bold text-text">TailwindCss</span>
and <span class="font-bold text-text">Typescript</span> . I am proficient
          in Python but choose to work with Typescript for most projects. Although
          most of my experience is in React and Typescript/Javascript, I am a fast
          learner and have made projects in multiple frameworks like Vue, Solid and
          Svelte.
</p> </div> </div> </section> <section class="pt-20 mt-64"> <h3>
Projects I have done
<span class="text-blue-500">.</span> </h3> <p class="max-w-[min(650px,calc(100%_-_2rem))]">
I have a lot of ideas, and I love to create things.
</p> ${renderComponent($$result2, "ProjectList", $$ProjectList, {})} </section> <section> ${renderComponent($$result2, "BlogList", $$BlogList, {})} </section> ` })} <style>
  .art {
    background-color: transparent;
    opacity: 0.8;
    background-image: linear-gradient(#444cf720 1px, transparent 1px),
      linear-gradient(to right, #444cf720 1px, transparent 1px);
    background-size: 30px 30px;
  }
</style>`;
}, "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
