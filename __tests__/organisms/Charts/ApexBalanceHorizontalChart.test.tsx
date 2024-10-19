import React from 'react';
import { render, screen } from '@testing-library/react';
import XApexBalanceHorizontalCard from '@organisms/Charts/ApexBalanceHorizontalChart';

describe('XApexBalanceHorizontalCard', () => {
	it('renders the component header with title and subtitle', () => {
		render(<XApexBalanceHorizontalCard />);
		const headerTitle = screen.getByText(/balance/i);
		const headerSubtitle = screen.getByText(/\$74,382.72/i);
		expect(headerTitle).toBeInTheDocument();
		expect(headerSubtitle).toBeInTheDocument();
	});

	it('renders the ApexChart component', () => {
		render(<XApexBalanceHorizontalCard />);
		const apexChart = screen.getByTestId('apex-chart');
		expect(apexChart).toBeInTheDocument();
	});

	it('renders the arrow icon in the header', () => {
		render(<XApexBalanceHorizontalCard />);
		const arrowIcon = screen.getByTestId('arrow-icon');
		expect(arrowIcon).toBeInTheDocument();
	});
});
