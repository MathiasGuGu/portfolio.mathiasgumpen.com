const id = "holidaze.mdx";
						const collection = "projects";
						const slug = "holidaze";
						const body = "\nimport image from \"../../assets/holidazefrontpage.png\";\nimport image2 from \"../../assets/holidazeexplore.png\";\nimport image3 from \"../../assets/Holidazemobile.png\";\nimport Summary from \"../../components/casestudy/Summary.astro\";\nimport Images from \"../../components/casestudy/Images.astro\";\nimport Introduction from \"../../components/casestudy/Introduction.astro\";\n\n<Introduction\n  name=\"holidaze\"\n  description=\"A booking app that lets Noroff students search, find and book venues.\"\n/>\n\n<Summary\n  type=\"Exam\"\n  semester=\"4\"\n  year=\"2024\"\n  shortSummary=\"Holidaze is a fictional booking site that lets noroff student book venues and manage their own venues.\"\n/>\n\n# Introduction\n\nHolidaze is a booking site for noroff students. It was given as a final exam the 4th semester at Noroff.\nThe main purpose of the app is to give the user the ability to book, view and search for hotels.\nAlthough fictional, the app is built with real-world clients and scenarios in mind.\nWhen we were given the task, we were given a design and a set of requirements that we had to follow.\nThese requirements were the basis for the Grade we would be given, so they were very important to follow.\nThe feautures are the requirenmets we had to follow.\n\n<section class=\"my-6\">\n\n## Features\n\n- Search for venues\n- View venue details\n- Book a venue\n- View booking details\n- View available dates\n- View venue images\n- View venue location\n- Manage venues\n- Manage bookings\n- Upload Venues\n\n</section>\n\n<section class=\"my-6\">\n### Challenges\n\nOne challenge that stood out to me and other students I believe was the functional calender component.\nThis component was supposed to showcase all available and unavalable dates for a venue.\nWhen creating this component it was not only important that the user understodd what dates were available, but also that the user could book a date from the very same calender.\nI opted for a pop-up modal that would show the user the available dates and let the user book a date from the same modal.\n\n</section>\n\n<section class=\"my-6\">\n#### Technologies used\n\nReact:\n\n- React Router for routing, and navigation.\n- Tanstack Query for data fetching and caching.\n\n<br />\nTailwind CSS:\n\n- For styling the app.\n- For implementing the design system.\n\n<br />\nTypescript:\n\n- My language of choice.\n- Full type-safety and intellisense.\n\n<br />\nZustand:\n\n- For state management.\n\n</section>\n\n<section class=\"my-6\">\n\n##### Outcome\n\n<Images desk1={image} desk2={image2} mobile={image3} />\n</section>\n";
						const data = {image:
						new Proxy({"src":"/_astro/holidazefrontpage.CDPNzUYi.png","width":2871,"height":1711,"format":"png","fsPath":"/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/holidazefrontpage.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/holidazefrontpage.png";
							}
							
							return target[name];
						}
					})
					,imageMobile:
						new Proxy({"src":"/_astro/Holidazemobile.Lbqo0LYN.png","width":780,"height":1486,"format":"png","fsPath":"/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/Holidazemobile.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/Holidazemobile.png";
							}
							
							return target[name];
						}
					})
					,title:"Holidaze",description:"A booking app for all alike.",liveDemo:"https://bookatholidaze.netlify.app",githubRepo:"https://github.com/MathiasGuGu/Holidaze"};
						const _internal = {
							type: 'content',
							filePath: "/Users/magugu/Documents/Developer/Noroff - Tasks, Courses, CAs/Course Assignment/portfolio/src/content/projects/holidaze.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
