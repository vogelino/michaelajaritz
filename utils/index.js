export function flattenObject(nestedMessages, prefix = '') {
	return Object.keys(nestedMessages).reduce((messages, key) => {
		let value = nestedMessages[key];
		let prefixedKey = prefix ? `${prefix}.${key}` : key;

		if (typeof value === 'string') {
			messages[prefixedKey] = value;
		} else {
			Object.assign(messages, flattenObject(value, prefixedKey));
		}

		return messages;
	}, {});
}
