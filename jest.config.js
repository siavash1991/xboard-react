module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/__tests__/test-utils/setupTests.ts'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.svg$': '<rootDir>/__tests__/test-utils/svgTransform.js',
	},
	testPathIgnorePatterns: ['<rootDir>/__tests__/test-utils/'],
};
