const getWindowDimensionByKeyWord = (keyword) => {
	const dimension = window[`inner${keyword}`];
	const { documentElement, body } = document;
	return (
		dimension ||
		(documentElement || body)[`client${keyword}`]
		|| 'auto'
	);
};

export const getWindowSize = () => ({
	windowHeight: getWindowDimensionByKeyWord('Height'),
	windowWidth: getWindowDimensionByKeyWord('Width'),
});
