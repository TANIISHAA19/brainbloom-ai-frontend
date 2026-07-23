import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { D as Brain, E as CalendarDays, k as BookOpen, s as Sparkles, v as FileText, y as ClipboardCheck } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn-CIc66Y1K.js
var import_jsx_runtime = require_jsx_runtime();
var modules = [
	{
		title: "AI Tutor",
		description: "Understand concepts with personalized AI explanations.",
		icon: Brain,
		route: "/chat"
	},
	{
		title: "Quiz Generator",
		description: "Create quizzes and test your understanding.",
		icon: ClipboardCheck,
		route: "/generate-quiz"
	},
	{
		title: "Flashcards",
		description: "Revise faster with smart AI flashcards.",
		icon: BookOpen,
		route: "/flashcards"
	},
	{
		title: "PDF Chat",
		description: "Upload notes and ask questions from your documents.",
		icon: FileText,
		route: "/pdf-chat"
	},
	{
		title: "Summarizer",
		description: "Turn lengthy notes into simple summaries.",
		icon: Sparkles,
		route: "/summarizer"
	},
	{
		title: "Study Planner",
		description: "Plan your preparation with an AI schedule.",
		icon: CalendarDays,
		route: "/planner"
	}
];
function LearnPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50 px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-5xl font-extrabold text-slate-900",
					children: [
						"How do you want to",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent",
							children: "learn today?"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg text-slate-600",
					children: "Choose your learning style and let BrainBloom guide you."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
				children: modules.map((module) => {
					const Icon = module.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: module.route,
						className: "\r\n                group\r\n                rounded-3xl\r\n                border\r\n                border-pink-100\r\n                bg-white/80\r\n                p-8\r\n                shadow-lg\r\n                backdrop-blur-xl\r\n                transition\r\n                hover:-translate-y-2\r\n                ",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "\r\n                  mb-6\r\n                  flex\r\n                  h-14\r\n                  w-14\r\n                  items-center\r\n                  justify-center\r\n                  rounded-2xl\r\n                  bg-gradient-to-br\r\n                  from-pink-500\r\n                  to-purple-600\r\n                  text-white\r\n                ",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 28 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold text-slate-900",
								children: module.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-slate-600",
								children: module.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 font-semibold text-pink-600",
								children: "Start →"
							})
						]
					}, module.title);
				})
			})]
		})
	});
}
//#endregion
export { LearnPage as component };
