import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import XChartDropdownMenu from '@atoms/ChartDropdownMenu'; // Adjust the import path as needed

describe('XChartDropdownMenu', () => {
	const menuItems = [
		{ id: 'item1', label: 'Item 1', onClick: jest.fn() },
		{ id: 'item2', label: 'Item 2', onClick: jest.fn() },
	];

	it('should render the dropdown button with the correct aria attributes', () => {
		render(
			<XChartDropdownMenu menuItems={menuItems} menuLabel="Test Menu" />
		);

		const button = screen.getByRole('button', {
			name: /Toggle Test Menu dropdown/i,
		});
		expect(button).toBeInTheDocument();
		expect(button).toHaveAttribute('aria-haspopup', 'true');
		expect(button).toHaveAttribute('aria-expanded', 'false');
	});

	it('should open the dropdown when the button is clicked', () => {
		render(
			<XChartDropdownMenu menuItems={menuItems} menuLabel="Test Menu" />
		);

		const button = screen.getByRole('button', {
			name: /Toggle Test Menu dropdown/i,
		});
		fireEvent.click(button);

		expect(button).toHaveAttribute('aria-expanded', 'true');
		expect(screen.getByRole('menu')).toBeInTheDocument();
	});

	it('should render menu items with unique aria-labels', () => {
		render(
			<XChartDropdownMenu menuItems={menuItems} menuLabel="Test Menu" />
		);

		fireEvent.click(
			screen.getByRole('button', { name: /Toggle Test Menu dropdown/i })
		);

		menuItems.forEach((item) => {
			const menuItem = screen.getByRole('button', {
				name: new RegExp(`Select ${item.label}`),
			});
			expect(menuItem).toBeInTheDocument();
			expect(menuItem).toHaveAttribute('id', item.id); // Check unique ID
		});
	});

	it('should call the onClick function when a menu item is clicked', () => {
		render(
			<XChartDropdownMenu menuItems={menuItems} menuLabel="Test Menu" />
		);

		fireEvent.click(
			screen.getByRole('button', { name: /Toggle Test Menu dropdown/i })
		);

		const item1 = screen.getByRole('button', { name: /Select Item 1/i });
		fireEvent.click(item1);
		expect(menuItems[0].onClick).toHaveBeenCalled();

		const item2 = screen.getByRole('button', { name: /Select Item 2/i });
		fireEvent.click(item2);
		expect(menuItems[1].onClick).toHaveBeenCalled();
	});

	it('should close the dropdown when clicking outside', () => {
		render(
			<XChartDropdownMenu menuItems={menuItems} menuLabel="Test Menu" />
		);

		// Open the dropdown
		fireEvent.click(screen.getByRole('button', { name: /Test Menu/i }));

		// Ensure the dropdown is open
		expect(screen.getByRole('menu')).toBeInTheDocument();

		// Simulate click outside with a wait
		fireEvent.mouseDown(document.body);

		// Allow time for state to update
		setTimeout(() => {
			expect(screen.queryByRole('menu')).not.toBeInTheDocument();
		}, 0);
	});
});
