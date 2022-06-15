module.exports = {
	root: true,
	env: {
		browser: true,
		amd: true,
		node: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:jsx-a11y/recommended',
		'next',
		'next/core-web-vitals',
	],
	rules: {
		semi: ['error', 'always'],
		'prettier/prettier': 0,
	},
};
