import React from 'react';
import { render, screen } from '@testing-library/react';
import XChartJsBubble from '@organisms/Charts/ChartJsBubble';

describe('XChartJsBubble', () => {
	it('renders the component header', () => {
		render(<XChartJsBubble />);
		const componentHeader = screen.getByTestId('component-header');
		expect(componentHeader).toBeInTheDocument();
	});

	it('renders the component body', () => {
		render(<XChartJsBubble />);
		const componentBody = screen.getByTestId('component-body');
		expect(componentBody).toBeInTheDocument();
	});

	it('renders the BubbleChart', () => {
		render(<XChartJsBubble />);
		const bubbleChart = screen.getByTestId('chart-js');
		expect(bubbleChart).toBeInTheDocument();
	});
});
