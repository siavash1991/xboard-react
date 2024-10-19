import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import XTableRowDropdownMenu from '@atoms/TableRowDropdownMenu';

describe('XTableRowDropdownMenu', () => {
	const mockMenuItems = [
		{ id: '1', label: 'Edit', onClick: jest.fn() },
		{ id: '2', label: 'Delete', onClick: jest.fn() },
	];

	it('renders dropdown menu', () => {
		render(<XTableRowDropdownMenu menuItems={mockMenuItems} />);
		expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();
	});

	it('opens and closes the dropdown menu', async () => {
		render(<XTableRowDropdownMenu menuItems={mockMenuItems} />);

		const toggleButton = screen.getByTestId('toggle-button');
		fireEvent.click(toggleButton);

		expect(screen.getByTestId('dropdown')).toBeVisible();

		// Click outside
		const outsideElement = document.createElement('div');
		document.body.appendChild(outsideElement);
		fireEvent.click(outsideElement); // Simulate click outside

		// Wait for the dropdown to close
		setTimeout(() => {
			expect(screen.getByTestId('dropdown')).not.toBeVisible();
		}, 0);
	});

	it('calls onClick function when menu item is clicked', () => {
		render(<XTableRowDropdownMenu menuItems={mockMenuItems} />);
		const toggleButton = screen.getByTestId('toggle-button');
		fireEvent.click(toggleButton);

		const editItem = screen.getByTestId('menu-item-1');
		fireEvent.click(editItem);
		expect(mockMenuItems[0].onClick).toHaveBeenCalled();
	});
});
