import React from 'react';
import { render, screen } from '@testing-library/react';
import PageTitle from '@atoms/PageTitle';

describe('PageTitle', () => {
	it('should render the title correctly', () => {
		const testTitle = 'Test Page Title';
		render(<PageTitle title={testTitle} />);

		// Check if the title is rendered
		expect(screen.getByTestId('page-title')).toBeInTheDocument();
		expect(screen.getByText(testTitle)).toBeInTheDocument();
	});
});
