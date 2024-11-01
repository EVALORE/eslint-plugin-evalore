export default [
  {
    rules: {
      'new-cap': 'off',
      'arrow-body-style': ['error', 'as-needed'],
      'func-name-matching': ['error', 'always'],
      'func-names': ['error', 'as-needed'],
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'id-length': ['error', { min: 3, max: 30, properties: 'never', exceptions: ['_', '__'] }],
      camelcase: 'error',
      'no-underscore-dangle': [
        'error',
        {
          allow: [],
          allowAfterThis: false,
          allowAfterSuper: false,
          enforceInMethodNames: true,
        },
      ],
      'logical-assignment-operators': ['error', 'always', { enforceForIfStatements: true }],
      curly: ['error'],
      'capitalized-comments': ['warn', 'always'],
      'no-inline-comments': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'operator-assignment': ['error', 'always'],
    },
  },
];
