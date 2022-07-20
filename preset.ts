export default definePreset({
	name: 'custom-sveltekit',
	options: {
		// ...
	},
	handler: async () => {
		await executeCommand({
			command: 'git',
			arguments: ['init'],
		});
		await executeCommand({
			command: 'git',
			arguments: ['add', '.'],
		});
		await executeCommand({
			command: 'git',
			arguments: ['commit', '-a', '-m', '"From svelte-add"'],
		});
		await extractTemplates();
		await executeCommand({
			command: 'pnpm',
			arguments: ['rm', 'prettier-plugin-svelte'],
		});
		await installPackages({
			for: 'node',
			packages: ['prettier-plugin-tailwindcss'],
			dev: true,
		});
		await deletePaths({ paths: ['.prettierrc'] });
		await executeCommand({
			command: 'pnpm',
			arguments: ['i'],
		});
	},
});
