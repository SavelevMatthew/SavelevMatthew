module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2022,
    },
    env: {
        'browser': true,
        'es2021': true,
        'node': true,
    },
    extends: [
        'eslint:recommended',
        'next',
        'turbo',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    ignorePatterns: [
        'dist',
    ],
    rules: {
        'no-console': 1,
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': 'error',
        'indent': 'off',
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
            },
        ],
        'quotes': 'off',
        'jsx-quotes': [
            'error',
            'prefer-single',
        ],
        'semi': 'off',
        '@typescript-eslint/semi': [
            'error',
            'never',
        ],
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': [
            'error',
            'always',
        ],
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': [
            'error',
            {
                'functions': 'only-multiline',
                'arrays': 'always-multiline',
                'imports': 'always-multiline',
                'exports': 'always-multiline',
                'objects': 'always-multiline',
                'enums': 'always-multiline',
                'tuples': 'always-multiline',
                'generics': 'always-multiline',
            },
        ],
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': [
            'error',
            'always',
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                'args': 'none',
            },
        ],
        '@typescript-eslint/array-type': [
            'error',
            'array-simple',
        ],
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': [
            'error',
        ],
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': [
            'warn',
        ],
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': [
            'error',
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': [
            'error',
        ],
        'no-prototype-builtins': 'off',
        'react/react-in-jsx-scope': 'warn',
        'react/prop-types': 'warn',
        'react/no-children-prop': 'off',
        'react/display-name': 'warn',
        'react/jsx-curly-brace-presence': [
            'error',
            {
                'props': 'never',
                'children': 'never',
            },
        ],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/func-call-spacing': 'error',
        '@typescript-eslint/keyword-spacing': 'error',
        '@typescript-eslint/space-infix-ops': [
            'error',
            {
                'int32Hint': false,
            },
        ],
    },
}