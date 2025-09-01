import js from '@eslint/js';
import eslintPluginVue from 'eslint-plugin-vue';
import ts from 'typescript-eslint';

export default ts.config(
    js.configs.recommended,
    ...ts.configs.recommended,
    ...eslintPluginVue.configs['flat/recommended'],
    {
        files: ['*.vue', '**/*.vue', '*.js', '**/*.js', '*.ts', '**/*.ts', '*.jsx', '**/*.jsx'],
        languageOptions: {
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        },
        rules: {
            'semi': ['error', 'always'],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-module-boundary-types': 'error',
            '@typescript-eslint/explicit-function-return-type': 'warn',
            '@typescript-eslint/no-inferrable-types': 'warn',
        }
    }
);