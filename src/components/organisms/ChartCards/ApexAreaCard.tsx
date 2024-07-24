import React from 'react';
import { Card } from 'flowbite-react';
import ComponentWrapper from '@atoms/ComponentWrapper';
import ApexCharts from 'react-apexcharts';
import { splineAreaChartOptions } from '@shared/ApexChartsConfig';
import ChartDropdownMenu from '@atoms/ChartDropdownMenu';
import colors from 'tailwindcss/colors';

const colorsPalette = [colors.cyan[300], colors.cyan[400], colors.cyan[500]];
const series = [
	{
		name: 'Visits',
		data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375],
	},
	{
		name: 'Clicks',
		data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275],
	},
	{
		name: 'Sales',
		data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220],
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
	'16/12',
	'17/12',
	'18/12',
	'19/12',
];
const XApexAreaCard: React.FC<{ className?: string }> = ({
	className = '',
}) => {
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
				<div className="card-header flex items-center justify-between p-4 ">
					<div>
						<h5 className="card-title text-lg font-semibold text-gray-900">
							Last updates
						</h5>
						<span className="text-sm text-gray-500">
							Commercial networks
						</span>
					</div>
					<ChartDropdownMenu menuItems={menuItems} />
				</div>
				<div className="card-body p-4">
					<ApexCharts
						type="area"
						series={series}
						options={splineAreaChartOptions(
							colorsPalette,
							categories
						)}
						height={400}
						className="chartjs"
					/>
				</div>
			</Card>
		</ComponentWrapper>
	);
};

export default XApexAreaCard;
