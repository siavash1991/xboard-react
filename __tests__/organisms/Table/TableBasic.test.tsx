import React from 'react';
import { render, screen } from '@testing-library/react';
import XTableBasic from '@organisms/Tables/TableBasic';

interface User {
	id: string;
	fullName: string;
	avatarUrl: string;
}

interface Project {
	id: string;
	project: string;
	logo: string;
	client: string;
	users: User[];
	status: string;
	statusColor: string;
	statusTextColor: string;
}

const mockTableData: Project[] = [
	{
		id: '1',
		project: 'Test Project 1',
		logo: 'test-logo-1.png',
		client: 'Client A',
		users: [
			{ id: '1', fullName: 'John Doe', avatarUrl: 'avatar1.png' },
			{ id: '2', fullName: 'Jane Doe', avatarUrl: 'avatar2.png' },
		],
		status: 'Active',
		statusColor: 'bg-green-100',
		statusTextColor: 'text-green-500',
	},
	{
		id: '2',
		project: 'Test Project 2',
		logo: 'test-logo-2.png',
		client: 'Client B',
		users: [
			{ id: '3', fullName: 'Alice Johnson', avatarUrl: 'avatar3.png' },
		],
		status: 'Pending',
		statusColor: 'bg-blue-100',
		statusTextColor: 'text-blue-500',
	},
];

describe('XTableBasic Component', () => {
	it('renders the table with correct headers', () => {
		render(<XTableBasic tableData={mockTableData} />);

		const headCells = screen.getAllByTestId('table-head-cell');

		expect(headCells[0]).toHaveTextContent('Project');
		expect(headCells[1]).toHaveTextContent('Client');
		expect(headCells[2]).toHaveTextContent('Users');
		expect(headCells[3]).toHaveTextContent('Status');
		expect(headCells[4]).toHaveTextContent('Actions');
	});

	it('renders the table data correctly', () => {
		render(<XTableBasic tableData={mockTableData} />);

		// Check for table data
		expect(screen.getByText(/Test Project 1/i)).toBeInTheDocument();
		expect(screen.getByText(/Client A/i)).toBeInTheDocument();
		expect(screen.getByText(/Active/i)).toBeInTheDocument();

		expect(screen.getByText(/Test Project 2/i)).toBeInTheDocument();
		expect(screen.getByText(/Client B/i)).toBeInTheDocument();
		expect(screen.getByText(/Pending/i)).toBeInTheDocument();
	});

	it('renders the correct number of users in the Users column', () => {
		render(<XTableBasic tableData={mockTableData} />);

		// Check user avatars in the first row
		const userAvatars = screen.getAllByRole('img', { name: /avatar/i });
		expect(userAvatars.length).toBe(3); // 2 for Project 1 and 1 for Project 2
	});
});
