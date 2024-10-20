import React from 'react';
import { render, screen } from '@testing-library/react';
import XChartJsHorizontalBar from '@organisms/Charts/ChartJsHorizontalBar';

describe('XChartJsHorizontalBar', () => {
	it('renders the component header', () => {
		render(<XChartJsHorizontalBar />);
		const componentHeader = screen.getByTestId('component-header');
		expect(componentHeader).toBeInTheDocument();
	});

	it('renders the component body', () => {
		render(<XChartJsHorizontalBar />);
		const componentBody = screen.getByTestId('component-body');
		expect(componentBody).toBeInTheDocument();
	});

	it('renders the chart component', () => {
		render(<XChartJsHorizontalBar />);
		const chartElement = screen.getByTestId('chart-js');
		expect(chartElement).toBeInTheDocument();
	});

	it('renders the menu items in the header', () => {
		render(<XChartJsHorizontalBar />);
		const menuItem = screen.getByText('Today');
		expect(menuItem).toBeInTheDocument();
	});
});
