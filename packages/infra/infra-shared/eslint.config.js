const rootConfig = require('../../../eslint.config.js');

module.exports = [
  ...rootConfig,
  { ignores: ['**/node_modules/**/*', '**/cdk.out/**/*'] },
];
