module.exports = {
  extends: [
    'plugin:@angular-eslint/template/process-inline-templates',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    '@angular-eslint',
  ],
  rules: {
    // ==================================================================================================================================
    // ESLint base rules: Possible logic errors
    // ==================================================================================================================================
    'array-callback-return': ['warn', { checkForEach: true }],
    // 'constructor-super': 'warn', // Already handled by TypeScript.
    // 'for-direction': 'warn', // Heuristics can lead to false positives, e.g.: `for (let x = 0; x < 10; x -= 1-2) {}`
    // 'getter-return': 'warn', // Already handled by TypeScript.
    'no-async-promise-executor': 'warn',
    'no-await-in-loop': 'warn',
    // 'no-class-assign': 'warn', // Already handled by TypeScript.
    'no-compare-neg-zero': 'warn',
    'no-cond-assign': 'warn',
    // 'no-const-assign': 'warn', // Already handled by TypeScript.
    'no-constant-binary-expression': 'warn',
    'no-constant-condition': 'warn',
    'no-constructor-return': 'warn',
    'no-control-regex': 'warn',
    'no-debugger': 'warn',
    // 'no-dupe-args': 'warn', // Already handled by TypeScript.
    // 'no-dupe-class-members': 'warn', // Already handled by TypeScript.
    'no-dupe-else-if': 'warn',
    // 'no-dupe-keys': 'warn', // Already handled by TypeScript.
    'no-duplicate-case': 'warn',
    // 'no-duplicate-imports': 'warn', // Use @typescript-eslint/no-duplicate-imports instead.
    'no-empty-character-class': 'warn',
    'no-empty-pattern': 'warn',
    'no-ex-assign': 'warn',
    'no-fallthrough': 'warn',
    // 'no-func-assign': 'warn', // Already handled by TypeScript.
    // 'no-import-assign': 'warn', // Already handled by TypeScript.
    'no-inner-declarations': 'warn',
    'no-invalid-regexp': 'warn',
    'no-irregular-whitespace': ['warn', { skipStrings: false }],
    // 'no-loss-of-precision': 'warn', // Use @typescript-eslint/no-loss-of-precision instead.
    'no-misleading-character-class': 'warn',
    // 'no-new-native-nonconstructor': 'warn', // Already handled by TypeScript.
    // 'no-new-symbol': 'warn', // Already handled by TypeScript.
    // 'no-obj-calls': 'warn', // Already handled by TypeScript.
    'no-promise-executor-return': 'warn',
    'no-prototype-builtins': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    // 'no-setter-return': 'warn', // Already handled by TypeScript.
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'warn',
    // 'no-this-before-super': 'warn', // Already handled by TypeScript.
    // 'no-undef': 'warn', // Already handled by TypeScript.
    // 'no-unexpected-multiline': 'warn', // Already handled by TypeScript.
    'no-unmodified-loop-condition': 'warn',
    // 'no-unreachable': 'warn', // Already handled by TypeScript.
    'no-unreachable-loop': 'warn',
    'no-unsafe-finally': 'warn',
    // 'no-unsafe-negation': 'warn', // Already handled by TypeScript.
    // 'no-unsafe-optional-chaining': 'warn', // Already handled by TypeScript.
    'no-unused-private-class-members': 'warn',
    // 'no-unused-vars': 'warn', // Results in false positives for overloaded function signatures.
    // 'no-use-before-define': 'warn' // Not always desirable, e.g. when you write higher abstractions first followed by lower levels.
    'no-useless-backreference': 'warn',
    'require-atomic-updates': 'warn',
    'use-isnan': ['warn', { enforceForIndexOf: true }],
    // 'valid-typeof': 'warn', // Already handled by TypeScript.

    // ==================================================================================================================================
    // ESLint base rules: Suggestions
    // ==================================================================================================================================
    // 'accessor-pairs': 'warn', // There are valid use cases for only having a setter: e.g. @Input properties
    'arrow-body-style': ['warn', 'as-needed'],
    // 'block-scoped-var': 'warn', // We don't allow the usage of var anyway (see 'no-var' rule).
    'camelcase': 'warn',
    'capitalized-comments': ['warn', 'always', { ignoreConsecutiveComments: true }],
    'complexity': ['warn', 20],
    // 'consistent-return':  'warn', // Is nice, but to enforce this seems a bit too strict.
    // 'class-methods-use-this': 'warn', // This gives issues for example with @Memoized config objects
    'consistent-this': 'warn',
    'curly': 'warn',
    // 'default-case': 'warn', // There is not always a sensible default case, so no reason to enforce this
    'default-case-last': 'warn',
    // 'default-param-last': 'warn', // Use @typescript-eslint/default-param-last instead
    // 'dot-notation': 'warn', // Use @typescript-eslint/dot-notation instead.
    'eqeqeq': 'warn',
    // 'func-name-matching': 'warn', // We don't really see this as a problem, nor do we expect this to be a commonly used construction.
    // 'func-names': 'warn', // Should be possible to create anonymous functions.
    // 'func-style': 'warn', // Both styles are allowed as they have different use cases, which are both valid.
    'grouped-accessor-pairs': ['warn', 'getBeforeSet'],
    // 'guard-for-in': 'warn', // Redundant because of the 'no-restricted-syntax' rule config.
    // 'id-denylist': ['warn'], // We accept any name. Reviewer should validate identifiers.
    'id-length': ['warn', { min: 2, exceptions: ['_'] }],
    // 'id-match': ['warn'], // There are better rules to enforce naming conventions.
    // 'init-declarations': 'warn', // Already handled by TypeScript.
    // 'logical-assignment-operators': 'warn', // Doesn't always improve readability.
    'max-classes-per-file': ['warn', { ignoreExpressions: true, max: 2 }],
    'max-depth': ['warn', 4],
    'max-lines': ['warn', { max: 1000 }],
    // 'max-lines-per-function': 'warn', // Already covered by other rules.
    // 'max-nested-callbacks': 'warn', // TODO add explanation
    // 'max-params': // TODO add explanation
    // 'max-statements': // TODO add explanation
    // 'multiline-comment-style' // TODO add explanation
    // 'new-cap' // Use @typescript-eslint/naming-convention.
    'no-alert': 'warn',
    // 'no-array-constructor': 'warn', // Use @typescript-eslint/no-array-constructor instead.
    'no-bitwise': ['warn', { int32Hint: true }],
    'no-caller': 'warn',
    'no-case-declarations': 'warn',
    // 'no-confusing-arrow' // Already handled by TypeScript
    'no-console': 'warn',
    // 'no-continue' // Can be useful for early bailouts (to reduce nesting).
    // 'no-delete-var' // Already handled by TypeScript
    // 'no-div-regex' // Edge case
    'no-else-return': 'warn',
    'no-empty': 'warn',
    // 'no-empty-function' // Sometimes you need to have a no-op-callback
    'no-empty-static-block': 'warn',
    // 'no-eq-null' // Redundant because of the 'eqeqeq' rule.
    'no-eval': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-boolean-cast': 'warn',
    // 'no-extra-label': 'warn', // Redundant because of 'no-labels' rule.
    // 'no-extra-semi': 'warn', // Use @typescript-eslint/no-extra-semi instead.
    'no-floating-decimal': 'warn',
    'no-global-assign': 'warn',
    'no-implicit-coercion': ['warn', { boolean: false }],
    // 'no-implicit-globals' // Not needed for ES modules
    // 'no-implied-eval': 'warn', // Use @typescript-eslint/no-implied-eval instead.
    // 'no-inline-comments' // We want to support those
    // 'no-invalid-this' // Already handled by TypeScript
    'no-iterator': 'warn',
    // 'no-label-var' // Redundant because of 'no-labels' rule.
    'no-labels': 'warn',
    'no-lone-blocks': 'warn',
    'no-lonely-if': 'warn',
    // 'no-loop-func': 'warn', // Use the @typescript-eslint/no-loop-func rule instead
    // 'no-magic-numbers': 'warn', // Use the @typescript-eslint/no-magic-numbers rule instead
    // 'no-mixed-operators': 'warn', // Forces parenthesis even for basic math operators like + and *.
    // 'no-multi-assign: //
    'no-multi-str': 'warn',
    // 'no-negated-condition' //
    // 'no-nested-ternary' //
    'no-new': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-wrappers': 'warn',
    // 'no-nonoctal-decimal-escape' // Redundant because of the 'no-octal-escape' rule
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    'no-param-reassign': 'warn',
    // 'no-plusplus' // Often used
    // 'no-proto': 'warn', // Already checked by TypeScript
    // 'no-redeclare', // Already checked by TypeScript
    'no-regex-spaces': 'warn',
    // 'no-restricted-exports': ['error', { 'restrictedNamedExports': ['...'] }],
    'no-restricted-globals': ['warn', 'event', 'fdescribe', 'fit'],
    // 'no-restricted-imports': ['warn'] // Use @typescript-eslint/no-restricted-imports instead
    // 'no-restricted-properties': ['warn', ...]
    'no-restricted-syntax': ['warn', 'ForInStatement'],
    // 'no-return-assign': 'warn', // Arrow functions with implicit returns, e.g. `(event) => { this.user = event.user; }`, are acceptable. Yet those cannot be excluded from this rule.
    // 'no-return-await': 'warn', // Use @typescript-eslint/return-await instead.
    // 'no-script-url', // Edge case
    'no-sequences': 'warn',
    // 'no-shadow': 'warn', // Use @typescript-eslint/no-shadow instead.
    'no-shadow-restricted-names': 'warn',
    // 'no-ternary'
    // 'no-throw-literal': 'warn', // Use @typescript-eslint/no-throw-literal instead.
    'no-undef-init': 'warn',
    // 'no-undefined', // Already checked by TypeScript
    // 'no-underscore-dangle', // Sometimes needed for unused vars
    'no-unneeded-ternary': 'warn',
    // 'no-unused-expressions': 'warn', // Use @typescript-eslint/no-unused-expressions instead.
    // 'no-unused-labels' // Redundant because of the 'no-labels' rule
    'no-useless-call': 'warn',
    'no-useless-catch': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    // 'no-useless-constructor': 'warn', // Used @typescript-eslint/no-useless-constructor instead.
    'no-useless-escape': 'warn',
    'no-useless-rename': 'warn',
    'no-useless-return': 'warn',
    'no-var': 'warn',
    'no-void': 'warn',
    // 'no-warning-comments'
    'no-with': 'warn',
    'object-shorthand': 'warn',
    'one-var': ['warn', 'never'],
    // 'one-var-declaration-per-line' // Redundant because of the 'one-var' rule.
    // 'operator-assignment': ['warn', 'always'],
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    // 'prefer-destructuring', // Doesn't always improve readability.
    'prefer-exponentiation-operator': 'warn',
    // 'prefer-named-capture-group' // Quite verbose if you only have one capture group.
    'prefer-numeric-literals': 'warn',
    'prefer-object-has-own': 'warn', // Requires ES2022.
    'prefer-object-spread': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'prefer-regex-literals': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'quote-props': ['warn', 'as-needed'],
    'radix': 'warn',
    // 'require-await': 'warn', // Use @typescript-eslint/require-await instead.
    'require-unicode-regexp': 'warn',
    'require-yield': 'warn',
    'sort-imports': ['warn', { ignoreDeclarationSort: true }],
    // 'sort-keys' // You want to keep related properties together.
    // 'sort-vars'
    'spaced-comment': ['warn', 'always', { exceptions: ['*'] }],
    // 'strict' // Already handled by TypeScript.
    'symbol-description': 'warn',
    // 'vars-on-top' // Redundant because of the 'no-var' rule.
    // 'yoda' // Doesn't improve readability.


    // ==================================================================================================================================
    // ESLint base rules: Layout & Formatting
    // ==================================================================================================================================
    'array-element-newline': ['warn', 'consistent'],
    'array-bracket-spacing': 'warn',
    // 'array-element-newline': 'warn'
    'arrow-parens': 'warn',
    'arrow-spacing': 'warn',
    'block-spacing': 'warn',
    // 'brace-style': 'warn', // Use @typescript-eslint/brace-style instead
    // 'comma-dangle': ['warn', 'always-multiline'], // Use @typescript-eslint/comma-dangle instead
    // 'comma-spacing': 'warn', // Use @typescript-eslint/comma-spacing instead
    'comma-style': 'warn',
    'computed-property-spacing': 'warn',
    'dot-location': ['warn', 'property'],
    'eol-last': 'warn',
    // 'func-call-spacing': 'warn', // Use @typescript-eslint/func-call-spacing instead
    'function-call-argument-newline': ['warn', 'consistent'],
    // 'function-paren-newline': ['warn', 'consistent'], // Results in verbose arrow functions in RxJS pipelines.
    'generator-star-spacing': ['warn', { before: false, after: true }],
    // 'implicit-arrow-linebreak': 'warn',
    // 'indent': ['warn', 2], // Broken for TypeScript, see https://github.com/typescript-eslint/typescript-eslint/issues/1824
    // 'jsx-quotes': 'warn',
    'key-spacing': 'warn',
    // 'keyword-spacing': 'warn', // Use @typescript-eslint/keyword-spacing instead
    // 'line-comment-position' // Both should be allowed
    'linebreak-style': ['warn', 'unix'],
    // 'lines-around-comment' // Really depends on the context
    // 'lines-between-class-members' // Use @typescript-eslint/lines-between-class-members instead.
    'max-len': [
      'warn',
      { code: 140, tabWidth: 2, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true, ignorePattern: '^import\\W.*' },
    ],
    'max-statements-per-line': ['warn', { max: 1 }],
    // 'multiline-ternary'
    'new-parens': 'warn',
    // 'newline-per-chained-call' // Context dependent, hard to generalize. Also conflicts with Prettier.
    // 'no-extra-parens' // Context dependent, hard to generalize. Also conflicts with Prettier.
    // 'no-mixed-spaces-and-tabs': 'warn', // Redundant because of the 'no-tabs' rule.
    'no-multi-spaces': 'warn',
    'no-multiple-empty-lines': ['warn', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-tabs': 'warn',
    'no-trailing-spaces': 'warn',
    'no-whitespace-before-property': 'warn',
    // 'nonblock-statement-body-position', // Redundant because of the 'curly' rule.
    'object-curly-newline': ['warn', { consistent: true }],
    // 'object-curly-spacing': ['warn', 'always', { 'objectsInObjects': false }], // Use @typescript-eslint/object-curly-spacing instead.
    // 'object-property-newline', //
    // 'operator-linebreak', // Easily results in conflicts
    // 'padded-blocks', //
    // 'padding-line-between-statements': [
    //   'warn',
    //   { 'blankLine': 'always', 'prev': '*', 'next': 'return' }
    // ], // Use @typescript-eslint/padding-line-between-statements instead.
    // 'quotes': ['warn', 'single'], // Use @typescript-eslint/quotes instead.
    'rest-spread-spacing': 'warn',
    // 'semi': 'warn', // Use @typescript-eslint/semi instead.
    'semi-spacing': 'warn',
    'semi-style': 'warn',
    // 'space-before-blocks': 'warn', // Use @typescript-eslint/space-before-blocks instead.
    // 'space-before-function-paren': ['warn', {
    //   'anonymous': 'never',
    //   'named': 'never',
    //   'asyncArrow': 'always'
    // }], // Use @typescript-eslint/space-before-function-paren instead.
    'space-in-parens': 'warn',
    // 'space-infix-ops': ['warn', { 'int32Hint': true }], // Use @typescript-eslint/space-infix-ops instead.
    'space-unary-ops': 'warn',
    'switch-colon-spacing': 'warn',
    'template-curly-spacing': 'warn',
    'template-tag-spacing': 'warn',
    'unicode-bom': 'warn',
    'wrap-iife': 'warn',
    // 'wrap-regex': 'warn', //
    'yield-star-spacing': 'warn',

    // ==================================================================================================================================
    // TypeScript ESLint
    // ==================================================================================================================================
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    '@typescript-eslint/array-type': 'warn',
    '@typescript-eslint/await-thenable': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/ban-tslint-comment': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/class-literal-property-style': ['warn', 'fields'],
    '@typescript-eslint/consistent-generic-constructors': 'warn',
    '@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],
    '@typescript-eslint/consistent-type-assertions': ['warn', { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' }],
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
    // '@typescript-eslint/consistent-type-exports': 'warn' //
    // '@typescript-eslint/consistent-type-imports': 'warn' //
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public',
        },
      },
    ],
    // '@typescript-eslint/explicit-module-boundary-types' // Redundant because of the '@typescript-eslint/explicit-function-return-type' rule
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-constructor',
          'protected-constructor',
          'private-constructor',
          'public-instance-method',
          ['public-get', 'public-set'],
          'protected-instance-method',
          ['protected-get', 'protected-set'],
          'private-instance-method',
          ['private-get', 'private-set'],
          'public-static-method',
          'protected-static-method',
          'private-static-method',
        ],
      },
    ],
    // '@typescript-eslint/method-signature-style': ['warn', 'method'],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: ['class', 'interface', 'typeAlias', 'enum', 'typeParameter'],
        format: ['PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: ['variable'],
        format: ['UPPER_CASE'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
        modifiers: ['const', 'global'],
      },
      {
        selector: ['variable'],
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
        modifiers: ['const', 'global'],
        types: ['function']
      },
      {
        selector: ['parameter'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
    ],
    // '@typescript-eslint/no-base-to-string',
    // '@typescript-eslint/no-confusing-non-null-assertion' // We should avoid non null assertions anyway
    '@typescript-eslint/no-confusing-void-expression': ['warn', { ignoreArrowShorthand: true }],
    '@typescript-eslint/no-duplicate-enum-values': 'warn',
    '@typescript-eslint/no-dynamic-delete': 'warn',
    // "@typescript-eslint/no-empty-interface": 'warn', // There are valid use cases for this.
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-extra-non-null-assertion': 'warn',
    '@typescript-eslint/no-extraneous-class': ['warn', { 'allowWithDecorator': true }],
    // '@typescript-eslint/no-floating-promises'
    '@typescript-eslint/no-for-in-array': 'warn',
    '@typescript-eslint/no-import-type-side-effects': 'warn',
    // '@typescript-eslint/no-inferrable-types', // Sometimes wanted as validation
    '@typescript-eslint/no-invalid-void-type': 'warn',
    // '@typescript-eslint/no-meaningless-void-operator' // We never use the void operator anyway
    '@typescript-eslint/no-misused-new': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/no-mixed-enums': 'warn',
    '@typescript-eslint/no-namespace': 'warn',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    '@typescript-eslint/no-require-imports': 'warn',
    '@typescript-eslint/no-this-alias': 'warn',
    // '@typescript-eslint/no-type-alias': 'warn', // We have valid use cases for this (migrations, work in progress, etc.)
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-declaration-merging': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-useless-empty-export': 'warn',
    // '@typescript-eslint/no-var-requires': 'warn', // Redundant because of the @typescript-eslint/no-require-imports rule
    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
    // '@typescript-eslint/parameter-properties': 'warn', // Used heavily, e.g. for DI
    '@typescript-eslint/prefer-as-const': 'warn',
    '@typescript-eslint/prefer-enum-initializers': 'warn',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-literal-enum-member': 'warn',
    // '@typescript-eslint/prefer-namespace-keyword': 'warn', // Redundant because of the @typescript-eslint/no-namespace rule
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-readonly': 'warn',
    // "@typescript-eslint/prefer-readonly-parameter-types": "warn" // Too verbose
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    // "@typescript-eslint/prefer-regexp-exec": "warn" // Edge case
    '@typescript-eslint/prefer-return-this-type': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/prefer-ts-expect-error': 'warn',
    // '@typescript-eslint/promise-function-async': 'warn', // Conflicts with Angular's API (e.g. lazy loaded routes)
    '@typescript-eslint/require-array-sort-compare': ['warn', { ignoreStringArrays: true }],
    // '@typescript-eslint/restrict-plus-operands': 'warn', // Redundant because of the prefer-template rule
    '@typescript-eslint/restrict-template-expressions': 'warn',
    // '@typescript-eslint/sort-type-constituents': 'warn', // Doesn't make sense, e.g. grouping related things
    // '@typescript-eslint/strict-boolean-expressions': 'warn', // Will make things too verbose
    // '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    '@typescript-eslint/triple-slash-reference': 'warn',
    // '@typescript-eslint/typedef': 'warn', // Should be checked by the TypeScript compiler instead using the noImplicitAny flag
    '@typescript-eslint/unbound-method': ['warn', { ignoreStatic: true }],
    // '@typescript-eslint/unified-signatures': 'warn', // Can hurt the documentation / intent of various overloads

    '@typescript-eslint/default-param-last': ['warn'],
    '@typescript-eslint/dot-notation': 'warn',
    // '@typescript-eslint/init-declarations': 'warn', // Already handled by TypeScript.
    '@typescript-eslint/no-array-constructor': 'warn',
    // '@typescript-eslint/no-dupe-class-members': 'warn', // Already handled by TypeScript.
    // '@typescript-eslint/no-duplicate-imports': 'warn', // Deprecated, and already handled by TypeScript Import Sorter
    // '@typescript-eslint/no-empty-function': 'warn', // Sometimes needed
    '@typescript-eslint/no-extra-semi': 'warn',
    '@typescript-eslint/no-implied-eval': 'warn',
    // '@typescript-eslint/no-invalid-this' // Already handled by TypeScript
    '@typescript-eslint/no-loop-func': 'warn',
    '@typescript-eslint/no-loss-of-precision': 'warn',
    // '@typescript-eslint/no-magic-numbers': 'warn', // Up to the reviewer
    // '@typescript-eslint/no-redeclare', // Already checked by TypeScript
    '@typescript-eslint/no-restricted-imports': [
      'warn',
      {
        paths: ['rxjs/operators'],
      },
    ],
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-throw-literal': 'warn',
    '@typescript-eslint/no-unused-expressions': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }],
    // '@typescript-eslint/no-use-before-define': 'warn' // Not always desirable, e.g. when you write higher abstractions first followed by lower levels.
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/require-await': 'warn',
    '@typescript-eslint/return-await': 'warn',

    '@typescript-eslint/brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
    '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
    '@typescript-eslint/comma-spacing': 'warn',
    '@typescript-eslint/func-call-spacing': 'warn',
    '@typescript-eslint/keyword-spacing': 'warn',
    '@typescript-eslint/member-delimiter-style': 'warn',
    '@typescript-eslint/method-signature-style': ['warn', 'method'],
    '@typescript-eslint/object-curly-spacing': ['warn', 'always'],
    '@typescript-eslint/padding-line-between-statements': [
      'warn',
      { 'blankLine': 'always', 'prev': '*', 'next': 'return' }
    ],
    '@typescript-eslint/quotes': ['warn', 'single'],
    '@typescript-eslint/semi': 'warn',
    '@typescript-eslint/space-before-blocks': 'warn',
    '@typescript-eslint/space-before-function-paren': ['warn', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    '@typescript-eslint/space-infix-ops': ['warn', { 'int32Hint': true }],
    '@typescript-eslint/type-annotation-spacing': 'warn',

    // ==================================================================================================================================
    // Angular ESLint
    // ==================================================================================================================================
    '@angular-eslint/component-class-suffix': 'warn',
    // '@angular-eslint/component-max-inline-declarations': ['warn', { template: 3, styles: 3, animations: 15, }],
    '@angular-eslint/component-selector': [
      'warn',
      {
        'type': 'element',
        'prefix': 'app',
        'style': 'kebab-case'
      }
    ],
    '@angular-eslint/contextual-decorator': 'warn',
    '@angular-eslint/contextual-lifecycle': 'warn',
    '@angular-eslint/directive-class-suffix': 'warn',
    '@angular-eslint/directive-selector': [
      'warn',
      {
        'type': 'attribute',
        'prefix': 'app',
        'style': 'camelCase'
      }
    ],
    '@angular-eslint/no-attribute-decorator': 'warn',
    '@angular-eslint/no-conflicting-lifecycle': 'warn',
    '@angular-eslint/no-empty-lifecycle-method': 'warn',
    // '@angular-eslint/no-forward-ref': 'warn',
    '@angular-eslint/no-host-metadata-property': 'warn',
    // '@angular-eslint/no-input-prefix': ['warn', { prefixes: [] }],
    '@angular-eslint/no-input-rename': 'warn',
    '@angular-eslint/no-inputs-metadata-property': 'warn',
    '@angular-eslint/no-lifecycle-call': 'warn',
    '@angular-eslint/no-output-native': 'warn',
    '@angular-eslint/no-output-on-prefix': 'warn',
    '@angular-eslint/no-output-rename': 'warn',
    '@angular-eslint/no-outputs-metadata-property': 'warn',
    '@angular-eslint/no-pipe-impure': 'warn',
    '@angular-eslint/no-queries-metadata-property': 'warn',
    // '@angular-eslint/pipe-prefix': ['warn', { prefixes: [] }],
    '@angular-eslint/prefer-on-push-component-change-detection': 'warn',
    '@angular-eslint/prefer-output-readonly': 'warn',
    '@angular-eslint/relative-url-prefix': 'warn',
    // '@angular-eslint/require-localize-metadata': 'warn', // We're not using Angular i18n
    // '@angular-eslint/sort-ngmodule-metadata-arrays': 'warn', // We want to group related modules
    '@angular-eslint/use-component-selector': 'warn',
    '@angular-eslint/use-component-view-encapsulation': 'warn',
    // '@angular-eslint/use-injectable-provided-in': 'warn', // Not always possible / desireable
    '@angular-eslint/use-lifecycle-interface': 'warn',
    '@angular-eslint/use-pipe-transform-interface': 'warn',
  }
};
