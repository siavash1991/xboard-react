import React from 'react';
import { render, screen } from '@testing-library/react';
import ComponentBody from '@atoms/ComponentBody';

describe('ComponentBody', () => {
	it('should render children correctly', () => {
		render(<ComponentBody>Test Content</ComponentBody>);
		expect(screen.getByText(/Test Content/i)).toBeInTheDocument();
	});

	it('should apply the default className', () => {
		render(<ComponentBody>Test Content</ComponentBody>);
		expect(screen.getByTestId('component-body')).toHaveClass(
			'component-body p-10 pt-0'
		);
	});

	it('should apply custom className', () => {
		render(
			<ComponentBody className="custom-class">Test Content</ComponentBody>
		);
		expect(screen.getByTestId('component-body')).toHaveClass(
			'custom-class'
		);
	});
});
