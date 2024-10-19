import React from 'react';
import { render, screen } from '@testing-library/react';
import XApexBarChart from '@organisms/Charts/ApexBarChart';

describe('XApexBarChart', () => {
	it('renders the component wrapper', () => {
		render(<XApexBarChart />);
		const componentWrapper = screen.getByTestId('component-wrapper');
		expect(componentWrapper).toBeInTheDocument();
	});

	it('renders the component header with title and subtitle', () => {
		render(<XApexBarChart />);
		const componentHeader = screen.getByTestId('component-header');
		expect(componentHeader).toBeInTheDocument();
	});

	it('renders the arrow icon in the header', () => {
		render(<XApexBarChart />);
		const arrowIcon = screen.getByTestId('arrow-icon');
		expect(arrowIcon).toBeInTheDocument();
	});

	it('renders the component body', () => {
		render(<XApexBarChart />);
		const componentBody = screen.getByTestId('component-body');
		expect(componentBody).toBeInTheDocument();
	});

	it('renders the ApexCharts component', () => {
		render(<XApexBarChart />);
		const apexChart = screen.getByTestId('apex-chart');
		expect(apexChart).toBeInTheDocument();
	});
});
