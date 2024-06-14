const id = "ecom.mdx";
						const collection = "projects";
						const slug = "ecom";
						const body = "\nimport image1 from \"../../assets/ecomdesktop.png\";\nimport image2 from \"../../assets/ecommobile.png\";\nimport Summary from \"../../components/casestudy/Summary.astro\";\nimport Images from \"../../components/casestudy/Images.astro\";\nimport Introduction from \"../../components/casestudy/Introduction.astro\";\n\n<Introduction\n  name=\"Ecom\"\n  description=\"A fictional e-commerce site for students and teachers.\"\n/>\n\n<Summary\n  type={\"Course Assignment\"}\n  semester={\"3\"}\n  year=\"2023\"\n  shortSummary={\n    \"Ecom lets you pick and choose from a selection of items and add them to cart.\"\n  }\n/>\n\n##### Introduction\n\nEcom is a fictional e-commerce site for students and teachers. It was given as a final exam the 3rd semester at Noroff.\nThe point of this task was to introduce us to global state managers and form validation.\nThe app uses a in-house api to fetch data and display it to the user.\n\n<section class=\"my-6\">\n\n##### Features\n\n- Search for products\n- View product details\n- Add products to cart\n- View cart\n- Remove products from cart\n- Checkout\n\n</section>\n\n<section class=\"my-6\">\n##### Challenges\n\nThe challenge here was to implement a global state store to manage the cart. I opted for Zustand, a simple and fast global state manager.\n\n</section>\n\n<section class=\"my-6\">\n##### Technologies used\n\nReact:\n\n- React Router for routing, and navigation.\n\n<br />\nTailwind CSS:\n\n- For styling the app.\n\n<br />\nTypescript:\n\n- My language of choice.\n- Full type-safety and intellisense.\n\n<br />\nZustand:\n\n- For state management.\n\n</section>\n\n<section class=\"my-6\">\n\n##### Outcome\n\n<Images desk1={image1} desk2={image2} mobile={image1} />\n</section>\n";
						const data = {image:
						new Proxy({"src":"/_astro/ecomdesktop.1m_Dz0bU.png","width":2880,"height":1800,"format":"png","fsPath":"/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/ecomdesktop.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/ecomdesktop.png";
							}
							
							return target[name];
						}
					})
					,imageMobile:
						new Proxy({"src":"/_astro/ecommobile.BHdMQW02.png","width":780,"height":1566,"format":"png","fsPath":"/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/ecommobile.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/ecommobile.png";
							}
							
							return target[name];
						}
					})
					,title:"Ecom",description:"A fictional e-commerce site for students and teachers.",liveDemo:"https://gleaming-profiterole-7aa164.netlify.app/",githubRepo:"https://github.com"};
						const _internal = {
							type: 'content',
							filePath: "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/ecom.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
