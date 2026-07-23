import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as PageShell } from "./Shared-DnrC8IIL.mjs";
import { D as Brain, E as CalendarDays, O as Bot, _ as Github, a as Twitter, d as MessageSquareText, h as Layers, m as Linkedin, s as Sparkles, v as FileText, w as ChevronDown, y as ClipboardCheck } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useNavigate, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BrainBloomLogo } from "./BrainBloomLogo-CtJx2iFB.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-9M0vNCq2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CFngm57u.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "\r\n      fixed top-4 left-1/2 z-50\r\n      w-[95%] max-w-6xl\r\n      -translate-x-1/2\r\n      rounded-2xl\r\n      border border-white/40\r\n      bg-white/80\r\n      px-5 py-3\r\n      shadow-lg\r\n      backdrop-blur-xl\r\n    ",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainBloomLogo, { size: 50 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl font-bold text-slate-900",
						children: "BrainBloom AI"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex items-center gap-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpen(!open),
							className: "\r\n              flex items-center gap-1\r\n              text-sm\r\n              font-medium\r\n              text-slate-600\r\n              hover:text-pink-500\r\n              ",
							children: ["Features", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 16 })]
						}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "\r\n              absolute\r\n              top-8\r\n              left-0\r\n              w-56\r\n              rounded-2xl\r\n              border\r\n              bg-white\r\n              p-3\r\n              shadow-xl\r\n              ",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/generate-quiz",
									className: "block rounded-lg p-2 hover:bg-pink-50",
									children: "📝 Quiz Generator"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/flashcards",
									className: "block rounded-lg p-2 hover:bg-pink-50",
									children: "🧠 Flashcards"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/summarizer",
									className: "block rounded-lg p-2 hover:bg-pink-50",
									children: "📄 PDF Summarizer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pdf-chat",
									className: "block rounded-lg p-2 hover:bg-pink-50",
									children: "💬 PDF Chat"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/chat",
									className: "block rounded-lg p-2 hover:bg-pink-50",
									children: "🤖 AI Tutor"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/evaluate",
									className: "block rounded-lg p-2 hover:bg-pink-50",
									children: "⭐ AI Evaluation"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/dashboard",
						className: "\r\n            text-sm\r\n            font-medium\r\n            text-slate-600\r\n            hover:text-pink-500\r\n            ",
						children: "Dashboard"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: "\r\n          rounded-full\r\n          bg-gradient-to-r\r\n          from-pink-500\r\n          to-purple-600\r\n          px-5 py-2\r\n          text-sm\r\n          font-semibold\r\n          text-white\r\n          shadow-md\r\n          ",
					children: "Login / Sign Up"
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border/60 bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 place-items-center rounded-xl text-primary-foreground",
						style: { background: "var(--gradient-hero)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg font-bold",
						children: "BrainBloom AI"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Learn smarter with AI-powered lessons, quizzes, and tutoring."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-3 text-sm font-semibold",
					children: "Product"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/learn",
							className: "hover:text-primary",
							children: "Learn"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/generate-quiz",
							className: "hover:text-primary",
							children: "Quiz Generator"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/chat",
							className: "hover:text-primary",
							children: "AI Tutor"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-3 text-sm font-semibold",
					children: "Company"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "About" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Blog" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Careers" })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-3 text-sm font-semibold",
					children: "Follow"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3 text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-5 w-5 hover:text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "h-5 w-5 hover:text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-5 w-5 hover:text-primary" })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-border/60 py-6 text-center text-xs text-muted-foreground",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" BrainBloom AI. All rights reserved."
			]
		})]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$16 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "BrainBloom AI — Learn Smarter with AI" },
			{
				name: "description",
				content: "Generate personalized lessons, quizzes, and explanations instantly with AI."
			},
			{
				name: "author",
				content: "BrainBloom AI"
			},
			{
				property: "og:title",
				content: "BrainBloom AI — Learn Smarter with AI"
			},
			{
				property: "og:description",
				content: "Generate personalized lessons, quizzes, and explanations instantly with AI."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.ico",
			type: "image/x-icon"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$16.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col bg-background text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
			]
		})
	});
}
var $$splitComponentImporter$13 = () => import("./routes-Co8LThSN.mjs");
var Route$15 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./chat-CxMi04ak.mjs");
var Route$14 = createFileRoute("/chat")({
	head: () => ({ meta: [{ title: "AI Tutor — BrainBloom AI" }, {
		name: "description",
		content: "Chat with your AI tutor."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var Route$13 = createFileRoute("/dashboard")({ component: Dashboard });
var tools = [
	{
		title: "AI Chat",
		description: "Ask questions and learn with your AI tutor.",
		link: "/chat",
		icon: Bot
	},
	{
		title: "Quiz Generator",
		description: "Create AI-powered quizzes instantly.",
		link: "/generate-quiz",
		icon: Brain
	},
	{
		title: "PDF Summarizer",
		description: "Convert long notes into simple summaries.",
		link: "/summarizer",
		icon: FileText
	},
	{
		title: "Flashcards",
		description: "Generate smart revision cards.",
		link: "/flashcards",
		icon: Layers
	},
	{
		title: "Study Planner",
		description: "Create personalized study schedules.",
		link: "/planner",
		icon: CalendarDays
	},
	{
		title: "Answer Evaluation",
		description: "Get AI feedback on your answers.",
		link: "/evaluate",
		icon: ClipboardCheck
	},
	{
		title: "PDF Chat",
		description: "Chat with your uploaded documents.",
		link: "/pdf-chat",
		icon: MessageSquareText
	}
];
function Dashboard() {
	console.log("🚀 Dashboard component rendered");
	alert("Dashboard loaded");
	const navigate = useNavigate();
	const [stats, setStats] = (0, import_react.useState)({
		quizCount: 0,
		flashcardCount: 0,
		summaryCount: 0,
		plannerCount: 0
	});
	(0, import_react.useEffect)(() => {
		console.log("Dashboard useEffect started");
		const token = localStorage.getItem("token");
		console.log("Token:", token);
		if (!token) {
			console.log("No token found");
			navigate({ to: "/login" });
			return;
		}
		const fetchStats = async () => {
			console.log("Calling dashboard API...");
			try {
				const response = await fetch(`https://brainbloom-api.onrender.com/api/dashboard/stats`, { headers: { Authorization: `Bearer ${token}` } });
				console.log("Response status:", response.status);
				const data = await response.json();
				console.log("Dashboard data:", data);
				setStats(data);
			} catch (error) {
				console.error("Dashboard fetch error:", error);
			}
		};
		fetchStats();
	}, [navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-bold",
				children: "Welcome to BrainBloom AI 🌸"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: "Learn smarter with AI-powered quizzes, flashcards, study planners, PDF tools and your personal AI tutor."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border bg-card p-5 text-center shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm text-muted-foreground",
						children: "Quizzes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-3xl font-bold",
						children: stats.quizCount
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border bg-card p-5 text-center shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm text-muted-foreground",
						children: "Flashcards"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-3xl font-bold",
						children: stats.flashcardCount
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border bg-card p-5 text-center shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm text-muted-foreground",
						children: "Summaries"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-3xl font-bold",
						children: stats.summaryCount
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border bg-card p-5 text-center shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm text-muted-foreground",
						children: "Study Plans"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-3xl font-bold",
						children: stats.plannerCount
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: tools.map((tool) => {
				const Icon = tool.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: tool.link,
					className: "rounded-2xl border border-border/60 bg-card p-6 transition hover:-translate-y-2 hover:shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 place-items-center rounded-xl text-primary-foreground",
							style: { background: "var(--gradient-hero)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-lg font-semibold",
							children: tool.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: tool.description
						})
					]
				}, tool.title);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 rounded-2xl border bg-card p-6 shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold",
					children: "Continue Learning"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: "Jump back into your AI Tutor and continue your study journey."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/chat",
					className: "mt-5 inline-block rounded-full bg-primary px-6 py-3 text-primary-foreground",
					children: "Resume AI Tutor →"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 rounded-2xl border bg-card p-6 shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-bold",
				children: "💡 Daily Motivation"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 italic text-muted-foreground",
				children: "\"Small progress every day leads to big success.\""
			})]
		})
	] });
}
var $$splitComponentImporter$11 = () => import("./evaluate-CncqSjM_.mjs");
var Route$12 = createFileRoute("/evaluate")({
	head: () => ({ meta: [{ title: "AI Answer Evaluation — BrainBloom AI" }, {
		name: "description",
		content: "Evaluate answers using AI."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./explore-BYzLGqaz.mjs");
var Route$11 = createFileRoute("/explore")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./flashcards-6l0V6_s9.mjs");
var Route$10 = createFileRoute("/flashcards")({
	head: () => ({ meta: [{ title: "AI Flashcards — BrainBloom AI" }, {
		name: "description",
		content: "Generate AI-powered flashcards."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./generate-quiz-BeH2lfoO.mjs");
var Route$9 = createFileRoute("/generate-quiz")({
	head: () => ({ meta: [{ title: "Generate Quiz — BrainBloom AI" }, {
		name: "description",
		content: "Create custom quizzes powered by AI in seconds."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./learn-CIc66Y1K.mjs");
var Route$8 = createFileRoute("/learn")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./login-DAxDn05j.mjs");
var Route$7 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./pdf-chat-DGgeE92s.mjs");
var Route$6 = createFileRoute("/pdf-chat")({
	head: () => ({ meta: [{ title: "PDF Chat — BrainBloom AI" }, {
		name: "description",
		content: "Chat with your PDF using AI."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./planner-fMbDllID.mjs");
var Route$5 = createFileRoute("/planner")({
	head: () => ({ meta: [{ title: "AI Study Planner — BrainBloom AI" }, {
		name: "description",
		content: "Generate personalized AI-powered study plans with BrainBloom AI.."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./quiz-Ck5rrNYD.mjs");
var Route$4 = createFileRoute("/quiz")({
	head: () => ({ meta: [{ title: "Quiz — BrainBloom AI" }, {
		name: "description",
		content: "Take your AI-generated quiz."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./results-30gkEytx.mjs");
var Route$3 = createFileRoute("/results")({
	head: () => ({ meta: [{ title: "Results — BrainBloom AI" }, {
		name: "description",
		content: "See your quiz results and review answers."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./signup-DlQiw9An.mjs");
var Route$2 = createFileRoute("/signup")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var BASE_URL = "";
var Route$1 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		"/",
		"/learn",
		"/generate-quiz",
		"/quiz",
		"/results",
		"/chat"
	].map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter = () => import("./summarizer-VR9vbY3J.mjs");
var Route = createFileRoute("/summarizer")({
	head: () => ({ meta: [{ title: "PDF Summarizer — BrainBloom AI" }, {
		name: "description",
		content: "Summarize study PDFs using AI."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$15.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$16
	}),
	ChatRoute: Route$14.update({
		id: "/chat",
		path: "/chat",
		getParentRoute: () => Route$16
	}),
	DashboardRoute: Route$13.update({
		id: "/dashboard",
		path: "/dashboard",
		getParentRoute: () => Route$16
	}),
	EvaluateRoute: Route$12.update({
		id: "/evaluate",
		path: "/evaluate",
		getParentRoute: () => Route$16
	}),
	ExploreRoute: Route$11.update({
		id: "/explore",
		path: "/explore",
		getParentRoute: () => Route$16
	}),
	FlashcardsRoute: Route$10.update({
		id: "/flashcards",
		path: "/flashcards",
		getParentRoute: () => Route$16
	}),
	GenerateQuizRoute: Route$9.update({
		id: "/generate-quiz",
		path: "/generate-quiz",
		getParentRoute: () => Route$16
	}),
	LearnRoute: Route$8.update({
		id: "/learn",
		path: "/learn",
		getParentRoute: () => Route$16
	}),
	LoginRoute: Route$7.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$16
	}),
	PdfChatRoute: Route$6.update({
		id: "/pdf-chat",
		path: "/pdf-chat",
		getParentRoute: () => Route$16
	}),
	PlannerRoute: Route$5.update({
		id: "/planner",
		path: "/planner",
		getParentRoute: () => Route$16
	}),
	QuizRoute: Route$4.update({
		id: "/quiz",
		path: "/quiz",
		getParentRoute: () => Route$16
	}),
	ResultsRoute: Route$3.update({
		id: "/results",
		path: "/results",
		getParentRoute: () => Route$16
	}),
	SignupRoute: Route$2.update({
		id: "/signup",
		path: "/signup",
		getParentRoute: () => Route$16
	}),
	SitemapDotxmlRoute: Route$1.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$16
	}),
	SummarizerRoute: Route.update({
		id: "/summarizer",
		path: "/summarizer",
		getParentRoute: () => Route$16
	})
};
var routeTree = Route$16._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
