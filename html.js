module.exports = {
  extends: ['plugin:@angular-eslint/template/base'],
  rules: {
    '@angular-eslint/template/banana-in-box': 'warn',
    '@angular-eslint/template/conditional-complexity': ['warn', { 'maxComplexity': 7 }],
    '@angular-eslint/template/eqeqeq': 'warn',
    '@angular-eslint/template/no-any': 'warn',
    '@angular-eslint/template/no-autofocus': 'warn',
    '@angular-eslint/template/no-call-expression': 'warn',
    '@angular-eslint/template/no-duplicate-attributes': 'warn'
  }
};
