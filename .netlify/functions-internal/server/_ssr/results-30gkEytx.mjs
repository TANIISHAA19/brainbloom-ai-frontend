import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { t as PageShell } from "./Shared-DnrC8IIL.mjs";
import { b as CircleX, g as House, k as BookOpen, l as RotateCcw, x as CircleCheck } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/results-30gkEytx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ResultsPage() {
	const [quiz, setQuiz] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const savedQuiz = localStorage.getItem("generatedQuiz");
		if (savedQuiz) try {
			setQuiz(JSON.parse(savedQuiz));
		} catch (error) {
			console.error("Quiz loading error:", error);
		}
	}, []);
	const answers = (0, import_react.useMemo)(() => {
		if (typeof window === "undefined") return {};
		try {
			return JSON.parse(sessionStorage.getItem("qg_answers") || "{}");
		} catch {
			return {};
		}
	}, []);
	if (quiz.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-center mt-10",
		children: "No quiz found. Please generate a quiz first."
	}) });
	const total = quiz.length;
	const correct = quiz.filter((q, index) => {
		const selectedIndex = answers[index];
		if (selectedIndex === void 0) return false;
		return q.options[selectedIndex] === q.answer;
	}).length;
	const incorrect = total - correct;
	const accuracy = Math.round(correct / total * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border/60 bg-card p-8 text-center",
				style: { boxShadow: "var(--shadow-soft)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold sm:text-3xl",
						children: "Your Results"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted-foreground",
						children: "Here's how you performed."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid grid-cols-3 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Score",
								value: `${correct}/${total}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Correct",
								value: String(correct),
								tone: "good"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Incorrect",
								value: String(incorrect),
								tone: "bad"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 text-4xl font-bold",
						children: [accuracy, "%"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground",
						children: "Accuracy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-8 max-w-xl text-sm text-muted-foreground",
						children: accuracy >= 80 ? "Outstanding! You've mastered this topic." : accuracy >= 50 ? "Nice work — a bit more practice and you're there." : "Keep going — review the questions and try again."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/quiz",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									className: "rounded-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-2 h-4 w-4" }), "Retry Quiz"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/learn",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									className: "rounded-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "mr-2 h-4 w-4" }), "Learn More"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									className: "rounded-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "mr-2 h-4 w-4" }), "Back Home"]
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 text-xl font-bold",
				children: "Question Review"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-4",
				children: quiz.map((q, index) => {
					const selectedIndex = answers[index];
					const selectedAnswer = selectedIndex !== void 0 ? q.options[selectedIndex] : "Not answered";
					const isCorrect = selectedAnswer === q.answer;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl border border-border/60 bg-card p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [isCorrect ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mt-1 h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs font-semibold uppercase text-muted-foreground",
										children: ["Q", index + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium",
										children: q.question
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Your answer:"
											}),
											" ",
											selectedAnswer
										]
									}),
									!isCorrect && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-sm mt-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Correct:"
											}),
											" ",
											q.answer
										]
									})
								]
							})]
						})
					}, index);
				})
			})
		]
	}) });
}
function Stat({ label, value, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border/60 bg-background px-5 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: tone === "good" ? "text-2xl font-bold text-primary" : tone === "bad" ? "text-2xl font-bold text-destructive" : "text-2xl font-bold",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs text-muted-foreground",
			children: label
		})]
	});
}
//#endregion
export { ResultsPage as component };
