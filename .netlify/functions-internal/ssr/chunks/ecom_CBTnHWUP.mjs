import { y as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro_CzQg4Qtz.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DlpbGyJP.mjs';
import { $ as $$Introduction, a as $$Summary, b as $$Images } from './Introduction_C27FLj0u.mjs';
import 'clsx';

const image1 = new Proxy({"src":"/_astro/ecomdesktop.1m_Dz0bU.png","width":2880,"height":1800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/assets/ecomdesktop.png";
							}
							
							return target[name];
						}
					});

const image2 = new Proxy({"src":"/_astro/ecommobile.BHdMQW02.png","width":780,"height":1566,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/assets/ecommobile.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Ecom",
  "description": "A fictional e-commerce site for students and teachers.",
  "image": "./ecomdesktop.png",
  "imageMobile": "./ecommobile.png",
  "githubRepo": "https://github.com",
  "liveDemo": "https://gleaming-profiterole-7aa164.netlify.app/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 3,
    "slug": "features",
    "text": "Features"
  }, {
    "depth": 4,
    "slug": "challenges",
    "text": "Challenges"
  }, {
    "depth": 5,
    "slug": "technologies-used",
    "text": "Technologies used"
  }, {
    "depth": 6,
    "slug": "outcome",
    "text": "Outcome"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$Introduction, {
      name: "Ecom",
      description: "A fictional e-commerce site for students and teachers."
    }), "\n", createVNode($$Summary, {
      type: "Course Assignment",
      semester: "3",
      year: "2023",
      shortSummary: "Ecom lets you pick and choose from a selection of items and add them to cart."
    }), "\n", createVNode(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "Ecom is a fictional e-commerce site for students and teachers. It was given as a final exam the 3rd semester at Noroff.\nThe point of this task was to introduce us to global state managers and form validation.\nThe app uses a in-house api to fetch data and display it to the user."
    }), "\n", createVNode("section", {
      class: "my-6",
      children: [createVNode(_components.h3, {
        id: "features",
        children: "Features"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Search for products"
        }), "\n", createVNode(_components.li, {
          children: "View product details"
        }), "\n", createVNode(_components.li, {
          children: "Add products to cart"
        }), "\n", createVNode(_components.li, {
          children: "View cart"
        }), "\n", createVNode(_components.li, {
          children: "Remove products from cart"
        }), "\n", createVNode(_components.li, {
          children: "Checkout"
        }), "\n"]
      })]
    }), "\n", createVNode("section", {
      class: "my-6",
      children: [createVNode(_components.h4, {
        id: "challenges",
        children: "Challenges"
      }), createVNode(_components.p, {
        children: "The challenge here was to implement a global state store to manage the cart. I opted for Zustand, a simple and fast global state manager."
      })]
    }), "\n", createVNode("section", {
      class: "my-6",
      children: [createVNode(_components.h5, {
        id: "technologies-used",
        children: "Technologies used"
      }), createVNode(_components.p, {
        children: "React:"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "React Router for routing, and navigation."
        }), "\n"]
      }), createVNode("br", {}), createVNode(_components.p, {
        children: "Tailwind CSS:"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "For styling the app."
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
      children: [createVNode(_components.h6, {
        id: "outcome",
        children: "Outcome"
      }), createVNode($$Images, {
        desk1: image1,
        desk2: image2,
        mobile: image1
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

const url = "src/content/projects/ecom.mdx";
const file = "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/ecom.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/ecom.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
