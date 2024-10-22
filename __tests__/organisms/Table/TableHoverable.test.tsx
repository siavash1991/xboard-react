import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import XTableHoverable from '@organisms/Tables/TableHoverable';

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

describe('XTableHoverable', () => {
	beforeAll(() => {
		window.alert = jest.fn(); // Mocking window.alert
	});

	afterEach(() => {
		jest.clearAllMocks(); // Clear mocks after each test
	});

	it('renders correctly with provided className and mock table data', () => {
		render(
			<XTableHoverable className="test-class" tableData={mockTableData} />
		);

		// Checking table header
		expect(
			screen.getByRole('heading', { name: /Hoverable Rows/i })
		).toBeInTheDocument();

		// Checking project and client names from mockTableData
		expect(screen.getByText('Laravel Project')).toBeInTheDocument();
		expect(screen.getByText('Olivia Parker')).toBeInTheDocument();
	});

	it('displays the correct user avatars from mockTableData', () => {
		render(<XTableHoverable tableData={mockTableData} />);

		// Check if avatars are rendered with correct alt text from mockTableData
		expect(screen.getByAltText('Avatar of John Doe')).toBeInTheDocument();
		expect(screen.getByAltText('Avatar of Jane Smith')).toBeInTheDocument();
	});

	it('calls the correct alert when Edit or Delete is clicked', () => {
		render(<XTableHoverable tableData={mockTableData} />);

		// Simulate dropdown actions
		fireEvent.click(screen.getByText('Edit'));
		expect(window.alert).toHaveBeenCalledWith('Edit action');

		fireEvent.click(screen.getByText('Delete'));
		expect(window.alert).toHaveBeenCalledWith('Delete action');
	});
});
