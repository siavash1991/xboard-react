import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import XSearch from '@atoms/Search';

describe('XSearch', () => {
	test('focuses the input when Ctrl + / is pressed', () => {
		render(<XSearch />);

		// Simulate pressing Ctrl + /
		fireEvent.keyDown(window, { ctrlKey: true, key: '/' });

		// Assert that the input is focused
		const input = screen.getByPlaceholderText('Search ( Ctrl + / )');
		expect(input).toHaveFocus();
	});

	test('renders the search input and icon', () => {
		render(<XSearch />);
		const input = screen.getByPlaceholderText('Search ( Ctrl + / )');
		const icon = screen.getByTestId('search-icon'); // Use the data-testid you added

		expect(input).toBeInTheDocument();
		expect(icon).toBeInTheDocument(); // Now this checks for the correct element
	});
});
