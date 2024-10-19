import React from 'react';
import { render, screen } from '@testing-library/react';
import XLoadingSpinner from '@atoms/LoadingSpinner';

describe('XLoadingSpinner', () => {
	it('should render the loading spinner', () => {
		render(<XLoadingSpinner />);

		// Check if the loading spinner is in the document
		expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();

		// Optionally check if the spinner div is present
		expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
	});
});
