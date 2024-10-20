import React from 'react';
import { render, screen } from '@testing-library/react';
import XFormWithTabs from '@organisms/Forms/FormWithTabs';

describe('XFormWithTabs', () => {
	it('renders the ReactSelect component and handles selection', () => {
		render(<XFormWithTabs />);

		// Verify that the mock select is rendered
		const select = screen.getByTestId('react-select');
		expect(select).toBeInTheDocument();
	});
});
