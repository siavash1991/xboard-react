import React from 'react';
import { render, screen } from '@testing-library/react';
import XApexTechnologiesChart from '@organisms/Charts/ApexTechnologiesChart';

describe('XApexTechnologiesChart', () => {
	it('renders the chart component header', () => {
		render(<XApexTechnologiesChart />);
		const componentHeader = screen.getByTestId('component-header');
		expect(componentHeader).toBeInTheDocument();
	});
	it('renders the component body', () => {
		render(<XApexTechnologiesChart />);
		const componentBody = screen.getByTestId('component-body');
		expect(componentBody).toBeInTheDocument();
	});

	it('renders the ApexCharts component', () => {
		render(<XApexTechnologiesChart />);
		const apexChart = screen.getByTestId('apex-chart');
		expect(apexChart).toBeInTheDocument();
	});
});
