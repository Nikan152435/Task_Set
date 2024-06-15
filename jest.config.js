module.exports = {
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'json'],
    testMatch: ['**/__tests__/**/*.js'],
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  };