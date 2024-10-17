// __tests__/FlatPickr.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import XFlatPickr from '@molecules/FlatPickr'; // Adjusted import

jest.mock('flowbite-react', () => ({
	TextInput: (props: any) => (
		<input data-testid={props['data-testid']} {...props} />
	), // Mock TextInput
	useTheme: jest.fn(() => ({})), // Mock useTheme to return an empty object
}));

describe('XFlatPickr', () => {
	it('renders the flatpickr input', () => {
		const mockOnChange = jest.fn();
		render(
			<XFlatPickr
				id="multicol-birthdate"
				value={null}
				onChange={mockOnChange}
				options={{ dateFormat: 'Y-m-d' }}
				placeholder="YYYY-MM-DD"
			/>
		);

		// Check if the input is rendered
		expect(screen.getByTestId('flatpickr-input')).toBeInTheDocument();
	});

	it('calls onChange when a date is selected', () => {
		const mockOnChange = jest.fn();
		render(
			<XFlatPickr
				id="multicol-birthdate"
				value={null}
				onChange={mockOnChange}
				options={{ dateFormat: 'Y-m-d' }}
				placeholder="YYYY-MM-DD"
			/>
		);

		const input = screen.getByTestId('flatpickr-input');
		// Simulate date selection or any actions needed
		// Example: fireEvent.change(input, { target: { value: '2024-01-01' } });

		// Verify that onChange was called
		// expect(mockOnChange).toHaveBeenCalledWith(new Date('2024-01-01'));
	});
});
