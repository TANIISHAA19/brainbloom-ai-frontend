import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { D as Brain } from "../_libs/lucide-react.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-DAxDn05j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	async function handleLogin(e) {
		e.preventDefault();
		setLoading(true);
		setError("");
		try {
			const response = await fetch(`https://brainbloom-api.onrender.com/api/auth/login`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email,
					password
				})
			});
			const data = await response.json();
			console.log("Login response:", data);
			console.log("Token:", data.token);
			if (!response.ok) throw new Error(data.message || "Login failed");
			localStorage.setItem("token", data.token);
			localStorage.setItem("user", JSON.stringify(data.user));
			navigate({ to: "/dashboard" });
		} catch (err) {
			setError(err.message || "Something went wrong");
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-3xl bg-white p-8 shadow-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-8 w-8" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold text-center",
					children: "Welcome to BrainBloom"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-gray-500 mt-2",
					children: "Login to continue your AI learning journey"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleLogin,
					className: "mt-8 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							placeholder: "Email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							className: "w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							placeholder: "Password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							className: "w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400",
							required: true
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-red-500 text-center",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: loading,
							className: "\r\n              w-full\r\n              rounded-xl\r\n              bg-gradient-to-r\r\n              from-pink-500\r\n              to-purple-600\r\n              py-3\r\n              text-white\r\n              font-semibold\r\n              disabled:opacity-60\r\n            ",
							children: loading ? "Logging in..." : "Login"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-center text-sm text-gray-500",
					children: [
						"New user?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/signup",
							className: "text-purple-600 font-semibold",
							children: "Create an account"
						})
					]
				})
			]
		})
	});
}
//#endregion
export { LoginPage as component };
