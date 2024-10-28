// @ts-check
import tsEslint from 'typescript-eslint';
import jsRules from './javascript-rules';
export default tsEslint.config({
  files: ['**/*.ts'],
  ...jsRules,
});
