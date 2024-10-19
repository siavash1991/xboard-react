import React from 'react';
import { render, screen } from '@testing-library/react';
import XCTACard from '@organisms/Cards/CTACard';

describe('XCTACard', () => {
	it('renders the card with the correct title and description', () => {
		render(<XCTACard />);

		const cardWrapper = screen.getByTestId('component-wrapper');
		expect(cardWrapper).toBeInTheDocument();

		const title = screen.getByTestId('xcta-card-title');
		expect(title).toBeInTheDocument();

		const description = screen.getByTestId('xcta-card-description');
		expect(description).toBeInTheDocument();

		const appleLink = screen.getByTestId('xcta-card-apple-link');
		expect(appleLink).toBeInTheDocument();

		const googlePlayLink = screen.getByTestId('xcta-card-google-play-link');
		expect(googlePlayLink).toBeInTheDocument();
	});
});
