module.exports = () => {
	const presets = ['next/babel'];
	const plugins = [
		'transform-object-assign',
		['styled-components', {
			ssr: true,
			displayName: true,
			preprocess: false,
		}],
	];

	return { presets, plugins };
};
