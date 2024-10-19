import { render, screen } from '@testing-library/react';
import XWithImageCard from '@organisms/Cards/ImageCard';

describe('XWithImageCard', () => {
	it('should render the card wrapper', () => {
		render(<XWithImageCard />);
		expect(screen.getByTestId('component-wrapper')).toBeInTheDocument();
	});

	it('should render the card title', () => {
		render(<XWithImageCard />);
		expect(screen.getByTestId('with-image-card-title')).toHaveTextContent(
			'Noteworthy technology acquisitions 2021'
		);
	});

	it('should render the card description', () => {
		render(<XWithImageCard />);
		expect(
			screen.getByTestId('with-image-card-description')
		).toHaveTextContent(
			'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
		);
	});
});
