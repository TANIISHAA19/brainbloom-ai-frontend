import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BrainBloomLogo-CtJx2iFB.js
var import_jsx_runtime = require_jsx_runtime();
function BrainBloomLogo({ size = 45 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex items-center justify-center",
		style: {
			width: size,
			height: size
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					fontSize: size * .75,
					lineHeight: 1
				},
				children: "🧠"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute text-yellow-400",
				style: {
					top: -4,
					right: -2,
					fontSize: size * .28
				},
				children: "✨"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute text-pink-400",
				style: {
					bottom: 2,
					left: -3,
					fontSize: size * .18
				},
				children: "✦"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute text-purple-400",
				style: {
					top: size * .25,
					left: -5,
					fontSize: size * .15
				},
				children: "✧"
			})
		]
	});
}
//#endregion
export { BrainBloomLogo as t };
