import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import XHeaderFooterTable from '@organisms/Tables/TableHeaderFooter';

// Mock table data
const mockTableData = [
	{
		id: '1',
		project: 'Laravel Project',
		logo: 'images/cards/active-project/laravel-logo.png',
		client: 'Olivia Parker',
		users: [
			{ id: '1', fullName: 'John Doe', avatarUrl: 'path/to/avatar1.png' },
			{
				id: '2',
				fullName: 'Jane Smith',
				avatarUrl: 'path/to/avatar2.png',
			},
		],
		status: 'Pending',
		statusColor: 'bg-blue-100',
		statusTextColor: 'text-blue-500',
	},
	// Add more mock data as needed
];

describe('XHeaderFooterTable', () => {
	beforeAll(() => {
		window.alert = jest.fn(); // Mocking window.alert
	});

	afterEach(() => {
		jest.clearAllMocks(); // Clear mocks after each test
	});

	it('renders correctly with provided className', () => {
		render(
			<XHeaderFooterTable
				className="test-class"
				tableData={mockTableData}
			/>
		);

		expect(
			screen.getByRole('heading', { name: /Table Header and Footer/i })
		).toBeInTheDocument();
		expect(screen.getByText('Laravel Project')).toBeInTheDocument();
		expect(screen.getByText('Olivia Parker')).toBeInTheDocument();
	});
});
