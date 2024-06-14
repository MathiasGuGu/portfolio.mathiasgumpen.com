import { i as createAstro, d as createComponent, g as renderTemplate, m as maybeRenderHead, h as renderComponent, n as renderSlot, y as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro_CzQg4Qtz.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DlpbGyJP.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://mathiasgumpen-testsite.netlify.app/");
const $$TextSplit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TextSplit;
  const { ltr } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full h-auto flex justify-between gap-6 mb-6"> ${ltr ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="w-1/2"> ${renderSlot($$result2, $$slots["default"])} </div> <div class="w-1/2 h-72 bg-green-500/10"></div> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="w-1/2 h-72 bg-green-500/10"></div> <div class="w-1/2"> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`} </section>`;
}, "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/components/casestudy/TextSplit.astro", void 0);

const frontmatter = {
  "title": "Tasktracker",
  "description": "Track your task with intuative design, motivation and a sense of accomplishment.",
  "image": "./holidazefrontpage.png",
  "imageMobile": "./Holidazemobile.png",
  "githubRepo": "https://github.com/MathiasGuGu/Holidaze",
  "liveDemo": "https://bookatholidaze.netlify.app"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "my-goals-with-tasktracker",
    "text": "My goals with Tasktracker"
  }, {
    "depth": 3,
    "slug": "step-1-planning-sketches-and-wireframes",
    "text": "Step 1: Planning, Sketches and Wireframes"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: ["Tasktracker is my take on a task tracking application. I know there are a lot out there, made by a team of professionales,\nbut sometimes you just want to make something yourself. It may be better or worse, but it’s yours.\nThe idea came from the podcast ", createVNode(_components.code, {
        children: "Syntax"
      }), " by Wes Bos and Scott Tolinski. They talked about a task list and daily task application that one of them had made.\nIt was quite intriguing to me, so I checked it out, and in my humble, honest opinion, I could do better.\nSo that is what this is. My take on a task tracking application."]
    }), "\n", createVNode(_components.h2, {
      id: "my-goals-with-tasktracker",
      children: "My goals with Tasktracker"
    }), "\n", createVNode(_components.p, {
      children: ["I am really bad at following a task tracker / todo list. So i needed something that would motivate me to use it.\nI have looked at multiple motivational components in different apps like, Duolingo, where they use the streak and daily rewards to motivate the user.\nAlso, if someone is actually going to use an application like this, it need to be simple.\nNo one is going to go through a 10 button process to clear one goal, or get a reward or for simply adding a task.\nIt really need to be simple, intuative and ", createVNode(_components.code, {
        children: "fun"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "step-1-planning-sketches-and-wireframes",
      children: "Step 1: Planning, Sketches and Wireframes"
    }), "\n", createVNode($$TextSplit, {
      ltr: true,
      children: createVNode(_components.p, {
        children: "I really needed to find an intuative way to layout the application. Do I want\nthe user to see all the tasks at once, or do I want the user to see one task\nat a time? Do i want the dailies to be the first thing they see? or should\nthey click on daily tasks to see them? Should the Add Task button also be on\nthe front page?"
      })
    }), "\n", createVNode($$TextSplit, {
      ltr: false,
      children: createVNode(_components.p, {
        children: "I really needed to find an intuative way to layout the application. Do I want\nthe user to see all the tasks at once, or do I want the user to see one task\nat a time? Do i want the dailies to be the first thing they see? or should\nthey click on daily tasks to see them? Should the Add Task button also be on\nthe front page?"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/projects/Tasktracker.mdx";
const file = "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/Tasktracker.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/Tasktracker.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
