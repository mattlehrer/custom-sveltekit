<pre><div align="center">npx @preset/cli apply mattlehrer/custom-sveltekit</div></pre>

## ❓ What is this?

This is a preset to set up a SvelteKit project according to my personal preferences.

It sets up:

- A layout with CSS grid to [pin the footer to the bottom of the page](https://css-tricks.com/how-to-use-css-grid-for-sticky-headers-and-footers/)
- [TailwindCSS's prettier plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- Removes prettier-plugin-svelte because it's included in prettier-plugin-tailwindcss
- Trailing commas in prettier

## 🛠 Usage

This preset assumes that a SvelteKit project is already present in the current directory with some svelte-add initializers already run. I use an alias on this command that for scaffolding with svelte-add:

```bash
npm create --yes @svelte-add/kit@latest -- --install false --with tailwindcss+eslint+prettier+typescript+playwright
```

Once that is set up, run this command in your project directory to use this preset:

```bash
npx @preset/cli apply mattlehrer/custom-sveltekit
```

### ⚙️ Options

| Description        | Flag        | Default |
| ------------------ | ----------- | ------- |
| Typescript Support | `--ts`      | False   |
| Setup `msw`        | `--msw`     | False   |
| Generate Example   | `--example` | False   |

## 📄 License

MIT
