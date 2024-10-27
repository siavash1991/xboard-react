import React from 'react';
import { render, screen } from '@testing-library/react';
import XBubbleChart from '@molecules/ChartJs/BubbleChart';

describe('XBubbleChart', () => {
	it('renders the bubble chart with the provided data', () => {
		const mockData = {
			labels: ['A', 'B', 'C'],
			datasets: [
				{
					label: 'My Bubble Dataset',
					data: [
						{ x: 10, y: 20, r: 15 },
						{ x: 15, y: 25, r: 10 },
						{ x: 20, y: 30, r: 20 },
					],
				},
			],
		};

		render(<XBubbleChart data={mockData} />);

		expect(screen.getByTestId('chart-js')).toBeInTheDocument();
	});
});
