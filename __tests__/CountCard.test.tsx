import React from 'react';
import { render, screen } from '@testing-library/react';
import XCountCard from '@molecules/CountCard';

describe('XCountCard', () => {
	const title = 'Test Title';
	const content = 'This is a test content.';
	const iconName = 'Star';

	it('renders the count card with the provided title, content, and icon', () => {
		render(
			<XCountCard title={title} content={content} iconName={iconName} />
		);

		expect(screen.getByTestId('card-title')).toHaveTextContent(title);
		expect(screen.getByTestId('card-content')).toHaveTextContent(content);
		expect(screen.getByTestId('card-icon')).toBeInTheDocument();
	});
});
