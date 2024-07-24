import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Card } from 'flowbite-react';
import ComponentWrapper from '@atoms/ComponentWrapper';
import { barChartOptions } from '@shared/ApexChartsConfig';
import ChartDropdownMenu from '@atoms/ChartDropdownMenu';

// Data for the bar chart
const series = [
	{
		name: 'Apple',
		data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
	},
	{
		name: 'Samsung',
		data: [20, 29, 37, 36, 44, 45, 50, 58, 92],
	},
];
const categories = [
	'7/12',
	'8/12',
	'9/12',
	'10/12',
	'11/12',
	'12/12',
	'13/12',
	'14/12',
	'15/12',
];

const XApexBarCard: React.FC<{ className?: string }> = ({ className = '' }) => {
	const menuItems = [
		{
			id: 'today',
			label: 'Today',
			onClick: () => {
				/* handle click */
			},
		},
		{
			id: 'yesterday',
			label: 'Yesterday',
			onClick: () => {
				/* handle click */
			},
		},
		{
			id: 'last7days',
			label: 'Last 7 Days',
			onClick: () => {
				/* handle click */
			},
		},
		{
			id: 'last30days',
			label: 'Last 30 Days',
			onClick: () => {
				/* handle click */
			},
		},
		{
			id: 'currentMonth',
			label: 'Current Month',
			onClick: () => {
				/* handle click */
			},
		},
		{
			id: 'lastMonth',
			label: 'Last Month',
			onClick: () => {
				/* handle click */
			},
		},
	];

	return (
		<ComponentWrapper className={`component-wrapper mb-7 ${className}`}>
			<Card>
				<div className="card-header flex items-center justify-between p-4">
					<div>
						<h5 className="card-title text-lg font-semibold text-gray-900">
							Data Science
						</h5>
						<span className="text-sm text-gray-500">
							Commercial networks
						</span>
					</div>
					<ChartDropdownMenu menuItems={menuItems} />
				</div>
				<div className="card-body p-4">
					<ApexCharts
						type="bar"
						options={barChartOptions(
							['#826af9', '#d2b0ff'],
							categories
						)}
						series={series}
						height={400}
						className="chartjs"
					/>
				</div>
			</Card>
		</ComponentWrapper>
	);
};

export default XApexBarCard;
