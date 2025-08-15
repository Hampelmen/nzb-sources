/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.svelte',
      options: { parser: 'svelte' },
    },
  ],
  endOfLine: 'crlf',
};
