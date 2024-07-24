import React from 'react';
import { Card } from 'flowbite-react';
import ChartDropdownMenu from '@atoms/ChartDropdownMenu';
import ComponentWrapper from '@atoms/ComponentWrapper';
import { ChartData, ChartOptions } from 'chart.js';
import XBarChart from '@molecules/ChartJs/BarChart';
import colors from 'tailwindcss/colors';

// Data for the bar chart
const labels = [
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

const data: ChartData<'bar'> = {
	labels,
	datasets: [
		{
			label: 'Contracts Per Day',
			data: [
				200, 150, 255, 250, 180, 220, 170, 210, 190, 200, 230, 260, 220,
			],
			backgroundColor: [colors.sky[800]],
			borderWidth: 1,
			borderRadius: 50,
			barThickness: 16,
			barPercentage: 0.5,
		},
	],
};

const options: ChartOptions<'bar'> = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: false,
		},
	},
	layout: {
		padding: {
			right: 20,
		},
	},
};

const XChartJsBarCard: React.FC<{ className?: string }> = ({
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
					<h5 className="card-title text-lg font-semibold text-gray-900">
						Latest Statistics
					</h5>
					<ChartDropdownMenu menuItems={menuItems} />
				</div>
				<div className="card-body">
					<XBarChart
						data={data}
						options={options}
						className="chartjs"
						height={250}
					/>
				</div>
			</Card>
		</ComponentWrapper>
	);
};

export default XChartJsBarCard;
