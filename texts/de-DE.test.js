/* global expect, test */
import germanTexts from './de-DE';

test('The text file should export an object', () => {
	expect(typeof germanTexts).toBe('object');
	expect(Object.keys(germanTexts).length).toBeGreaterThan(0);
});
