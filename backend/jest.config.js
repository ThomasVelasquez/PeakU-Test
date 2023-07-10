/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: 'app',
  testMatch: ['**/*.test.ts'],
  moduleNameMapper: {
    '^@data-access/(.*)$': '<rootDir>/data-access/$1',
    '^@domain/(.*)$': '<rootDir>/domain/$1',
    '^@infrastructure/(.*)$': '<rootDir>/infrastructure/$1',
    '^@interfaces/(.*)$': '<rootDir>/interfaces/$1',
    '^@use-cases/(.*)$': '<rootDir>/use-cases/$1'
  },
  moduleFileExtensions: ['js', 'json', 'ts']
};
