const id = "markdown-style-guide.mdx";
						const collection = "blog";
						const slug = "markdown-style-guide";
						const body = "\nimport BlogLayout from \"../../layouts/BlogLayout.astro\";\n\n<BlogLayout>\n# Markdown Style Sheet\n\nWriting a blog with markdown can be fun. It is easy, reliable and honestly a pretty good learning experience.\nBut now we need styling, because without good styling no one will read it, right?\n\n#### First off, Headers\n\nHeaders are locking points. It is what a user reads first when they scroll and ultimately decides if they are interested.\nSo, make sure your headers are big, bold and beautiful.\n\n# This is a H1\n\n## This is a H2\n\n### This is a H3\n\n#### This is a H4\n\n##### This is a H5\n\nWhat more do we need? we have titles and we have text, so we are good right? No, there is so much more.\nLets have a look at Code blocks\n\n#### Code Blocks\n\nCode blocks are a good way to show code snippets. It is important to have a good style for code blocks.\nHere is an example of a code block showcasing a simple function in JavaScript.\n\n```javascript\nfunction add(a, b) {\n  return a + b; // [!code --]\n}\n```\n\nSyntax highlighting depends on the language you use for your code block.\nIn this example were using Javascript so we get relevant highlighting on keywords.\n\nyou can specify the language by adding the language name after the three backticks.\nFor example, to specify the language as JavaScript, you would write ```javascript.\n\nYou can also use other languages like CSS, HTML, Python, bash, etc.\n\nnow we have to be good right? NO!\n\n#### Lists\n\nLists are a good way to show a list of items. It can be ordered or unordered.\nHere is an example of an unordered list.\n\n- Item 1\n- Item 2\n\nHere is an example of an ordered list.\n\n1. Item 1\n2. Item 2\n3. Item 3\n\n#### Links\n\nLinks are a good way to link to other pages or websites. Here is an example of a link to the [Astro website](https://astro.build/).\n\n</BlogLayout>\n";
						const data = {title:"Markdown Style Sheet",description:"What do we do about Markdown Styling?",pubDate:"11 06 24",heroImage:"/blog-placeholder-1.jpg"};
						const _internal = {
							type: 'content',
							filePath: "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/blog/markdown-style-guide.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
