import React from 'react';
import { render, screen } from '@testing-library/react';
import XGridContainer from '@atoms/GridContainer';

describe('XGridContainer', () => {
	it('should render the grid container with children', () => {
		render(
			<XGridContainer className="content-wrapper">
				<div>Child Element</div>
			</XGridContainer>
		);

		expect(screen.getByTestId('grid-container')).toBeInTheDocument();

		expect(screen.getByTestId('grid-container')).toHaveClass(
			'content-wrapper'
		);
	});
});
