export default definePreset({
	name: 'custom-sveltekit',
	options: {},
	handler: async () => {
		await group({
			title: 'initialize repository',
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
			}
		});
		await group({
			title: 'add vitest',
			handler: async () => {
				await executeCommand({
					command: 'pnpx',
					arguments: ['@preset/cli', 'davipon/svelte-add-vitest', '--ts', '--msw', '--example'],
				});
			}
		});
		await group({
			title: 'extract template',
			handler: async () => {
				await extractTemplates();
			}
		});
		await group({
			title: 'setup prettier and eslint plugins',
			handler: async () => {
				await executeCommand({
					command: 'pnpm',
					arguments: ['rm', 'prettier-plugin-svelte'],
				});
				await installPackages({
					for: 'node',
					packages: ['prettier-plugin-tailwindcss', 'eslint-plugin-tailwindcss'],
					dev: true,
				});
				await editFiles({
					files: ['.eslintrc.cjs'], operations: [{
						type: 'update-content',
						update: (content) => {
							return content.replace(/extends: \[(.*?)('|',\n\s)\],/gsm, "extends: [$1', 'plugin:tailwindcss/recommended'],").replace(/plugins: \[(.*)\],/g, "plugins: [$1, 'tailwindcss'],");
						}
					}]
			
				})
				await deletePaths({ paths: ['.prettierrc'] });
			}
		});
		await group({
			title: 'install packages',
			handler: async () => {
				await executeCommand({
					command: 'pnpm',
					arguments: ['i'],
				});
			}
		});
		await group({
      title: 'format files',
			handler: async () => {
				await executeCommand({
					command: 'pnpm',
					arguments: ['format'],
				});
			}
		});
		await group({
			title: 'commit changes',
			handler: async () => {
				await executeCommand({
					command: 'git',
					arguments: ['add', '.'],
				});
				await executeCommand({
					command: 'git',
					arguments: [
						'commit',
						'-a',
						'-m',
						'"From preset: mattlehrer/custom-sveltekit"',
					],
				});
			}
		});
	},
});
