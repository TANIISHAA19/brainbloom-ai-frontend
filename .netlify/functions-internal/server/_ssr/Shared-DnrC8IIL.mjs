import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Shared-DnrC8IIL.js
var import_jsx_runtime = require_jsx_runtime();
function ProgressBar({ value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-2 w-full overflow-hidden rounded-full bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full rounded-full transition-all duration-500",
			style: {
				width: `${value}%`,
				background: "var(--gradient-hero)"
			}
		})
	});
}
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto w-full max-w-7xl px-4 py-10 sm:px-6",
		children
	});
}
//#endregion
export { ProgressBar as n, PageShell as t };
