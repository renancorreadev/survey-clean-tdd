// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Config } from '@jest/types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const config: Config.InitialOptions = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts, tsx}'
  ],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

export default config
