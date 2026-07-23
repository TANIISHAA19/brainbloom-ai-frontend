import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { A as ArrowRight, D as Brain, E as CalendarDays, _ as Github, a as Twitter, f as MessageCircle, k as BookOpen, m as Linkedin, n as WandSparkles, o as Star, p as LogIn, r as User, s as Sparkles, t as X, v as FileText, y as ClipboardCheck } from "../_libs/lucide-react.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BrainBloomLogo } from "./BrainBloomLogo-CtJx2iFB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Co8LThSN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	const features = [
		{
			icon: ClipboardCheck,
			title: "AI Quiz",
			position: "top-8 left-4"
		},
		{
			icon: Brain,
			title: "Flashcards",
			position: "top-24 right-0"
		},
		{
			icon: FileText,
			title: "PDF Intelligence",
			position: "bottom-32 left-0"
		},
		{
			icon: BookOpen,
			title: "AI Tutor",
			position: "bottom-12 right-8"
		},
		{
			icon: WandSparkles,
			title: "AI Generator",
			position: "top-1/2 right-0"
		},
		{
			icon: Star,
			title: "Evaluation",
			position: "top-1/2 left-0"
		}
	];
	const scrollToTools = () => {
		document.getElementById("ai-tools")?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "\r\n      relative\r\n      overflow-hidden\r\n      bg-gradient-to-b\r\n      from-pink-50\r\n      via-white\r\n      to-purple-50\r\n      ",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "\r\n        absolute\r\n        -top-40\r\n        left-1/2\r\n        h-[550px]\r\n        w-[550px]\r\n        -translate-x-1/2\r\n        rounded-full\r\n        bg-pink-200/40\r\n        blur-3xl\r\n        " }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "\r\n        relative\r\n        mx-auto\r\n        flex\r\n        max-w-7xl\r\n        flex-col\r\n        items-center\r\n        gap-16\r\n        px-6\r\n        pt-32\r\n        pb-24\r\n        lg:flex-row\r\n        lg:justify-between\r\n        ",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "\r\n            mb-6\r\n            inline-flex\r\n            items-center\r\n            gap-2\r\n            rounded-full\r\n            border\r\n            border-pink-200\r\n            bg-white\r\n            px-5\r\n            py-2\r\n            shadow-sm\r\n            ",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-pink-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold text-pink-600",
							children: "BrainBloom AI Learning Platform"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "\r\n            text-5xl\r\n            font-extrabold\r\n            leading-tight\r\n            text-slate-900\r\n            sm:text-6xl\r\n            ",
						children: [
							"Learn Smarter.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "\r\n              bg-gradient-to-r\r\n              from-pink-500\r\n              via-purple-500\r\n              to-indigo-500\r\n              bg-clip-text\r\n              text-transparent\r\n              ",
								children: "Bloom Faster."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "\r\n            mt-6\r\n            text-lg\r\n            leading-8\r\n            text-slate-600\r\n          ",
						children: "Your AI-powered study companion that transforms PDFs, notes, and subjects into quizzes, flashcards, summaries, evaluations, and personalized learning."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							onClick: scrollToTools,
							className: "\r\n              rounded-full\r\n              bg-gradient-to-r\r\n              from-pink-500\r\n              to-purple-600\r\n              px-7\r\n              shadow-lg\r\n              ",
							children: "Start Learning"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/explore",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								variant: "outline",
								className: "rounded-full px-7",
								children: ["Explore Features", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "\r\n          relative\r\n          flex\r\n          h-[420px]\r\n          w-[420px]\r\n          items-center\r\n          justify-center\r\n          sm:h-[480px]\r\n          sm:w-[480px]\r\n          ",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "\r\n            absolute\r\n            h-72\r\n            w-72\r\n            rounded-full\r\n            border\r\n            border-pink-200\r\n          " }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "\r\n            absolute\r\n            h-96\r\n            w-96\r\n            rounded-full\r\n            border\r\n            border-purple-100\r\n          " }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "\r\n            z-10\r\n            flex\r\n            h-32\r\n            w-32\r\n            items-center\r\n            justify-center\r\n            rounded-full\r\n            bg-white\r\n            shadow-2xl\r\n          ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainBloomLogo, { size: 90 })
					}),
					features.map((item, index) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `
                absolute
                ${item.position}
                flex
                items-center
                gap-2
                rounded-2xl
                border
                bg-white
                px-4
                py-3
                shadow-lg
                `,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-pink-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "\r\n                  text-sm\r\n                  font-semibold\r\n                  text-slate-700\r\n                ",
								children: item.title
							})]
						}, index);
					})
				]
			})]
		})]
	});
}
function LoginModal({ open, onClose, onGuest }) {
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "absolute right-5 top-5 text-gray-500 hover:text-black",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 22 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { size: 32 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 text-center text-3xl font-bold",
					children: "Welcome to BrainBloom"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center text-gray-500",
					children: "Save your learning journey or continue as a guest."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: onGuest,
						className: "flex w-full items-center justify-center gap-2 rounded-xl border border-pink-500 py-3 font-semibold text-pink-600 transition hover:bg-pink-50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 20 }), "Continue as Guest"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/login",
						onClick: onClose,
						className: "flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 py-3 font-semibold text-white transition hover:opacity-90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { size: 20 }), "Login / Sign Up"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center text-sm text-gray-500",
					children: "Guest mode won't save your quizzes, flashcards or study history."
				})
			]
		})
	});
}
var features = [
	{
		icon: ClipboardCheck,
		title: "AI Quiz Generator",
		description: "Generate smart quizzes from topics, notes, and study material.",
		route: "/generate-quiz"
	},
	{
		icon: Brain,
		title: "AI Flashcards",
		description: "Create revision flashcards from topics or uploaded material.",
		route: "/flashcards"
	},
	{
		icon: FileText,
		title: "PDF Intelligence",
		description: "Chat with PDFs, summarize notes, and understand faster.",
		route: "/pdf-chat"
	},
	{
		icon: MessageCircle,
		title: "AI Tutor",
		description: "Ask questions and get personalized explanations.",
		route: "/chat"
	},
	{
		icon: Sparkles,
		title: "AI Evaluation",
		description: "Submit answers and receive AI feedback and scores.",
		route: "/evaluate"
	},
	{
		icon: CalendarDays,
		title: "AI Study Planner",
		description: "Create personalized AI-powered study plans for your exams and goals.",
		route: "/planner"
	}
];
function FeatureTokens() {
	const navigate = useNavigate();
	const [selectedRoute, setSelectedRoute] = (0, import_react.useState)("");
	const [showLoginModal, setShowLoginModal] = (0, import_react.useState)(false);
	const handleFeatureClick = (route) => {
		setSelectedRoute(route);
		setShowLoginModal(true);
	};
	const continueAsGuest = () => {
		setShowLoginModal(false);
		navigate({ to: selectedRoute });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "ai-tools",
		className: "\r\n      bg-white\r\n      px-6\r\n      py-24\r\n      ",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "\r\n        mx-auto\r\n        max-w-6xl\r\n      ",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "\r\n            text-4xl\r\n            font-bold\r\n            text-slate-900\r\n          ",
					children: [
						"Everything You Need To",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "\r\n              bg-gradient-to-r\r\n              from-pink-500\r\n              to-purple-600\r\n              bg-clip-text\r\n              text-transparent\r\n            ",
							children: "Learn Better"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "\r\n            mt-4\r\n            text-slate-600\r\n          ",
					children: "Choose a learning tool and start your AI-powered study journey."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "\r\n          grid\r\n          gap-8\r\n          md:grid-cols-2\r\n          lg:grid-cols-3\r\n        ",
				children: features.map((feature, index) => {
					const Icon = feature.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => handleFeatureClick(feature.route),
						className: "\r\n                text-left\r\n                rounded-3xl\r\n                border\r\n                bg-white\r\n                p-8\r\n                shadow-md\r\n                transition\r\n                hover:-translate-y-2\r\n                hover:shadow-xl\r\n                ",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "\r\n                  flex\r\n                  h-14\r\n                  w-14\r\n                  items-center\r\n                  justify-center\r\n                  rounded-2xl\r\n                  bg-gradient-to-br\r\n                  from-pink-500\r\n                  to-purple-600\r\n                  text-white\r\n                ",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 28 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "\r\n                  mt-6\r\n                  text-xl\r\n                  font-bold\r\n                  text-slate-900\r\n                ",
								children: feature.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "\r\n                  mt-3\r\n                  text-sm\r\n                  text-slate-600\r\n                ",
								children: feature.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "\r\n                  mt-6\r\n                  text-sm\r\n                  font-semibold\r\n                  text-pink-600\r\n                ",
								children: "Start Learning →"
							})
						]
					}, index);
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginModal, {
			open: showLoginModal,
			onClose: () => setShowLoginModal(false),
			onGuest: continueAsGuest
		})]
	});
}
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-white px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-4xl font-bold text-slate-900",
					children: [
						"How BrainBloom",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent",
							children: "Works"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-2xl text-slate-600",
					children: "A simple AI-powered learning journey designed to help you study smarter and achieve more."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					{
						number: "01",
						title: "Choose Your Subject",
						description: "Select any topic you want to learn and let BrainBloom personalize your learning journey."
					},
					{
						number: "02",
						title: "Learn With AI",
						description: "Get explanations, summaries, and answers from your AI study companion."
					},
					{
						number: "03",
						title: "Practice & Improve",
						description: "Generate quizzes, revise with flashcards, and track your progress."
					}
				].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-pink-100 bg-white p-8 shadow-lg transition hover:-translate-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 font-bold text-white",
							children: step.number
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-3 text-xl font-semibold text-slate-900",
							children: step.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "leading-relaxed text-slate-600",
							children: step.description
						})
					]
				}, step.number))
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-to-b from-pink-50 to-white px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-4xl font-bold text-slate-900",
					children: [
						"What Students Say About",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent",
							children: "BrainBloom"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-2xl text-slate-600",
					children: "Join students who are learning smarter with AI-powered tools."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					{
						name: "Ananya Sharma",
						role: "CSE Student",
						review: "BrainBloom helped me understand difficult concepts faster and made my exam preparation more organized."
					},
					{
						name: "Rahul Verma",
						role: "Engineering Student",
						review: "The AI quiz generator and flashcards made revision much easier. It feels like having a personal tutor."
					},
					{
						name: "Priya Singh",
						role: "University Student",
						review: "I love how I can chat with my PDFs and turn my notes into useful learning material."
					}
				].map((student) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-pink-100 bg-white p-8 shadow-lg transition hover:-translate-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-5 flex gap-1 text-yellow-400",
							children: "★ ★ ★ ★ ★"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "leading-relaxed text-slate-600",
							children: [
								"\"",
								student.review,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 font-bold text-white",
								children: student.name.charAt(0)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-slate-900",
								children: student.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-slate-500",
								children: student.role
							})] })]
						})
					]
				}, student.name))
			})]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden px-6 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-4xl rounded-3xl bg-white/10 px-8 py-16 text-center backdrop-blur-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl font-bold text-white md:text-5xl",
						children: "Ready to Bloom Your Knowledge?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-2xl text-lg text-white/90",
						children: "Start learning smarter with your AI-powered study companion. Explore concepts, practice with quizzes, and achieve your goals."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "\r\n            rounded-full\r\n            bg-white\r\n            px-8\r\n            py-3\r\n            font-semibold\r\n            text-purple-600\r\n            shadow-lg\r\n            transition\r\n            hover:scale-105\r\n            ",
							children: "Start Learning"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "\r\n            rounded-full\r\n            border\r\n            border-white/50\r\n            px-8\r\n            py-3\r\n            font-semibold\r\n            text-white\r\n            transition\r\n            hover:bg-white/10\r\n            ",
							children: "Explore Features"
						})]
					})
				]
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-slate-950 px-6 py-16 text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-600",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-6 w-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl font-bold",
						children: "BrainBloom AI"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-6 text-slate-400",
					children: "Your AI-powered learning companion for smarter study, personalized practice, and better results."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-4 font-semibold",
					children: "Product"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm text-slate-400",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/learn",
							className: "hover:text-pink-400",
							children: "AI Tutor"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/generate-quiz",
							className: "hover:text-pink-400",
							children: "Quiz Generator"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/flashcards",
							className: "hover:text-pink-400",
							children: "Flashcards"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pdf-chat",
							className: "hover:text-pink-400",
							children: "PDF Chat"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-4 font-semibold",
					children: "Company"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm text-slate-400",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "hover:text-pink-400",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "hover:text-pink-400",
							children: "Features"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "hover:text-pink-400",
							children: "Contact"
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-4 font-semibold",
					children: "Follow"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-5 w-5 text-slate-400 hover:text-pink-400" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "h-5 w-5 text-slate-400 hover:text-pink-400" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-5 w-5 text-slate-400 hover:text-pink-400" })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-slate-500",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" BrainBloom AI. All rights reserved."
			]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureTokens, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
