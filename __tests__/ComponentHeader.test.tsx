import React from 'react';
import { render, screen } from '@testing-library/react';
import XComponentHeader from '@atoms/ComponentHeader';

describe('XComponentHeader', () => {
	it('should render the title and subtitle correctly', () => {
		render(
			<XComponentHeader title="Header Title" subtitle="Header Subtitle" />
		);

		expect(screen.getByTestId('title')).toBeInTheDocument();
		expect(screen.getByText(/header title/i)).toBeInTheDocument();
		expect(screen.getByText(/header subtitle/i)).toBeInTheDocument();
	});

	it('should render the value and change percentage when provided', () => {
		render(
			<XComponentHeader
				value="$78,000"
				changePercentage="+10%"
				isPositiveChange={true}
			/>
		);

		expect(screen.getByTestId('value')).toBeInTheDocument();
		expect(screen.getByText('$78,000')).toBeInTheDocument();
		expect(screen.getByText('+10%')).toBeInTheDocument();

		const changePercentageElement = screen.getByTestId('change-percentage');
		expect(changePercentageElement).toHaveClass(
			'bg-green-500 dark:bg-gray-500 text-green-600 dark:text-green-100'
		);

		// Check for the presence of the Heroicon SVG
		expect(screen.getByTestId('arrow-up-icon')).toBeInTheDocument();
	});

	it('should render the ArrowDownIcon when change is negative', () => {
		render(
			<XComponentHeader
				value="$78,000"
				changePercentage="-5%"
				isPositiveChange={false} // Ensure this is false for ArrowDownIcon
			/>
		);

		expect(screen.getByTestId('value')).toBeInTheDocument();
		expect(screen.getByText('$78,000')).toBeInTheDocument();
		expect(screen.getByText('-5%')).toBeInTheDocument();

		const changePercentageElement = screen.getByTestId('change-percentage');
		expect(changePercentageElement).toHaveClass(
			'bg-red-100 dark:bg-red-200 text-red-600 dark:text-red-100' // Update the expected class for negative changes
		);

		// Check for the presence of the ArrowDownIcon
		expect(screen.getByTestId('arrow-down-icon')).toBeInTheDocument(); // Check for ArrowDownIcon
	});

	it('should render the dropdown menu when no value or change percentage is provided', () => {
		const menuItems = [
			{ id: 'item1', label: 'Item 1', onClick: jest.fn() },
			{ id: 'item2', label: 'Item 2', onClick: jest.fn() },
		];

		render(
			<XComponentHeader title="Header with Menu" menuItems={menuItems} />
		);

		expect(
			screen.getByTestId('dropdown-menu-placeholder')
		).toBeInTheDocument();
	});

	it('should render without crashing when no props are provided', () => {
		render(<XComponentHeader />);

		// Ensure that the component renders without throwing errors
		expect(screen.getByTestId('component-header')).toBeInTheDocument();
	});
});
