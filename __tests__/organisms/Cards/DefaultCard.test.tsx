import React from 'react';
import { render, screen } from '@testing-library/react';
import XDefaultCard from '@organisms/Cards/DefaultCard';

describe('XDefaultCard', () => {
	it('renders the card with the correct title and description', () => {
		render(<XDefaultCard />);

		const cardWrapper = screen.getByTestId('component-wrapper');
		expect(cardWrapper).toBeInTheDocument();

		const title = screen.getByTestId('xdefault-card-title');
		expect(title).toBeInTheDocument();

		const description = screen.getByTestId('xdefault-card-description');
		expect(description).toBeInTheDocument();
	});
});
