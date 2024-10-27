import React from 'react';
import { render, screen } from '@testing-library/react';
import XPolarChart from '@molecules/ChartJs/PolarChart';
import { ChartOptions } from 'chart.js';

describe('XPolarChart', () => {
	const mockData = {
		labels: ['Red', 'Blue', 'Yellow'],
		datasets: [
			{
				label: 'My First dataset',
				data: [11, 16, 7],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
				],
				borderWidth: 1,
			},
		],
	};

	const mockOptions: ChartOptions<'polarArea'> = {
		responsive: true,
	};

	it('renders the polar chart with the provided data', () => {
		render(<XPolarChart data={mockData} options={mockOptions} />);
		expect(screen.getByTestId('chart-js')).toBeInTheDocument();
	});
});
