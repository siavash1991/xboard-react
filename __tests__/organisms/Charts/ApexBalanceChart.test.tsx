import React from 'react';
import { render, screen } from '@testing-library/react';
import XApexBalanceCard from '@organisms/Charts/ApexBalanceChart';

describe('XApexBalanceCard', () => {
	it('renders the component header with title and subtitle', () => {
		render(<XApexBalanceCard />);
		const headerTitle = screen.getByText(/balance/i);
		const headerSubtitle = screen.getByText(
			/commercial networks & enterprises/i
		);
		expect(headerTitle).toBeInTheDocument();
		expect(headerSubtitle).toBeInTheDocument();
	});

	it('renders the ApexChart component', () => {
		render(<XApexBalanceCard />);
		const apexChart = screen.getByTestId('apex-chart');
		expect(apexChart).toBeInTheDocument();
	});
});
