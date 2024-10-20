import React from 'react';
import { render, screen } from '@testing-library/react';
import XChartJsPolar from '@organisms/Charts/ChartJsPolar';

describe('XChartJsPolar', () => {
	it('renders the component header', () => {
		render(<XChartJsPolar />);
		const componentHeader = screen.getByTestId('component-header');
		expect(componentHeader).toBeInTheDocument();
	});

	it('renders the component body', () => {
		render(<XChartJsPolar />);
		const componentBody = screen.getByTestId('component-body');
		expect(componentBody).toBeInTheDocument();
	});

	it('renders the polar chart component', () => {
		render(<XChartJsPolar />);
		const polarChart = screen.getByTestId('chart-js');
		expect(polarChart).toBeInTheDocument();
	});
	it('renders the menu items in the header', () => {
		render(<XChartJsPolar />);
		const menuItems = ['Monthly', 'Quarterly', 'Yearly'];
		menuItems.forEach((item) => {
			expect(screen.getByText(item)).toBeInTheDocument();
		});
	});
});
