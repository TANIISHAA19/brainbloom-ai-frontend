import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-BpE9Czok.mjs";
import { t as PageShell } from "./Shared-DnrC8IIL.mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/planner-fMbDllID.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PlannerPage() {
	const [subject, setSubject] = (0, import_react.useState)("");
	const [duration, setDuration] = (0, import_react.useState)("");
	const [level, setLevel] = (0, import_react.useState)("Beginner");
	const [plan, setPlan] = (0, import_react.useState)({});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const generatePlan = async () => {
		if (!subject || !duration || !level) {
			toast.error("Please fill all fields");
			return;
		}
		setLoading(true);
		try {
			const response = await fetch(`https://brainbloom-api.onrender.com/api/planner`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					subject,
					duration,
					level
				})
			});
			const data = await response.json();
			if (!response.ok) throw new Error(data.error || "Failed to generate plan");
			setPlan(data.plan);
			toast.success("Study plan generated!");
		} catch (error) {
			console.error(error);
			toast.error("Planner failed");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-bold",
				children: "AI Study Planner"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Generate a personalized study roadmap with AI."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-2xl border p-6 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Subject (e.g. DBMS)",
						value: subject,
						onChange: (e) => setSubject(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Duration (e.g. 4 weeks)",
						value: duration,
						onChange: (e) => setDuration(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Level (Beginner/Intermediate/Advanced)",
						value: level,
						onChange: (e) => setLevel(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: generatePlan,
						disabled: loading,
						children: loading ? "Generating..." : "Generate Study Plan"
					})
				]
			}),
			Object.keys(plan).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-5",
				children: Object.entries(plan).map(([week, topics]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold",
						children: week
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 list-disc pl-5",
						children: topics.map((topic, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: topic }, index))
					})]
				}, week))
			})
		]
	}) });
}
//#endregion
export { PlannerPage as component };
