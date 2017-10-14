export const getPageContentsByKeys = (pageName, textKeys) =>
	textKeys.reduce((acc, textKey) => ({
		...acc,
		[textKey]: { id: `pages.${pageName}.content.${textKey}` },
	}), {});

