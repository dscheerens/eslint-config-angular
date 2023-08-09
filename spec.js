// ESLint overrides for *.spec.ts files

module.exports = {
  rules: {
    'id-length': 'off',
    'max-classes-per-file': 'off',
    '@typescript-eslint/no-loop-func': 'off', // Might result in false positives for `it`, `expect`, etc. in generated test cases
  }
}
