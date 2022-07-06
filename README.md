[![NPM Version](https://img.shields.io/npm/v/@dscheerens/eslint-config-angular.svg)](https://www.npmjs.com/package/@dscheerens/eslint-config-angular)

# Angular ESLint configuration

This NPM package contains an (opiniated) ESLint configuration for Angular.

## Installation

First, make sure you have the following dev dependencies installed:

* `@angular-eslint/eslint-plugin`
* `@angular-eslint/eslint-plugin-template`
* `@angular-eslint/template-parser`
* `@typescript-eslint/eslint-plugin`
* `@typescript-eslint/parser`
* `eslint`

You can install them all at once using the following command:

```shell
npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser @angular-eslint/eslint-plugin @angular-eslint/eslint-plugin-template @angular-eslint/template-parser
```

Next, install this package:

```shell
npm install --save-dev @dscheerens/eslint-config-angular
```

## Usage

Below you can find an example `.eslintrc.json` file that makes use of this package.

```json
{
  "root": true,
  "overrides": [
    {
      "files": ["*.ts"],
      "parserOptions": {
        "project": ["./tsconfig.json"],
        "createDefaultProgram": true
      },
      "extends": ["@dscheerens/eslint-config-angular/typescript"]
    },
    {
      "files": ["*.html"],
      "extends": ["@dscheerens/eslint-config-angular/html"]
    }
  ]
}
```
