import React from 'react';
import { render, screen } from '@testing-library/react';
import XChartJsRadar from '@organisms/Charts/ChartJsRadar';

describe('XChartJsRadar', () => {
	it('renders the component header', () => {
		render(<XChartJsRadar />);
		const componentHeader = screen.getByTestId('component-header');
		expect(componentHeader).toBeInTheDocument();
	});

	it('renders the component body', () => {
		render(<XChartJsRadar />);
		const componentBody = screen.getByTestId('component-body');
		expect(componentBody).toBeInTheDocument();
	});

	it('renders the radar chart component', () => {
		render(<XChartJsRadar />);
		const radarChart = screen.getByTestId('chart-js'); // Ensure your radar chart has this test ID
		expect(radarChart).toBeInTheDocument();
	});

	it('displays the correct title in the header', () => {
		render(<XChartJsRadar />);
		const title = screen.getByText('Radar Chart');
		expect(title).toBeInTheDocument();
	});

	it('renders the menu items in the header', () => {
		render(<XChartJsRadar />);
		const menuItems = ['Daily', 'Weekly', 'Monthly'];
		menuItems.forEach((item) => {
			expect(screen.getByText(item)).toBeInTheDocument();
		});
	});
});
