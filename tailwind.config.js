/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				bg_color: "#0F1923",
				green: "#00B574",
				red: "#F12C4C",
				gray: "#1D2730",
				text: "#BCBFC7",
				border: "#323B45",
			},
		},
	},
	plugins: [],
};
