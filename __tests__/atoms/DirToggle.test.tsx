import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import XDirToggle from '@atoms/DirToggle';

describe('XDirToggle', () => {
	it('should render the button with initial text', () => {
		render(<XDirToggle />);

		expect(screen.getByTestId('dir-toggle-button')).toBeInTheDocument();
		expect(screen.getByTestId('dir-toggle-button')).toHaveTextContent(
			'RTL'
		);
	});

	it('should toggle direction on click', () => {
		render(<XDirToggle />);

		const button = screen.getByTestId('dir-toggle-button');

		fireEvent.click(button);
		expect(button).toHaveTextContent('LTR');

		fireEvent.click(button);
		expect(button).toHaveTextContent('RTL');
	});
});
