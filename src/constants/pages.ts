const pageNames = [
	'willkommen',
	'idee',
	'angebot',
	'fokus',
	'ueber-mich',
	'kontakt',
	'kooperationen',
] as const

export type PageNamesType = typeof pageNames
export type PageNameType = PageNamesType[number]

const pages = pageNames.map((pageName) => ({
	path: pageName === 'willkommen' ? '/' : `/${pageName}`,
	name: pageName,
}))

export default pages
