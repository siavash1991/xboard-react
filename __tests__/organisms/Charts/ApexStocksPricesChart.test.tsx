import React from 'react';
import { render, screen } from '@testing-library/react';
import XApexStocksPricesChart from '@organisms/Charts/ApexStocksPricesChart';

describe('XApexStocksPricesChart', () => {
	it('renders the chart component with correct title and subtitle', () => {
		render(<XApexStocksPricesChart />);
		expect(screen.getByText('Stocks Prices')).toBeInTheDocument();
		expect(screen.getByText('$50,863.98')).toBeInTheDocument();
	});

	it('renders the ChevronDownIcon', () => {
		render(<XApexStocksPricesChart />);
		const arrowIcon = screen.getByTestId('arrow-icon');
		expect(arrowIcon).toBeInTheDocument();
	});

	it('renders the ApexCharts component', () => {
		render(<XApexStocksPricesChart />);
		const apexChart = screen.getByTestId('apex-chart');
		expect(apexChart).toBeInTheDocument();
	});
});
