import React from 'react';
import { render, screen } from '@testing-library/react';
import XRadarChart from '@molecules/ChartJs/RadarChart';
import { ChartOptions } from 'chart.js';

describe('XRadarChart', () => {
	const mockData = {
		labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
		datasets: [
			{
				label: 'My First dataset',
				data: [20, 10, 4, 2],
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
			},
		],
	};

	const mockOptions: ChartOptions<'radar'> = {
		responsive: true,
	};

	it('renders the radar chart with the provided data', () => {
		render(<XRadarChart data={mockData} options={mockOptions} />);
		expect(screen.getByTestId('chart-js')).toBeInTheDocument();
	});
});
