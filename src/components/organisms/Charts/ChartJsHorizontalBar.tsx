import React from 'react';
import XBarChart from '@molecules/ChartJs/BarChart';
import ComponentWrapper from '@atoms/ComponentWrapper';
import { ChartData, ChartOptions } from 'chart.js';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

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

// Menu items for the dropdown
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

const XChartJsHorizontalBarCard: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	return (
		<ComponentWrapper className={className}>
			<XComponentHeader
				title="Balance"
				menuItems={menuItems}
				arrowIcon={<ChevronDownIcon className="w-5 h-5" />}
			/>
			<XComponentBody>
				<XBarChart
					data={chartData}
					options={chartOptions}
					className="chartjs"
					height={250}
				/>
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XChartJsHorizontalBarCard;
