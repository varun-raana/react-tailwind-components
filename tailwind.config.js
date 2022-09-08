/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				ubuntu: "Ubuntu",
			},
			backgroundImage: {
				error404_01: "url('/src/assets/images/404/error404_01.svg')",
				error404_02: "url('/src/assets/images/404/004.jpg')",
				error404_03:
					"url('/src/assets/images/404/17Desember2020-003_-Converted-_generated.jpg')",
				error404_05: "url('/src/assets/images/404/error05.svg')",
				radial01:
					"radial-gradient(circle, rgba(51,51,51,1) 25%, rgba(0,0,0,1) 100%)",
				"comp-img": "url('/src/assets/images/comp_img.svg')",
				hero: "linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)",
			},
			animation: {
				shine: "shine 5s infinite",
			},
			keyframes: {
				shine: {
					"0%": {
						color: "#000",
					},
				},
			},
		},
	},
	plugins: [],
};
