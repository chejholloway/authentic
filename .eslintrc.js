module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    root: true,
    ecmaVersion: 'latest',
    project: ['./tsconfig.json'],
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:tailwindcss/recommended',
    'prettier'
  ],
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['./**/*.js']
    }
  ],
  plugins: ['react', 'unused-imports', 'tailwindcss'],
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/camelcase': ['off'],
    camelcase: ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/prop-types': ['off'],
    'jsx-a11y/href-no-hash': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'import/no-unresolved': ['off'],
    'import/extensions': 0,
    'no-use-before-define': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
      }
    ],
    'max-len': [
      'warn',
      {
        code: 100,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ]
  }
};
