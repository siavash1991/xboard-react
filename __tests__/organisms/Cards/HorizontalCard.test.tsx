import { render, screen } from '@testing-library/react';
import XHorizontalCard from '@organisms/Cards/HorizontalCard';

describe('XHorizontalCard', () => {
	it('should render the card wrapper', () => {
		render(<XHorizontalCard />);
		expect(screen.getByTestId('component-wrapper')).toBeInTheDocument();
	});

	it('should render the card title', () => {
		render(<XHorizontalCard />);
		expect(screen.getByTestId('horizontal-card-title')).toBeInTheDocument();
	});

	it('should render the card description', () => {
		render(<XHorizontalCard />);
		expect(
			screen.getByTestId('horizontal-card-description')
		).toBeInTheDocument();
	});
});
