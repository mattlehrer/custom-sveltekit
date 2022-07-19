export default definePreset({
	name: 'custom-sveltekit',
	options: {
		// ...
	},
	handler: async() => {
		await extractTemplates()
		// ...
	},
})
