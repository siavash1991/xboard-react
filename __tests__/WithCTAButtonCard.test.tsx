import React from 'react';
import { render, screen } from '@testing-library/react';
import XWithCTAButtonCard from '@organisms/Cards/WithCTAButton';

describe('XWithCTAButtonCard', () => {
	it('renders the card with correct elements', () => {
		render(<XWithCTAButtonCard />);

		// Check if the card title is rendered
		expect(
			screen.getByText(/Noteworthy technology acquisitions 2021/i)
		).toBeInTheDocument();

		// Check if the description is rendered
		expect(
			screen.getByText(
				/Here are the biggest enterprise technology acquisitions of 2021 so far/i
			)
		).toBeInTheDocument();

		// Check if the button is rendered
		expect(
			screen.getByRole('button', { name: /Read more/i })
		).toBeInTheDocument();
	});
});
