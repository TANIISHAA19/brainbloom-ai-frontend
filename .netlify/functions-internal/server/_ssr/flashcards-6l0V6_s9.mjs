import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as cn, t as Button } from "./button-BpE9Czok.mjs";
import { t as PageShell } from "./Shared-DnrC8IIL.mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { D as Brain, i as Upload, s as Sparkles, v as FileText } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/flashcards-6l0V6_s9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FlashcardsPage() {
	const [mode, setMode] = (0, import_react.useState)("topic");
	const [topic, setTopic] = (0, import_react.useState)("");
	const [file, setFile] = (0, import_react.useState)(null);
	const [cards, setCards] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [flipped, setFlipped] = (0, import_react.useState)(null);
	const generateCards = async () => {
		if (mode === "upload") {
			if (!file) {
				toast.error("Please upload a PDF or notes file");
				return;
			}
			setLoading(true);
			try {
				const formData = new FormData();
				formData.append("pdf", file);
				const token = localStorage.getItem("token");
				const response = await fetch("fetch(`${import.meta.env.VITE_API_URL}/api/flashcards/upload", {
					method: "POST",
					headers: { Authorization: `Bearer ${token}` },
					body: formData
				});
				const data = await response.json();
				localStorage.setItem("token", data.token);
				if (!response.ok) throw new Error(data.error || "PDF flashcard generation failed");
				setCards(data.flashcards);
				toast.success("Flashcards generated from PDF!");
			} catch (error) {
				console.error(error);
				toast.error("PDF flashcard generation failed");
			} finally {
				setLoading(false);
			}
			return;
		}
		if (!topic) {
			toast.error("Please enter a topic");
			return;
		}
		setLoading(true);
		try {
			const token = localStorage.getItem("token");
			const response = await fetch("fetch(`${import.meta.env.VITE_API_URL}/api/flashcards", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`
				},
				body: JSON.stringify({ topic })
			});
			const data = await response.json();
			if (!response.ok) throw new Error(data.error || "Failed to generate flashcards");
			setCards(data.flashcards);
			toast.success("Flashcards generated!");
		} catch (error) {
			console.error(error);
			toast.error("Flashcard generation failed");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "\n        rounded-3xl\n        bg-gradient-to-br\n        from-purple-50\n        via-white\n        to-pink-50\n        p-8\n        shadow-xl\n      ",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "\n            mx-auto\n            flex\n            h-16\n            w-16\n            items-center\n            justify-center\n            rounded-2xl\n            bg-gradient-to-br\n            from-purple-500\n            to-pink-600\n            text-white\n          ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-8 w-8" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "\n            mt-6\n            text-4xl\n            font-bold\n            text-slate-900\n          ",
						children: "AI Flashcard Generator"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "\n            mt-3\n            text-slate-600\n          ",
						children: "Turn topics and study material into smart revision cards."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "\n          mx-auto\n          mt-10\n          flex\n          max-w-xl\n          gap-4\n        ",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setMode("topic"),
					className: `
              flex-1
              rounded-2xl
              border
              p-4
              font-semibold
              transition
              ${mode === "topic" ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white" : "bg-white"}
            `,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "mx-auto mb-2" }), "Topic"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setMode("upload"),
					className: `
              flex-1
              rounded-2xl
              border
              p-4
              font-semibold
              transition
              ${mode === "upload" ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white" : "bg-white"}
            `,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "mx-auto mb-2" }), "Upload Material"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "\n          mx-auto\n          mt-8\n          max-w-3xl\n          rounded-3xl\n          bg-white\n          p-6\n          shadow-lg\n        ",
				children: [mode === "topic" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Example: Operating Systems",
					value: topic,
					onChange: (e) => setTopic(e.target.value)
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "\n                flex\n                cursor-pointer\n                flex-col\n                items-center\n                rounded-2xl\n                border-2\n                border-dashed\n                p-8\n              ",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "\n                  h-10\n                  w-10\n                  text-purple-500\n                " }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "\n                  mt-3\n                  font-semibold\n                ",
							children: file ? file.name : "Upload PDF or Notes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							className: "hidden",
							onChange: (e) => setFile(e.target.files?.[0] || null)
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: generateCards,
					disabled: loading,
					className: "\n              mt-5\n              w-full\n              rounded-full\n              bg-gradient-to-r\n              from-purple-500\n              to-pink-600\n            ",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-2" }), loading ? "Generating..." : "Generate Flashcards"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "\n    mt-12\n    grid\n    gap-8\n    md:grid-cols-2\n  ",
				children: cards.map((card, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "\n    group\n    h-64\n    cursor-pointer\n    [perspective:1000px]\n  ",
					onClick: () => setFlipped(flipped === index ? null : index),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn(`
      relative
      h-full
      w-full
      transition-transform
      duration-700
      [transform-style:preserve-3d]
      `, flipped === index && "[transform:rotateY(180deg)]"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "\n        absolute\n        inset-0\n        rounded-3xl\n        bg-slate-900\n        p-8\n        text-white\n        shadow-xl\n        [backface-visibility:hidden]\n      ",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "\n        text-sm\n        font-semibold\n        uppercase\n        tracking-wider\n        text-purple-300\n      ",
									children: "Question"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "\n        mt-6\n        text-xl\n        font-bold\n      ",
									children: card.question
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "\n        absolute\n        bottom-8\n        text-sm\n        opacity-70\n      ",
									children: "Click to reveal answer"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "\n        absolute\n        inset-0\n        rounded-3xl\n        bg-pink-50\n        p-8\n        shadow-xl\n        [transform:rotateY(180deg)]\n        [backface-visibility:hidden]\n      ",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "\n        text-sm\n        font-semibold\n        uppercase\n        tracking-wider\n        text-purple-600\n      ",
									children: "Answer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "\n        mt-6\n        text-xl\n        font-bold\n        text-slate-800\n      ",
									children: card.answer
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "\n        absolute\n        bottom-8\n        text-sm\n        text-slate-500\n      ",
									children: "Click to see question"
								})
							]
						})]
					})
				}, index))
			})
		]
	}) });
}
//#endregion
export { FlashcardsPage as component };
