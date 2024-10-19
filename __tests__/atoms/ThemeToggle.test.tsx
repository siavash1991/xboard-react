import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import XThemeToggle from '@atoms/ThemeToggle';

beforeEach(() => {
	// Reset mock implementation before each test
	jest.clearAllMocks();
});

describe('XThemeToggle', () => {
	it('renders the theme toggle button', () => {
		render(<XThemeToggle />);
		expect(screen.getByTestId('theme-toggle-button')).toBeInTheDocument();
	});

	it('opens and closes the dropdown menu', () => {
		render(<XThemeToggle />);

		const toggleButton = screen.getByTestId('theme-toggle-button');
		fireEvent.click(toggleButton);
		expect(screen.getByTestId('theme-dropdown')).toBeVisible();

		// Click outside to close the dropdown
		fireEvent.mouseDown(document);
		setTimeout(() => {
			expect(screen.queryByTestId('theme-dropdown')).not.toBeVisible();
		}, 0);
	});

	it('calls the appropriate theme change function when a theme is selected', () => {
		render(<XThemeToggle />);
		const toggleButton = screen.getByTestId('theme-toggle-button');
		fireEvent.click(toggleButton);

		const lightThemeButton = screen.getByTestId('theme-button-light');
		fireEvent.click(lightThemeButton);

		expect(localStorage.getItem('color-theme')).toBe('light');
	});
});
