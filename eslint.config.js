import { defineConfig, globalIgnores } from 'eslint/config';

import js from '@eslint/js';
import json from '@eslint/json';

export default defineConfig([
  globalIgnores(['package-lock.json']),

  {
    files: ['**/*.js'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },

  {
    files: ['**/*.json', '.prettierrc'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
]);
