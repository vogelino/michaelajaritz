export function flattenObject(nestedMessages, prefix = '') {
	return Object.keys(nestedMessages).reduce((messages, key) => {
		const value = nestedMessages[key];
		const prefixedKey = prefix ? `${prefix}.${key}` : key;

		if (typeof value === 'string') {
			messages[prefixedKey] = value; // eslint-disable-line
		}
		else {
			Object.assign(messages, flattenObject(value, prefixedKey));
		}

		return messages;
	}, {});
}
