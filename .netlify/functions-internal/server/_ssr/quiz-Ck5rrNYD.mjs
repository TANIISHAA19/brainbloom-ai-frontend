import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as cn, t as Button } from "./button-BpE9Czok.mjs";
import { n as ProgressBar, t as PageShell } from "./Shared-DnrC8IIL.mjs";
import { A as ArrowRight, j as ArrowLeft, x as CircleCheck } from "../_libs/lucide-react.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz-Ck5rrNYD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function QuizPage() {
	const navigate = useNavigate();
	const [idx, setIdx] = (0, import_react.useState)(0);
	const [answers, setAnswers] = (0, import_react.useState)({});
	const [quiz, setQuiz] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const savedQuiz = localStorage.getItem("generatedQuiz");
		if (savedQuiz) try {
			const parsedQuiz = JSON.parse(savedQuiz);
			setQuiz(parsedQuiz);
		} catch (error) {
			console.error("Quiz parsing error:", error);
		}
	}, []);
	const q = quiz[idx];
	if (!q) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-center mt-10",
		children: "No quiz found. Please generate a quiz first."
	}) });
	const total = quiz.length;
	const progress = (idx + 1) / total * 100;
	const selected = answers[idx];
	const setAnswer = (i) => setAnswers((a) => ({
		...a,
		[idx]: i
	}));
	const submit = () => {
		sessionStorage.setItem("qg_answers", JSON.stringify(answers));
		navigate({ to: "/results" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"Question ",
					idx + 1,
					" of ",
					total
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round(progress), "%"] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, { value: progress }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-2xl border border-border/60 bg-card p-6 sm:p-8",
				style: { boxShadow: "var(--shadow-soft)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs font-semibold uppercase tracking-wider text-primary",
						children: ["Question ", idx + 1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-xl font-semibold sm:text-2xl",
						children: q.question
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3",
						children: q.options.map((opt, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setAnswer(i),
							className: cn("flex items-center gap-3 rounded-xl border p-4 text-left transition-all hover:border-primary/60 hover:bg-accent", selected === i ? "border-primary bg-accent" : "border-border bg-background"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid h-8 w-8 place-items-center rounded-full border text-sm font-semibold", selected === i ? "border-primary bg-primary text-primary-foreground" : "border-border"),
									children: String.fromCharCode(65 + i)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm sm:text-base",
									children: opt
								}),
								selected === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "ml-auto h-5 w-5 text-primary" })
							]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: () => setIdx((i) => Math.max(0, i - 1)),
							disabled: idx === 0,
							className: "rounded-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-1 h-4 w-4" }), " Previous"]
						}), idx < total - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => setIdx((i) => Math.min(total - 1, i + 1)),
							className: "rounded-full",
							children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: submit,
							className: "rounded-full",
							children: "Submit Quiz"
						})]
					})
				]
			})
		]
	}) });
}
//#endregion
export { QuizPage as component };
