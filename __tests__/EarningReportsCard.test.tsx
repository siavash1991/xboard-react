import React from 'react';
import { render, screen } from '@testing-library/react';
import XEarningReportsCard from '@organisms/Cards/EarningReport';

jest.mock('react-apexcharts', () => () => <div data-testid="apex-chart" />);

describe('XEarningReportsCard', () => {
	test('renders the card with correct title, subtitle, and data', () => {
		render(<XEarningReportsCard />);

		// Check for the header
		expect(screen.getByTestId('component-header')).toBeInTheDocument();
		expect(screen.getByText(/earning reports/i)).toBeInTheDocument();

		// Check if the correct number of items are rendered
		const items = screen.getAllByTestId(/earning-report-/);
		expect(items.length).toBe(3); // Change based on the expected number of items

		// Check for specific item details
		expect(screen.getByText(/net profit/i)).toBeInTheDocument();
		expect(screen.getByText(/total income/i)).toBeInTheDocument();
		expect(screen.getByText(/total expenses/i)).toBeInTheDocument();

		// Check for the chart
		expect(screen.getByTestId('apex-chart')).toBeInTheDocument();
	});
});
