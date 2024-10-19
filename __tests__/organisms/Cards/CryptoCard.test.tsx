import React from 'react';
import { render, screen } from '@testing-library/react';
import XCryptoCard from '@organisms/Cards/CryptoCard';

describe('XCryptoCard', () => {
	it('renders correctly', () => {
		render(<XCryptoCard />);

		// Check if the card is in the document
		expect(screen.getByTestId('component-wrapper')).toBeInTheDocument();
		expect(screen.getByTestId('crypto-card-title')).toHaveTextContent(
			'Connect wallet'
		);
		expect(
			screen.getByTestId('crypto-card-link-metamask')
		).toBeInTheDocument();
		expect(
			screen.getByTestId('crypto-card-link-other')
		).toBeInTheDocument();
	});
});
