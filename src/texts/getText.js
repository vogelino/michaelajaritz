import getMessages from './messages';

const texts = getMessages('de-DE');

export const getText = (key) => texts[key] || '';
