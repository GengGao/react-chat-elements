module.exports = {
  roots: ['<rootDir>/src'],
  testRegex: '/__tests__/.*\\.test\\.(ts|tsx)$',
  transform: {
    '^.+\\.stories\\.(tsx|ts)$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.(css)$': 'jest-css-modules-transform',
    '^.+\\.(tsx|ts)?$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(@storybook/addon-storyshots)/)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'css', 'json'],
  modulePathIgnorePatterns: ['<rootDir>/src/__tests__/imageshots.test.ts'],
};
