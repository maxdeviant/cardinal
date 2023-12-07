const jestConfig = {
  preset: 'ts-jest',
  coverageDirectory: '<rootDir>/coverage',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  testRegex: '/__tests__/.*\\.(ts|tsx)$',
  testPathIgnorePatterns: ['<rootDir>/lib/'],
};

module.exports = jestConfig;
