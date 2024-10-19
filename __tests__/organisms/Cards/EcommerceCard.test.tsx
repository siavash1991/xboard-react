import React from 'react';
import { render, screen } from '@testing-library/react';
import XEcommerceCard from '@organisms/Cards/EcommerceCard';
import createRatingStars from '@utils/ratingStars';

// Mock the utility function to control the output in tests
jest.mock('@utils/ratingStars', () => ({
	__esModule: true,
	default: jest.fn(),
}));

describe('XEcommerceCard', () => {
	beforeEach(() => {
		// Set up the mock implementation
		(createRatingStars as jest.Mock).mockReturnValue([
			{ id: 1, filled: true },
			{ id: 2, filled: true },
			{ id: 3, filled: true },
			{ id: 4, filled: false },
			{ id: 5, filled: false },
		]);
	});

	it('renders the card with correct title, rating, price, and button', () => {
		render(<XEcommerceCard />);

		// Check if the card title is rendered
		const titleElement = screen.getByTestId('card-title');
		expect(titleElement).toBeInTheDocument();
		expect(titleElement).toHaveTextContent(
			'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport'
		);

		// Check if the correct number of filled stars are rendered
		const filledStars = screen.getAllByRole('img', {
			name: /filled star/i,
		});
		expect(filledStars.length).toBe(3); // Change based on the expected number of filled stars

		// Check if the rating value is rendered
		const ratingValueElement = screen.getByTestId('card-rating-value');
		expect(ratingValueElement).toBeInTheDocument();

		// Check if the price is rendered
		const priceElement = screen.getByTestId('card-price');
		expect(priceElement).toBeInTheDocument();

		// Check if the add to cart button is rendered
		const buttonElement = screen.getByTestId('add-to-cart-button');
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveTextContent('Add to cart');
	});
});
