import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";
import { Context } from "./Context/Context.tsx";

ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
).render(
	<React.StrictMode>
		<Context>
			<App />
		</Context>
	</React.StrictMode>
);
