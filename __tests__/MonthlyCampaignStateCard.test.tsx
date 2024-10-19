import { render, screen } from '@testing-library/react';
import XMonthlyCampaignStateCard from '@organisms/Cards/MonthlyCampaignState';

const data = [
	{
		id: 1,
		label: 'Emails',
		value: '12,346',
		change: '0.3%',
		icon: 'mail',
	},
	{
		id: 2,
		label: 'Opened',
		value: '8,734',
		change: '2.1%',
		icon: 'open',
	},
	{
		id: 3,
		label: 'Clicked',
		value: '967',
		change: '1.4%',
		icon: 'click',
	},
	{
		id: 4,
		label: 'Subscribe',
		value: '345',
		change: '8.5k',
		icon: 'subscribe',
	},
	{
		id: 5,
		label: 'Complaints',
		value: '10',
		change: '1.5%',
		icon: 'complaint',
	},
	{
		id: 6,
		label: 'Unsubscribe',
		value: '86',
		change: '0.8%',
		icon: 'unsubscribe',
	},
];

describe('XMonthlyCampaignStateCard', () => {
	it('should render the card with data items', () => {
		render(<XMonthlyCampaignStateCard />);

		// Check if the component is rendered
		expect(screen.getByTestId('component-wrapper')).toBeInTheDocument();

		// Check if the header is rendered
		expect(screen.getByTestId('component-header')).toBeInTheDocument();

		// Check if the body is rendered
		expect(screen.getByTestId('component-body')).toBeInTheDocument();

		// Check data items
		data.forEach((item) => {
			expect(
				screen.getByTestId(`monthly-campaign-item-${item.id}`)
			).toBeInTheDocument();
			expect(
				screen.getByTestId(`monthly-campaign-item-label-${item.id}`)
			).toHaveTextContent(item.label);
			expect(
				screen.getByTestId(`monthly-campaign-item-value-${item.id}`)
			).toHaveTextContent(item.value);
			expect(
				screen.getByTestId(`monthly-campaign-item-change-${item.id}`)
			).toHaveTextContent(item.change);
		});
	});
});
