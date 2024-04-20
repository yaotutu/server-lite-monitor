module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		"postcss-px-to-viewport-8-plugin": {
			unitToConvert: "px",
			viewportWidth: 375,
			unitPrecision: 5,
			propList: ["*"],
			viewportUnit: "vw",
			fontViewportUnit: "vw",
			selectorBlackList: [],
			minPixelValue: 1,
			mediaQuery: false,
			replace: true,
			exclude: [],
			landscape: true,
			landscapeUnit: "vw",
			landscapeWidth: 667,
		},
	},
};
