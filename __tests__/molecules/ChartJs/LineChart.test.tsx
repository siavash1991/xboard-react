import React from 'react';
import { render, screen } from '@testing-library/react';
import XLineChart from '@molecules/ChartJs/LineChart'; // Adjust the import path if necessary
import { ChartData, ChartOptions } from 'chart.js';

describe('XLineChart', () => {
	const mockData: ChartData<'line'> = {
		labels: ['January', 'February', 'March'],
		datasets: [
			{
				label: 'My First dataset',
				data: [0, 10, 5],
				borderColor: 'rgb(75, 192, 192)',
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
			},
		],
	};

	const mockOptions: ChartOptions<'line'> = {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	};

	it('renders the line chart with the provided data', () => {
		render(<XLineChart data={mockData} options={mockOptions} />);
		expect(screen.getByTestId('chart-js')).toBeInTheDocument();
	});
});
