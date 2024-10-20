module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/__tests__/test-utils/setupTests.tsx'],
	transform: {
		'^.+\\.(ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: {
					jsx: 'react-jsx',
				},
			},
		],
		'^.+\\.(jpg|jpeg|png|gif|svg)$':
			'<rootDir>/__tests__/test-utils/imgTransform.ts',
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
		'^flowbite-react$': '<rootDir>/__tests__/test-utils/flowbiteMock.tsx',
		'^react-apexcharts$':
			'<rootDir>/__tests__/test-utils/apexchartsMock.tsx',

		'^chart.js$': '<rootDir>/__tests__/test-utils/chartjsMock.tsx',
		'^react-chartjs-2$': '<rootDir>/__tests__/test-utils/chartjsMock.tsx',
		'^react-select$': '<rootDir>/__tests__/test-utils/reactSelectMock.tsx',
		'^.+\\.(css|less|scss|sass)$':
			'<rootDir>/__tests__/test-utils/styleMock',
	},
};
