import React from 'react';
import { Card } from 'flowbite-react';
import XBarChart from '@molecules/ChartJs/BarChart';
import ComponentWrapper from '@atoms/ComponentWrapper';
import { ChartData, ChartOptions } from 'chart.js';
import ChartDropdownMenu from '@atoms/ChartDropdownMenu';

// Data for the bar chart
const chartData: ChartData<'bar'> = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'Sales Dataset',
			data: [65, 59, 80, 81, 56, 55, 40],
			backgroundColor: 'rgba(75,192,192,0.2)',
			borderColor: 'rgba(75,192,192,1)',
			borderWidth: 1,
		},
	],
};

const chartOptions: ChartOptions<'bar'> = {
	indexAxis: 'y',
	responsive: true,
	maintainAspectRatio: false,
	scales: {
		x: {
			grid: {
				display: true,
			},
		},
		y: {
			grid: {
				display: false,
			},
		},
	},
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

const XChartJsHorizontalBarCard: React.FC<{ className?: string }> = ({
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
						Balance
					</h5>
					<ChartDropdownMenu menuItems={menuItems} />
				</div>
				<div className="card-body">
					<XBarChart
						data={chartData}
						options={chartOptions}
						className="chartjs"
						height={250}
					/>
				</div>
			</Card>
		</ComponentWrapper>
	);
};

export default XChartJsHorizontalBarCard;
