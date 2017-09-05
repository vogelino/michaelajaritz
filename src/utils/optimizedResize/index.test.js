import getOptimizedResize from '.';

test('It should return an object with the add method', () => {
	const optimizedResize = getOptimizedResize();
	expect(typeof optimizedResize.add).toBe('function');
});
