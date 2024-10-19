import React from 'react';
import { render, screen } from '@testing-library/react';
import XApexAreaCard from '@organisms/Charts/ApexAreaChart';

describe('XApexAreaCard', () => {
	it('renders the component wrapper', () => {
		render(<XApexAreaCard />);
		const componentWrapper = screen.getByTestId('component-wrapper');
		expect(componentWrapper).toBeInTheDocument();
	});

	it('renders the component header with title and subtitle', () => {
		render(<XApexAreaCard />);
		const componentHeader = screen.getByTestId('component-header');
		expect(componentHeader).toBeInTheDocument();
	});

	it('renders the arrow icon in the header', () => {
		render(<XApexAreaCard />);
		const arrowIcon = screen.getByTestId('arrow-icon');
		expect(arrowIcon).toBeInTheDocument();
	});

	it('renders the component body', () => {
		render(<XApexAreaCard />);
		const componentBody = screen.getByTestId('component-body');
		expect(componentBody).toBeInTheDocument();
	});

	it('renders the ApexChart component', () => {
		render(<XApexAreaCard />);
		const apexChart = screen.getByTestId('apex-chart');
		expect(apexChart).toBeInTheDocument();
	});
});
