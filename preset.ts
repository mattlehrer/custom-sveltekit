export default definePreset({
	name: 'custom-sveltekit',
	options: {
		// ...
	},
	handler: async () => {
		await extractTemplates();
		await installPackages({
			for: 'node',
			packages: ['prettier-plugin-tailwindcss'],
			dev: true,
		});
		await executeCommand({
			command: 'pnpm',
			arguments: ['rm prettier-plugin-svelte'],
		});
		await deletePaths({ paths: ['.prettierrc'] });
	},
});
