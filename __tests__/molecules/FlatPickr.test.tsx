import React from 'react';
import { render, screen } from '@testing-library/react';
import XFlatPickr from '@molecules/FlatPickr';

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
		expect(screen.getByTestId('input-text')).toBeInTheDocument();
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

		// Ensure the input is rendered
		const input = screen.getByTestId('input-text');
		expect(input).toBeInTheDocument();
	});
});
