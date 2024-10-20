import React from 'react';
import { render, screen } from '@testing-library/react';
import XChartJsBar from '@organisms/Charts/ChartJsBar';

describe('XChartJsBar', () => {
	it('renders the chart component header', () => {
		render(<XChartJsBar />);
		const componentHeader = screen.getByTestId('component-header');
		expect(componentHeader).toBeInTheDocument();
	});

	it('renders the component body', () => {
		render(<XChartJsBar />);
		const componentBody = screen.getByTestId('component-body');
		expect(componentBody).toBeInTheDocument();
	});

	it('renders the Chart.js component', () => {
		render(<XChartJsBar />);
		const chartElement = screen.getByTestId('chart-js');
		expect(chartElement).toBeInTheDocument();
	});
});
