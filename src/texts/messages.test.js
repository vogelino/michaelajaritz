/* global test, expect */
import getMessages from './messages';

test('getMessages should return a flattened object', () => {
	const messages = getMessages('de-DE');
	expect(messages['site.title']).toBeDefined();
});

test('getMessages should default to german', () => {
	const messages = getMessages(undefined);
	expect(messages['pages.welcome.title']).toBe('Willkommen');
});
