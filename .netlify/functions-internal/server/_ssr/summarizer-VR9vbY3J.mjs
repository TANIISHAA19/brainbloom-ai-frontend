import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { t as PageShell } from "./Shared-DnrC8IIL.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/summarizer-VR9vbY3J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SummarizerPage() {
	const [file, setFile] = (0, import_react.useState)(null);
	const [summary, setSummary] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const summarize = async () => {
		if (!file) {
			toast.error("Please upload a PDF");
			return;
		}
		setLoading(true);
		try {
			const formData = new FormData();
			formData.append("pdf", file);
			const response = await fetch(`https://brainbloom-api.onrender.com/api/summarize`, {
				method: "POST",
				body: formData
			});
			const data = await response.json();
			if (!response.ok) throw new Error(data.error || "Summary failed");
			setSummary(data.summary);
			toast.success("PDF summarized!");
		} catch (error) {
			console.error(error);
			toast.error("Failed to summarize PDF");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-bold",
				children: "AI PDF Summarizer"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Upload your notes and get an AI-generated summary."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-2xl border p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						accept: "application/pdf",
						onChange: (e) => setFile(e.target.files?.[0] || null)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: summarize,
						disabled: loading,
						className: "mt-5",
						children: loading ? "Summarizing..." : "Generate Summary"
					}),
					summary && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-xl border p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold text-xl",
							children: "Summary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 whitespace-pre-wrap",
							children: summary
						})]
					})
				]
			})
		]
	}) });
}
//#endregion
export { SummarizerPage as component };
