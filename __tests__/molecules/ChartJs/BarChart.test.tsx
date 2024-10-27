import React from 'react';
import { render, screen } from '@testing-library/react';
import XBarChart from '@molecules/ChartJs/BarChart';

describe('XBarChart', () => {
	it('renders the bar chart with the provided data and options', () => {
		const mockData = {
			labels: ['January', 'February', 'March'],
			datasets: [
				{
					label: 'My First Dataset',
					data: [65, 59, 80],
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
				},
			],
		};

		const mockOptions = {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		};

		render(<XBarChart data={mockData} options={mockOptions} />);

		expect(screen.getByTestId('chart-js')).toBeInTheDocument();
	});
});
