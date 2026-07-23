import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { t as PageShell } from "./Shared-DnrC8IIL.mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { f as MessageCircle, i as Upload, s as Sparkles, v as FileText } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pdf-chat-DGgeE92s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PDFChatPage() {
	const [file, setFile] = (0, import_react.useState)(null);
	const [question, setQuestion] = (0, import_react.useState)("");
	const [answer, setAnswer] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const askPDF = async () => {
		if (!file || !question) {
			toast.error("Upload PDF and enter question");
			return;
		}
		setLoading(true);
		try {
			const formData = new FormData();
			formData.append("pdf", file);
			formData.append("question", question);
			const response = await fetch("fetch(`${import.meta.env.VITE_API_URL}/api/pdf-chat", {
				method: "POST",
				body: formData
			});
			const data = await response.json();
			if (!response.ok) throw new Error(data.error || "PDF chat failed");
			setAnswer(data.answer);
			toast.success("Answer generated!");
		} catch (error) {
			console.error(error);
			toast.error("Failed to chat with PDF");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "\n        rounded-3xl\n        bg-gradient-to-br\n        from-pink-50\n        via-white\n        to-purple-50\n        p-8\n        shadow-xl\n      ",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "\n            mx-auto\n            flex\n            h-16\n            w-16\n            items-center\n            justify-center\n            rounded-2xl\n            bg-gradient-to-br\n            from-pink-500\n            to-purple-600\n            text-white\n          ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-8 w-8" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "\n            mt-6\n            text-4xl\n            font-bold\n            text-slate-900\n          ",
						children: "Chat With Your PDF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "\n            mt-3\n            text-slate-600\n          ",
						children: "Upload your notes, books, or documents and learn with AI."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "\n          mx-auto\n          mt-10\n          max-w-3xl\n          rounded-3xl\n          bg-white\n          p-8\n          shadow-lg\n        ",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "\n            flex\n            cursor-pointer\n            flex-col\n            items-center\n            justify-center\n            rounded-3xl\n            border-2\n            border-dashed\n            border-purple-200\n            p-10\n            transition\n            hover:bg-purple-50\n          ",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "\n              h-10\n              w-10\n              text-purple-500\n            " }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "\n              mt-4\n              font-semibold\n              text-slate-800\n            ",
								children: file ? file.name : "Upload PDF file"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "\n              mt-2\n              text-sm\n              text-slate-500\n            ",
								children: "Click to select your study material"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: "application/pdf",
								className: "hidden",
								onChange: (e) => setFile(e.target.files?.[0] || null)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "\n              mb-2\n              block\n              text-sm\n              font-semibold\n              text-slate-700\n            ",
							children: "Ask your question"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "Example: Explain the main concepts from this PDF",
							value: question,
							onChange: (e) => setQuestion(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: askPDF,
						disabled: loading,
						className: "\n              mt-6\n              w-full\n              rounded-full\n              bg-gradient-to-r\n              from-pink-500\n              to-purple-600\n            ",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-2 h-4 w-4" }), loading ? "Thinking..." : "Ask AI"]
					})
				]
			}),
			answer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "\n            mx-auto\n            mt-8\n            max-w-3xl\n            rounded-3xl\n            bg-white\n            p-8\n            shadow-lg\n          ",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "\n              flex\n              items-center\n              gap-3\n            ",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "\n                text-purple-500\n              " }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "\n                text-xl\n                font-bold\n              ",
						children: "AI Answer"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "\n              mt-5\n              whitespace-pre-wrap\n              leading-7\n              text-slate-700\n            ",
					children: answer
				})]
			})
		]
	}) });
}
//#endregion
export { PDFChatPage as component };
