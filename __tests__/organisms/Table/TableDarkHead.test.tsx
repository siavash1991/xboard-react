import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import XDarkHeadTable from '@organisms/Tables/TableDarkHead';

// Mock for assets
jest.mock('@assets/images/avatars/5.png', () => 'avatar5.png');
jest.mock('@assets/images/avatars/6.png', () => 'avatar6.png');
jest.mock('@assets/images/avatars/7.png', () => 'avatar7.png');

describe('XDarkHeadTable', () => {
	const tableHeaders = ['Project', 'Client', 'Users', 'Status', 'Actions'];

	it('renders table with correct headers', () => {
		render(<XDarkHeadTable />);

		tableHeaders.forEach((header) => {
			expect(screen.getByText(header)).toBeInTheDocument();
		});
	});

	it('renders default data', () => {
		render(<XDarkHeadTable />);

		// Check for one of the default project names
		expect(screen.getByText('Laravel Project')).toBeInTheDocument();
		expect(screen.getByText('VueJs Project')).toBeInTheDocument();
		expect(screen.getByText('Figma Design')).toBeInTheDocument();
		expect(screen.getByText('React Project')).toBeInTheDocument();

		// Check for one of the default client names
		expect(screen.getByText('Olivia Parker')).toBeInTheDocument();
		expect(screen.getByText('Liam Carter')).toBeInTheDocument();
	});

	it('renders users with avatars', () => {
		render(<XDarkHeadTable />);

		// Check if avatars are rendered correctly
		expect(screen.getAllByAltText(/Avatar of/).length).toBeGreaterThan(0);
	});

	it('renders status with correct styles', () => {
		render(<XDarkHeadTable />);

		// Check for a status with specific styling
		const status = screen.getByText('Active');
		expect(status).toHaveClass('bg-green-100');
		expect(status).toHaveClass('text-green-500');
	});

	it('renders dropdown actions for each row', () => {
		render(<XDarkHeadTable />);

		// Check for at least one dropdown menu button (from XTableRowDropdownMenu)
		const actionsButton = screen.getAllByRole('button');
		expect(actionsButton.length).toBeGreaterThan(0);
	});

	it('triggers edit and delete actions from the dropdown menu', () => {
		window.alert = jest.fn(); // Mock alert function

		render(<XDarkHeadTable />);

		// Open the dropdown menu of the first row
		const actionButtons = screen.getAllByRole('button');
		fireEvent.click(actionButtons[0]); // Click the first dropdown button

		// Find the dropdown menu within the first row and click "Edit"
		const dropdownMenu = screen.getAllByText('Edit')[0]; // First "Edit" option
		fireEvent.click(dropdownMenu);
		expect(window.alert).toHaveBeenCalledWith('Edit action');

		// Find the first "Delete" option and click it
		const deleteOption = screen.getAllByText('Delete')[0]; // First "Delete" option
		fireEvent.click(deleteOption);
		expect(window.alert).toHaveBeenCalledWith('Delete action');
	});
});
