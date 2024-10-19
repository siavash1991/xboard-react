import React from 'react';
import { render, screen } from '@testing-library/react';
import ComponentWrapper from '@atoms/ComponentWrapper';

describe('ComponentWrapper', () => {
	it('should render without crashing', () => {
		render(<ComponentWrapper>Test Content</ComponentWrapper>);

		// Check if the component wrapper is in the document
		expect(screen.getByTestId('component-wrapper')).toBeInTheDocument();
		expect(screen.getByTestId('inner-wrapper')).toBeInTheDocument();
	});

	it('should render children correctly', () => {
		render(
			<ComponentWrapper>
				<span data-testid="child-element">Child Element</span>
			</ComponentWrapper>
		);

		// Check if the child element is rendered
		expect(screen.getByTestId('child-element')).toBeInTheDocument();
		expect(screen.getByText('Child Element')).toBeInTheDocument();
	});

	it('should apply custom className when provided', () => {
		const customClass = 'bg-red-500';
		render(
			<ComponentWrapper className={customClass}>
				Test Content
			</ComponentWrapper>
		);

		const wrapper = screen.getByTestId('component-wrapper');
		expect(wrapper).toHaveClass(customClass);
	});
});
