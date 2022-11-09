/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primaryOrange: {
					DEFAULT: "#EDA122",
					dark: "#d1750e",
					light: "#f3ba2c",
				},
				brownDark: " #262424",
			},
			container: {
				padding: "2rem",
				center: true,
			},
		},
	},
	plugins: [],
};
