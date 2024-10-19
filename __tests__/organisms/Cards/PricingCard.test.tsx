import React from 'react';
import { render, screen } from '@testing-library/react';
import XPricingCard from '@organisms/Cards/PricingCard';

describe('XPricingCard', () => {
	it('renders the pricing card with correct elements', () => {
		render(<XPricingCard />);

		// Check if the card is rendered
		expect(screen.getByText('Standard plan')).toBeInTheDocument();
		expect(screen.getByText('/month')).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: /choose plan/i })
		).toBeInTheDocument();
	});
	it('renders features correctly', () => {
		render(<XPricingCard />);

		expect(screen.getByTestId('feature-1')).toBeInTheDocument();
		expect(screen.getByTestId('feature-2')).toBeInTheDocument();
		expect(screen.getByTestId('feature-3')).toBeInTheDocument();
	});
});
