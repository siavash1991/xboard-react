import React from 'react';
import { render, screen } from '@testing-library/react';
import XChartJsLine from '@organisms/Charts/ChartJsLine';

describe('XChartJsLine', () => {
	it('renders the component header', () => {
		render(<XChartJsLine />);
		const componentHeader = screen.getByTestId('component-header');
		expect(componentHeader).toBeInTheDocument();
	});

	it('renders the component body', () => {
		render(<XChartJsLine />);
		const componentBody = screen.getByTestId('component-body');
		expect(componentBody).toBeInTheDocument();
	});

	it('renders the line chart component', () => {
		render(<XChartJsLine />);
		const lineChart = screen.getByTestId('chart-js');
		expect(lineChart).toBeInTheDocument();
	});
});
