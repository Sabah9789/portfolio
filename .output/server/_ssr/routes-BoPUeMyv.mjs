import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BoPUeMyv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContourArt({ className = "" }) {
	const rings = Array.from({ length: 11 }, (_, i) => i);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 600 700",
		fill: "none",
		"aria-hidden": "true",
		className,
		preserveAspectRatio: "xMidYMid meet",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				stroke: "currentColor",
				strokeWidth: "0.6",
				opacity: "0.5",
				children: rings.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M ${120 - i * 9} ${250 + i * 6}
                C ${150 - i * 10} ${150 - i * 12}, ${330 + i * 14} ${120 - i * 10}, ${380 + i * 16} ${250 - i * 4}
                C ${430 + i * 14} ${370 + i * 12}, ${300 + i * 6} ${470 + i * 14}, ${200 - i * 6} ${430 + i * 10}
                C ${130 - i * 10} ${400 + i * 8}, ${100 - i * 8} ${330 + i * 6}, ${120 - i * 9} ${250 + i * 6} Z` }, `a${i}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				stroke: "currentColor",
				strokeWidth: "0.5",
				opacity: "0.28",
				children: rings.slice(0, 7).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: 420,
					cy: 560,
					rx: 40 + i * 22,
					ry: 26 + i * 14,
					transform: `rotate(-18 420 560)`
				}, `b${i}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: "currentColor",
				strokeWidth: "0.4",
				opacity: "0.2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "0",
						y1: "140",
						x2: "600",
						y2: "140"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "0",
						y1: "420",
						x2: "600",
						y2: "420"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "160",
						y1: "0",
						x2: "160",
						y2: "700"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "440",
						y1: "0",
						x2: "440",
						y2: "700"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "trace-line",
				d: "M 40 640 C 180 560, 190 380, 300 300 C 400 228, 470 250, 560 120",
				stroke: "currentColor",
				strokeWidth: "1.1",
				strokeDasharray: "6 7",
				opacity: "0.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				fill: "currentColor",
				children: [
					[300, 300],
					[188, 396],
					[470, 246],
					[420, 560]
				].map(([cx, cy]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx,
					cy,
					r: "9",
					className: "marker-pulse",
					opacity: "0.2"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx,
					cy,
					r: "2.6"
				})] }, `${cx}-${cy}`))
			})
		]
	});
}
function GridField({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: `grid-paper ${className}`
	});
}
function InstallationMap({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 1240 560",
		fill: "none",
		"aria-hidden": "true",
		className,
		preserveAspectRatio: "xMidYMid slice",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: "currentColor",
				strokeWidth: "0.4",
				opacity: "0.22",
				children: [[
					80,
					180,
					280,
					380,
					480
				].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "0",
					y1: y,
					x2: "1240",
					y2: y
				}, `y${y}`)), [
					120,
					320,
					520,
					720,
					920,
					1120
				].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: x,
					y1: "0",
					x2: x,
					y2: "560"
				}, `x${x}`))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				stroke: "currentColor",
				strokeWidth: "0.6",
				opacity: "0.45",
				className: "drift-slow",
				children: Array.from({ length: 9 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M ${-40 + i * 6} ${200 + i * 16}
                C ${220 + i * 18} ${90 + i * 10}, ${520 - i * 12} ${320 + i * 12}, ${760 + i * 14} ${210 + i * 10}
                C ${940 + i * 10} ${140 + i * 8}, 1080 ${260 + i * 14}, 1280 ${180 + i * 12}` }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "trace-line",
				d: "M 120 470 L 330 360 L 520 392 L 730 240 L 940 286 L 1120 150",
				stroke: "currentColor",
				strokeWidth: "1.2",
				opacity: "0.85"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				fill: "currentColor",
				children: [
					[120, 470],
					[330, 360],
					[520, 392],
					[730, 240],
					[940, 286],
					[1120, 150]
				].map(([cx, cy]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx,
					cy,
					r: "12",
					className: "marker-pulse",
					opacity: "0.18"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx,
					cy,
					r: "3"
				})] }, `${cx}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "currentColor",
				opacity: "0.55",
				fontSize: "9",
				letterSpacing: "2",
				fontFamily: "var(--font-sans)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "128",
						y: "494",
						children: "31°00′N"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "738",
						y: "226",
						children: "LAYER 02 — ROUTES"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "1010",
						y: "304",
						children: "SAMPLE Ø 248"
					})
				]
			})
		]
	});
}
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const io = new IntersectionObserver((entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				setShown(true);
				io.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(node);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: `reveal ${shown ? "reveal-in" : ""} ${className}`,
		children
	});
}
var project_gis_app_default = "/assets/project-gis-app-DUXdxs6o.jpg";
var project_lexora_default = "/assets/project-lexora-DL4JVfmN.jpg";
var project_grocery_default = "/assets/project-grocery-DrsFgrO1.jpg";
var project_dataviz_default = "/assets/project-dataviz-BJw-QFD-.jpg";
var NAV = [
	{
		label: "Work",
		href: "#work"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Expertise",
		href: "#expertise"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
var EXPERTISE = [
	{
		no: "01",
		title: "GIS & Spatial Data",
		items: [
			"Spatial Analysis",
			"GIS Data Management",
			"Geodatabases",
			"Data Modeling",
			"Web GIS"
		]
	},
	{
		no: "02",
		title: "Front-End Development",
		items: [
			"HTML",
			"CSS",
			"JavaScript",
			"React",
			"Tailwind CSS",
			"Responsive Interfaces"
		]
	},
	{
		no: "03",
		title: "Data & Digital Experiences",
		items: [
			"Interactive Maps",
			"Dashboards",
			"Data Visualization",
			"REST APIs",
			"User-focused Interfaces"
		]
	}
];
var PROJECTS = [
	{
		no: "01",
		title: "GIS Web Application",
		description: "Interactive mapping platform focused on spatial data visualization.",
		tech: [
			"Web GIS",
			"Leaflet",
			"React",
			"REST APIs"
		],
		image: project_gis_app_default
	},
	{
		no: "02",
		title: "Lexora",
		description: "Premium law firm management system with a calm, document-first interface.",
		tech: [
			"React",
			"Tailwind CSS",
			"Dashboards"
		],
		image: project_lexora_default
	},
	{
		no: "03",
		title: "Grocery",
		description: "Modern online grocery e-commerce experience built around clarity and speed.",
		tech: [
			"React",
			"JavaScript",
			"Responsive UI"
		],
		image: project_grocery_default
	},
	{
		no: "04",
		title: "GIS Data Visualization",
		description: "Spatial dashboards and data-driven visual experiences across layered datasets.",
		tech: [
			"Spatial Analysis",
			"Data Viz",
			"Geodatabases"
		],
		image: project_dataviz_default
	}
];
var TIMELINE = [
	{
		no: "01",
		title: "GIS Background",
		note: "Spatial thinking, geodatabases, analysis"
	},
	{
		no: "02",
		title: "ITI GIS Training",
		note: "Professional geospatial specialization"
	},
	{
		no: "03",
		title: "Front-End Development",
		note: "HTML, CSS, JavaScript foundations"
	},
	{
		no: "04",
		title: "React & Modern Web Applications",
		note: "Component systems, interfaces"
	},
	{
		no: "05",
		title: "GIS × Web Development",
		note: "Maps, dashboards, spatial products"
	}
];
var LINKS = [
	{
		label: "GitHub",
		href: "https://github.com/Sabah9789"
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/sabah-hassan-270297398"
	},
	{
		label: "Email",
		href: "mailto:sh9744489@gmail.com?subject=Portfolio%20Inquiry"
	},
	{
		label: "WhatsApp",
		href: "https://wa.me/201149149483"
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative overflow-x-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expertise, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signature, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-700 ${scrolled ? "border-b border-foreground/15 bg-background/85 backdrop-blur-md" : "border-b border-transparent"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12 md:py-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "display text-lg tracking-[0.18em] uppercase md:text-xl",
					children: "Sabah Hassan"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-10 md:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: item.href,
						className: "group label-xs relative inline-block py-1",
						children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-0.5 left-0 h-px w-0 bg-copper transition-all duration-500 group-hover:w-full" })]
					}) }, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "label-xs border border-foreground/30 px-4 py-3 transition-colors duration-500 hover:border-copper hover:text-copper md:hidden",
					children: "Contact"
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-screen overflow-hidden pt-28 md:pt-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridField, { className: "pointer-events-none absolute inset-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-[1440px] gap-12 px-6 pb-20 md:grid-cols-12 md:px-12 md:pb-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7 md:pt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-xs text-copper",
						children: "GIS Specialist / Front-End Developer"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "display mt-8 text-[3.1rem] sm:text-6xl md:mt-12 md:text-[5.4rem] lg:text-[6.2rem]",
							children: [
								"Turning spatial",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"data into",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "text-copper not-italic",
									children: "digital"
								}),
								" experiences."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 240,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base",
							children: "I combine geospatial expertise with modern front-end development to create interactive maps, data-driven applications, and refined digital experiences."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 340,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticLink, {
								href: "#work",
								variant: "solid",
								children: "Explore Work"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticLink, {
								href: "#contact",
								children: "Let's Talk"
							})]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 200,
				className: "md:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-[380px] w-full sm:h-[460px] md:h-[620px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 border border-hairline" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContourArt, { className: "drift-slow absolute inset-0 h-full w-full text-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-xs absolute -top-3 left-4 bg-background px-2 text-copper",
							children: "Fig. 01 — Terrain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-xs absolute right-4 -bottom-3 bg-background px-2 text-foreground/60",
							children: "31°00′N / 31°30′E"
						})
					]
				})
			})]
		})]
	});
}
function MagneticLink({ href, children, variant = "outline" }) {
	const [offset, setOffset] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		onMouseMove: (e) => {
			const r = e.currentTarget.getBoundingClientRect();
			setOffset({
				x: (e.clientX - (r.left + r.width / 2)) / r.width * 12,
				y: (e.clientY - (r.top + r.height / 2)) / r.height * 8
			});
		},
		onMouseLeave: () => setOffset({
			x: 0,
			y: 0
		}),
		style: { transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` },
		className: `label-xs inline-flex items-center gap-3 rounded-sm px-7 py-4 transition-all duration-500 ease-out ${variant === "solid" ? "bg-foreground text-background hover:bg-copper" : "border border-foreground/30 text-foreground hover:border-copper hover:text-copper"}`,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			children: "→"
		})]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "relative overflow-hidden bg-foreground text-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContourArt, { className: "pointer-events-none absolute -top-40 -right-40 h-[900px] w-[900px] text-background opacity-[0.13]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-[1440px] gap-10 px-6 py-24 md:grid-cols-12 md:px-12 md:py-40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-xs text-background/60",
					children: "01 — About"
				}) })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-8 md:col-start-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display text-[2.8rem] sm:text-6xl md:text-[5.5rem]",
						children: [
							"GIS meets",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"the web."
						]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 160,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-10 max-w-2xl text-base leading-relaxed text-background/75 md:mt-16 md:text-lg",
							children: "I transform complex spatial information into clear, interactive and visually engaging digital experiences."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 260,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-14 grid gap-px border-t border-background/20 sm:grid-cols-3",
							children: [
								["Discipline", "GIS × Front-End"],
								["Focus", "Maps & Dashboards"],
								["Based", "Egypt — Remote"]
							].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-background/20 py-6 pr-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "label-xs text-background/50",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-3 text-sm md:text-base",
									children: v
								})]
							}, k))
						})
					})
				]
			})]
		})]
	});
}
function Expertise() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "expertise",
		className: "mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display text-[2.6rem] sm:text-5xl md:text-[4.5rem]",
				children: "What I do"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-xs text-copper",
					children: "02 — Expertise"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid gap-6 md:mt-24 md:grid-cols-3",
			children: EXPERTISE.map((block, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 140,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group h-full border border-hairline bg-champagne p-8 transition-colors duration-700 hover:border-copper md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-xs text-copper",
							children: block.no
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display mt-8 text-3xl md:text-[2.4rem]",
							children: block.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-10 space-y-3 border-t border-foreground/15 pt-8",
							children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-500 group-hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-5 bg-copper" }), item]
							}, item))
						})
					]
				})
			}, block.no))
		})]
	});
}
function Work() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "relative border-y border-foreground/15 bg-champagne",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-40",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-xs text-copper",
					children: "03 — Portfolio"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-6 text-[2.8rem] sm:text-6xl md:text-[6rem]",
						children: "Selected work"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 space-y-24 md:mt-32 md:space-y-40",
					children: PROJECTS.map((project, i) => {
						const flipped = i % 2 === 1;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "grid items-center gap-10 md:grid-cols-12 md:gap-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `md:col-span-7 ${flipped ? "md:order-2 md:col-start-6" : "md:order-1"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group relative overflow-hidden border border-hairline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: project.image,
										alt: `${project.title} — project visual`,
										loading: "lazy",
										width: 1408,
										height: 1008,
										className: "h-[260px] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06] sm:h-[360px] md:h-[520px]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "display absolute top-4 left-5 text-4xl text-background mix-blend-difference md:text-6xl",
										children: project.no
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `md:col-span-4 ${flipped ? "md:order-1 md:col-start-1" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "label-xs text-copper",
										children: ["Project ", project.no]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "display mt-6 text-4xl md:text-[3.2rem]",
										children: project.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 text-sm leading-relaxed text-muted-foreground md:text-base",
										children: project.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-foreground/15 pt-6",
										children: project.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "label-xs text-foreground/70",
											children: t
										}, t))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contact",
										className: "group label-xs mt-10 inline-flex items-center gap-3 text-copper",
										children: ["View Project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-copper transition-all duration-500 group-hover:w-14" })]
									})
								]
							})]
						}) }, project.no);
					})
				})
			]
		})
	});
}
function Signature() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-foreground py-24 text-background md:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallationMap, { className: "pointer-events-none absolute inset-0 h-full w-full text-background opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1440px] px-6 md:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-xs text-background/55",
					children: "04 — Signature"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-8 max-w-4xl text-[2.9rem] sm:text-6xl md:text-[6.4rem]",
						children: "Every dataset has a story."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 240,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid gap-px border-t border-background/20 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							["Layer 01", "Basemap & terrain"],
							["Layer 02", "Routes & networks"],
							["Layer 03", "Spatial markers"],
							["Layer 04", "Analysis output"]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-background/20 py-6 pr-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-xs text-background/50",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm",
								children: v
							})]
						}, k))
					})
				})
			]
		})]
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "label-xs text-copper",
			children: "05 — Experience"
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-14 md:mt-24",
			children: TIMELINE.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				as: "li",
				delay: i * 90,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group grid gap-4 border-t border-foreground/15 py-8 transition-colors duration-700 hover:border-copper md:grid-cols-12 md:py-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label-xs text-copper md:col-span-2",
							children: step.no
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display text-2xl md:col-span-6 md:text-[2.6rem]",
							children: step.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground md:col-span-4 md:pt-3",
							children: step.note
						})
					]
				})
			}, step.no))
		})]
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative overflow-hidden bg-foreground text-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridField, { className: "pointer-events-none absolute inset-0 opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-44",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-xs text-background/55",
					children: "06 — Contact"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-8 max-w-5xl text-[2.9rem] sm:text-6xl md:text-[6.6rem]",
						children: "Let's build something meaningful."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 220,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 text-base text-background/70 md:text-lg",
						children: "Have a GIS, dashboard, or web project in mind?"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 300,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "mailto:hello@sabahhassan.dev",
						className: "label-xs mt-12 inline-flex items-center gap-4 rounded-sm bg-background px-8 py-5 text-foreground transition-colors duration-500 hover:bg-copper hover:text-background",
						children: ["Start a Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "→"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 380,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-20 grid gap-px border-t border-background/20 sm:grid-cols-2 lg:grid-cols-4",
						children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-b border-background/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: link.href,
								className: "label-xs flex items-center justify-between py-6 pr-6 text-background/75 transition-colors duration-500 hover:text-background",
								children: [link.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "↗"
								})]
							})
						}, link.label))
					})
				})
			]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-6 border-t border-foreground/15 pt-8 md:flex-row md:items-end md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "display text-2xl tracking-[0.16em] uppercase",
				children: "Sabah Hassan"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label-xs mt-4 text-muted-foreground",
				children: "GIS Specialist × Front-End Developer"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-xs text-copper",
					children: "31°00′N / 31°30′E"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label-xs text-muted-foreground",
					children: "© 2026"
				})]
			})]
		})
	});
}
//#endregion
export { Index as component };
