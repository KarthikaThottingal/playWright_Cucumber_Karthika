module.exports = {
  default: [
    'tests/features/*.feature',
    '--require support/hooks.js',
    '--require support/world.js',
    '--require tests/steps/*.js',
    '--tags @APITesting',
    '--format json:Reports/cucumber.json'
  ].join(' ')
};