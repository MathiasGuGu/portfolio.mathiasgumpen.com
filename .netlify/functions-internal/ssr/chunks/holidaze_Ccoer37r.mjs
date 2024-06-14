import { y as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro_CzQg4Qtz.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_XoUaQcHQ.mjs';
import { $ as $$Introduction, a as $$Summary, b as $$Images } from './Introduction_d_107qRp.mjs';
import 'clsx';

const image = new Proxy({"src":"/_astro/holidazefrontpage.CDPNzUYi.png","width":2871,"height":1711,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/assets/holidazefrontpage.png";
							}
							
							return target[name];
						}
					});

const image2 = new Proxy({"src":"/_astro/holidazeexplore.Dro0I2Es.png","width":2880,"height":1720,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/assets/holidazeexplore.png";
							}
							
							return target[name];
						}
					});

const image3 = new Proxy({"src":"/_astro/Holidazemobile.Lbqo0LYN.png","width":780,"height":1486,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/assets/Holidazemobile.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Holidaze",
  "description": "A booking app for all alike.",
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
    "slug": "features",
    "text": "Features"
  }, {
    "depth": 3,
    "slug": "challenges",
    "text": "Challenges"
  }, {
    "depth": 4,
    "slug": "technologies-used",
    "text": "Technologies used"
  }, {
    "depth": 5,
    "slug": "outcome",
    "text": "Outcome"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$Introduction, {
      name: "holidaze",
      description: "A booking app that lets Noroff students search, find and book venues."
    }), "\n", createVNode($$Summary, {
      type: "Exam",
      semester: "4",
      year: "2024",
      shortSummary: "Holidaze is a fictional booking site that lets noroff student book venues and manage their own venues."
    }), "\n", createVNode(_components.h1, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "Holidaze is a booking site for noroff students. It was given as a final exam the 4th semester at Noroff.\nThe main purpose of the app is to give the user the ability to book, view and search for hotels.\nAlthough fictional, the app is built with real-world clients and scenarios in mind.\nWhen we were given the task, we were given a design and a set of requirements that we had to follow.\nThese requirements were the basis for the Grade we would be given, so they were very important to follow.\nThe feautures are the requirenmets we had to follow."
    }), "\n", createVNode("section", {
      class: "my-6",
      children: [createVNode(_components.h2, {
        id: "features",
        children: "Features"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Search for venues"
        }), "\n", createVNode(_components.li, {
          children: "View venue details"
        }), "\n", createVNode(_components.li, {
          children: "Book a venue"
        }), "\n", createVNode(_components.li, {
          children: "View booking details"
        }), "\n", createVNode(_components.li, {
          children: "View available dates"
        }), "\n", createVNode(_components.li, {
          children: "View venue images"
        }), "\n", createVNode(_components.li, {
          children: "View venue location"
        }), "\n", createVNode(_components.li, {
          children: "Manage venues"
        }), "\n", createVNode(_components.li, {
          children: "Manage bookings"
        }), "\n", createVNode(_components.li, {
          children: "Upload Venues"
        }), "\n"]
      })]
    }), "\n", createVNode("section", {
      class: "my-6",
      children: [createVNode(_components.h3, {
        id: "challenges",
        children: "Challenges"
      }), createVNode(_components.p, {
        children: "One challenge that stood out to me and other students I believe was the functional calender component.\nThis component was supposed to showcase all available and unavalable dates for a venue.\nWhen creating this component it was not only important that the user understodd what dates were available, but also that the user could book a date from the very same calender.\nI opted for a pop-up modal that would show the user the available dates and let the user book a date from the same modal."
      })]
    }), "\n", createVNode("section", {
      class: "my-6",
      children: [createVNode(_components.h4, {
        id: "technologies-used",
        children: "Technologies used"
      }), createVNode(_components.p, {
        children: "React:"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "React Router for routing, and navigation."
        }), "\n", createVNode(_components.li, {
          children: "Tanstack Query for data fetching and caching."
        }), "\n"]
      }), createVNode("br", {}), createVNode(_components.p, {
        children: "Tailwind CSS:"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "For styling the app."
        }), "\n", createVNode(_components.li, {
          children: "For implementing the design system."
        }), "\n"]
      }), createVNode("br", {}), createVNode(_components.p, {
        children: "Typescript:"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "My language of choice."
        }), "\n", createVNode(_components.li, {
          children: "Full type-safety and intellisense."
        }), "\n"]
      }), createVNode("br", {}), createVNode(_components.p, {
        children: "Zustand:"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "For state management."
        }), "\n"]
      })]
    }), "\n", createVNode("section", {
      class: "my-6",
      children: [createVNode(_components.h5, {
        id: "outcome",
        children: "Outcome"
      }), createVNode($$Images, {
        desk1: image,
        desk2: image2,
        mobile: image3
      })]
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

const url = "src/content/projects/holidaze.mdx";
const file = "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/holidaze.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/holidaze.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
