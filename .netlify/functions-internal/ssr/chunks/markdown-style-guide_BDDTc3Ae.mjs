import { i as createAstro, d as createComponent, g as renderTemplate, j as addAttribute, h as renderComponent, k as renderHead, l as renderTransition, n as renderSlot, y as Fragment, _ as __astro_tag_component__, w as createVNode } from './astro_CzQg4Qtz.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/generic_DlpbGyJP.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
/* empty css                         */
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from './pages/__CG7ZS0Ln.mjs';
/* empty css                                   */

const $$Astro = createAstro("https://mathiasgumpen-testsite.netlify.app/");
const $$BlogHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/components/BlogHead.astro", void 0);

const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BlogHead", $$BlogHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> <main class="w-[50vw] pt-24"${addAttribute(renderTransition($$result, "jbeaia2d"), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </main>  </body> </html>`;
}, "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/layouts/BlogLayout.astro", "self");

const frontmatter = {
  "title": "Markdown Style Sheet",
  "description": "What do we do about Markdown Styling?",
  "pubDate": "11 06 24",
  "heroImage": "/blog-placeholder-1.jpg"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "markdown-style-sheet",
    "text": "Markdown Style Sheet"
  }, {
    "depth": 4,
    "slug": "first-off-headers",
    "text": "First off, Headers"
  }, {
    "depth": 1,
    "slug": "this-is-a-h1",
    "text": "This is a H1"
  }, {
    "depth": 2,
    "slug": "this-is-a-h2",
    "text": "This is a H2"
  }, {
    "depth": 3,
    "slug": "this-is-a-h3",
    "text": "This is a H3"
  }, {
    "depth": 4,
    "slug": "this-is-a-h4",
    "text": "This is a H4"
  }, {
    "depth": 5,
    "slug": "this-is-a-h5",
    "text": "This is a H5"
  }, {
    "depth": 4,
    "slug": "code-blocks",
    "text": "Code Blocks"
  }, {
    "depth": 4,
    "slug": "lists",
    "text": "Lists"
  }, {
    "depth": 4,
    "slug": "links",
    "text": "Links"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode($$BlogLayout, {
    children: [createVNode(_components.h1, {
      id: "markdown-style-sheet",
      children: "Markdown Style Sheet"
    }), createVNode(_components.p, {
      children: "Writing a blog with markdown can be fun. It is easy, reliable and honestly a pretty good learning experience.\nBut now we need styling, because without good styling no one will read it, right?"
    }), createVNode(_components.h4, {
      id: "first-off-headers",
      children: "First off, Headers"
    }), createVNode(_components.p, {
      children: "Headers are locking points. It is what a user reads first when they scroll and ultimately decides if they are interested.\nSo, make sure your headers are big, bold and beautiful."
    }), createVNode(_components.h1, {
      id: "this-is-a-h1",
      children: "This is a H1"
    }), createVNode(_components.h2, {
      id: "this-is-a-h2",
      children: "This is a H2"
    }), createVNode(_components.h3, {
      id: "this-is-a-h3",
      children: "This is a H3"
    }), createVNode(_components.h4, {
      id: "this-is-a-h4",
      children: "This is a H4"
    }), createVNode(_components.h5, {
      id: "this-is-a-h5",
      children: "This is a H5"
    }), createVNode(_components.p, {
      children: "What more do we need? we have titles and we have text, so we are good right? No, there is so much more.\nLets have a look at Code blocks"
    }), createVNode(_components.h4, {
      id: "code-blocks",
      children: "Code Blocks"
    }), createVNode(_components.p, {
      children: "Code blocks are a good way to show code snippets. It is important to have a good style for code blocks.\nHere is an example of a code block showcasing a simple function in JavaScript."
    }), createVNode(_components.pre, {
      class: "astro-code github-dark has-diff",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " add"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "b"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line diff remove",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " a "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " b; "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), createVNode(_components.p, {
      children: "Syntax highlighting depends on the language you use for your code block.\nIn this example were using Javascript so we get relevant highlighting on keywords."
    }), createVNode(_components.p, {
      children: "you can specify the language by adding the language name after the three backticks.\nFor example, to specify the language as JavaScript, you would write ```javascript."
    }), createVNode(_components.p, {
      children: "You can also use other languages like CSS, HTML, Python, bash, etc."
    }), createVNode(_components.p, {
      children: "now we have to be good right? NO!"
    }), createVNode(_components.h4, {
      id: "lists",
      children: "Lists"
    }), createVNode(_components.p, {
      children: "Lists are a good way to show a list of items. It can be ordered or unordered.\nHere is an example of an unordered list."
    }), createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Item 1"
      }), "\n", createVNode(_components.li, {
        children: "Item 2"
      }), "\n"]
    }), createVNode(_components.p, {
      children: "Here is an example of an ordered list."
    }), createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Item 1"
      }), "\n", createVNode(_components.li, {
        children: "Item 2"
      }), "\n", createVNode(_components.li, {
        children: "Item 3"
      }), "\n"]
    }), createVNode(_components.h4, {
      id: "links",
      children: "Links"
    }), createVNode(_components.p, {
      children: ["Links are a good way to link to other pages or websites. Here is an example of a link to the ", createVNode(_components.a, {
        href: "https://astro.build/",
        children: "Astro website"
      }), "."]
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
const url = "src/content/blog/markdown-style-guide.mdx";
const file = "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/blog/markdown-style-guide.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/blog/markdown-style-guide.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
