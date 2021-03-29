type NestedObject = Record<string, unknown>

export function flattenObject(nestedMessages: NestedObject, prefix = ''): Record<string, string> {
	return Object.keys(nestedMessages).reduce((messages: Record<string, string>, key) => {
		const value = nestedMessages[key]
		const prefixedKey = prefix ? `${prefix}.${key}` : key

		if (typeof value === 'string') {
			messages[prefixedKey] = value; // eslint-disable-line
		} else {
			Object.assign(messages, flattenObject(value as NestedObject, prefixedKey))
		}

		return messages
	}, {})
}
