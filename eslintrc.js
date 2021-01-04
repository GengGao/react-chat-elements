module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
    extraFileExtensions: ['.ts', '.tsx'],
  },
  env: {
    node: true,
    browser: true,
    'jest/globals': true,
  },
  globals: { Symbol: 'false', cloudinary: 'false' },
  plugins: [
    '@typescript-eslint',
    'react',
    'graphql',
    'i18n-text',
    'jest',
    'react-hooks',
  ],
  rules: {
    eqeqeq: 1,
    curly: 1,
    'no-console': 1,
    'no-undef': 0, // covered by typescript
    'require-await': 1,
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-unresolved': 0, // throws incorrect errors on ts types, typescript detects unresolved errors anyway
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 0, // covered by eslint
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'import/order': 0,
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': false,
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 3,
      },
    ],
    'graphql/template-strings': [
      'error',
      {
        env: 'apollo',
        schemaJson: require('@spice/graphql/schema.json'),
        validators: [
          'ExecutableDefinitions',
          'FieldsOnCorrectType',
          'FragmentsOnCompositeTypes',
          'KnownArgumentNames',
          'KnownDirectives',
          'KnownTypeNames',
          'LoneAnonymousOperation',
          'NoFragmentCycles',
          'NoUndefinedVariables',
          'NoUnusedVariables',
          'OverlappingFieldsCanBeMerged',
          'PossibleFragmentSpreads',
          'ProvidedRequiredArguments',
          'ScalarLeafs',
          'SingleFieldSubscriptions',
          'UniqueArgumentNames',
          'UniqueDirectivesPerLocation',
          'UniqueFragmentNames',
          'UniqueInputFieldNames',
          'UniqueOperationNames',
          'UniqueVariableNames',
          'ValuesOfCorrectType',
          'VariablesAreInputTypes',
          'VariablesInAllowedPosition',
        ],
      },
    ],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
