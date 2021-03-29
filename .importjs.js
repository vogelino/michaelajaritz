module.exports = {
	moduleNameFormatter({ pathToImportedModule }) {
		return pathToImportedModule
			.replace('./src/components/', '@components/')
			.replace('./src/utils/', '@utils/')
			.replace(/\.ts$/gs, '')
	},
}
