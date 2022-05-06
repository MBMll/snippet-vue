module.exports = {
    parser: 'vue-eslint-parser',
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    globals: {
        defineEmits: true,
        document: true,
        localStorage: true,
        GLOBAL_VAR: true,
        window: true,
        defineProps: true,
        defineExpose: true
    },
    extends: [
        './.eslintrc-auto-import.json',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['vue', '@typescript-eslint', 'import'],
    rules: {
        'no-console': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'vue/custom-event-name-casing': 'off',
        'no-use-before-define': 'off',
        // 'no-use-before-define': [
        //   'error',
        //   {
        //     functions: false,
        //     classes: true,
        //   },
        // ],
        '@typescript-eslint/no-use-before-define': 'off',
        // '@typescript-eslint/no-use-before-define': [
        //   'error',
        //   {
        //     functions: false,
        //     classes: true,
        //   },
        // ],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^h$',
                varsIgnorePattern: '^h$'
            }
        ],
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^h$',
                varsIgnorePattern: '^h$'
            }
        ],
        'space-before-function-paren': 'off',
        quotes: ['error', 'single'],
        'comma-dangle': ['error', 'never']
    }
}
