module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/__tests__/test-utils/setupTests.ts'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.svg$': '<rootDir>/__tests__/test-utils/svgTransform.js',
	},
	testPathIgnorePatterns: ['<rootDir>/__tests__/test-utils/'],
	moduleNameMapper: {
		'^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'^@redux/(.*)$': '<rootDir>/src/redux/$1',
		'^@utils/(.*)$': '<rootDir>/src/utils/$1',
		'^@assets/(.*)$': '<rootDir>/src/assets/$1',
		'^@shared/(.*)$': '<rootDir>/src/components/shared/$1',
		'^@atoms/(.*)$': '<rootDir>/src/components/atoms/$1',
		'^@molecules/(.*)$': '<rootDir>/src/components/molecules/$1',
		'^@organisms/(.*)$': '<rootDir>/src/components/organisms/$1',
		'^@pages/(.*)$': '<rootDir>/src/components/pages/$1',
		'^@templates/(.*)$': '<rootDir>/src/components/templates/$1',
	},
};
