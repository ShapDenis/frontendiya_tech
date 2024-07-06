/** @type {import("tailwindcss").Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			maxWidth: {
				"9.1rem": "9.1rem",
			},
			height: {
				"hvh": "calc(100vh - 73px)",
			},
		},
	},
	plugins: [],
};

