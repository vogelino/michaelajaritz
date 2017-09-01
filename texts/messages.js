import germanTexts from './de-DE';
import { flattenObject } from '../utils';

const texts = {
	'de-DE': germanTexts,
};

export default (locale) => flattenObject(texts[locale]);
