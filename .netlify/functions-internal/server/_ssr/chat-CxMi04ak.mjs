import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as cn, t as Button } from "./button-BpE9Czok.mjs";
import { t as PageShell } from "./Shared-DnrC8IIL.mjs";
import { t as Input } from "./input-NvmijQlt.mjs";
import { O as Bot, c as Send, r as User } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat-CxMi04ak.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var suggestedPrompts = [
	"Explain Deadlock",
	"Explain Binary Search",
	"Summarize Operating System",
	"Generate Revision Notes"
];
function ChatPage() {
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [input, setInput] = (0, import_react.useState)("");
	const [typing, setTyping] = (0, import_react.useState)(false);
	const [sending, setSending] = (0, import_react.useState)(false);
	const endRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		endRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, typing]);
	const send = async (text) => {
		const content = (text ?? input).trim();
		if (!content || sending) return;
		const assistantId = Date.now() + 1;
		const now = (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		});
		setMessages((prev) => [
			...prev,
			{
				id: Date.now(),
				role: "user",
				content,
				time: now
			},
			{
				id: assistantId,
				role: "assistant",
				content: "",
				time: now
			}
		]);
		setInput("");
		setTyping(true);
		setSending(true);
		try {
			const response = await fetch(`https://brainbloom-api.onrender.com/api/chat`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ message: content })
			});
			if (!response.ok) throw new Error("Failed to get AI response.");
			if (!response.body) throw new Error("Readable stream not supported.");
			const reader = response.body.getReader();
			const decoder = new TextDecoder();
			let answer = "";
			let firstChunk = true;
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				if (firstChunk) {
					setTyping(false);
					firstChunk = false;
				}
				const chunk = decoder.decode(value, { stream: true });
				answer += chunk;
				setMessages((prev) => prev.map((msg) => msg.id === assistantId ? {
					...msg,
					content: answer
				} : msg));
			}
			setTyping(false);
		} catch (error) {
			console.error(error);
			setTyping(false);
			setMessages((prev) => prev.map((msg) => msg.id === assistantId ? {
				...msg,
				content: "Sorry, I couldn't connect to the AI server. Please try again."
			} : msg));
		} finally {
			setSending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-bold tracking-tight",
				children: "AI Tutor"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Ask questions, understand concepts, and learn faster with BrainBloom AI."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-[72vh] flex-col overflow-hidden rounded-3xl border border-border/60 bg-card",
			style: { boxShadow: "var(--shadow-soft)" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-5 overflow-y-auto p-6",
				children: [
					messages.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: suggestedPrompts.map((prompt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							className: "rounded-full",
							onClick: () => send(prompt),
							children: prompt
						}, prompt))
					}),
					messages.map((message) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("flex gap-3", message.role === "user" && "flex-row-reverse"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("grid h-10 w-10 shrink-0 place-items-center rounded-full", message.role === "user" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"),
							children: message.role === "user" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-[80%]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("rounded-3xl px-5 py-3 text-sm leading-7 shadow-sm", message.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"),
								children: message.content
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 px-2 text-[11px] text-muted-foreground",
								children: message.time
							})]
						})]
					}, message.id)),
					typing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 place-items-center rounded-full bg-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-3xl bg-secondary px-5 py-3 text-sm animate-pulse",
							children: "AI is typing..."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: endRef })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border/60 bg-background/60 p-4 backdrop-blur",
				children: [messages.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 flex flex-wrap gap-2",
					children: suggestedPrompts.map((prompt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "rounded-full",
						disabled: sending,
						onClick: () => send(prompt),
						children: prompt
					}, prompt))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						send();
					},
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: input,
						onChange: (e) => setInput(e.target.value),
						placeholder: "Ask BrainBloom AI anything...",
						className: "h-12 rounded-full",
						disabled: sending
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "icon",
						className: "h-12 w-12 rounded-full",
						disabled: sending || !input.trim(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-5 w-5" })
					})]
				})]
			})]
		})]
	}) });
}
//#endregion
export { ChatPage as component };
