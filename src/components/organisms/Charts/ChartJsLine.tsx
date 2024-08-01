import React from 'react';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XLineChart from '@molecules/ChartJs/LineChart';
import colors from 'tailwindcss/colors';
import { ChartOptions } from 'chart.js';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';

// Data for the line chart
const labels = Array.from({ length: 10 }, (_, i) => i.toString());

const data1 = [150, 200, 150, 300, 250, 200, 350, 300, 250, 390];
const data2 = [150, 150, 250, 200, 350, 300, 250, 200, 300, 350];
const data3 = [150, 250, 200, 350, 300, 250, 200, 300, 350, 200];

const chartData = {
	labels,
	datasets: [
		{
			label: 'Europe',
			data: data1,
			fill: false,
			borderColor: colors.red[500],
			backgroundColor: colors.red[500],
			tension: 0.4,
		},
		{
			label: 'Asia',
			data: data2,
			fill: false,
			borderColor: colors.blue[500],
			backgroundColor: colors.blue[500],
			tension: 0.4,
		},
		{
			label: 'Africa',
			data: data3,
			fill: false,
			borderColor: colors.yellow[500],
			backgroundColor: colors.yellow[500],
			tension: 0.4,
		},
	],
};

const chartOptions: ChartOptions<'line'> = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
			align: 'start',
			labels: {
				usePointStyle: true,
				boxWidth: 5,
				boxHeight: 5,
				pointStyle: 'circle',
				color: '#000',
				font: {
					size: 11,
				},
				padding: 40,
			},
		},
	},
	scales: {
		x: {
			grid: {
				display: true,
			},
		},
		y: {
			grid: {
				display: true,
			},
			min: 0,
			max: 400,
		},
	},
};

// Define menu items outside the component
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

const XChartJsLineCard: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	return (
		<ComponentWrapper className={className}>
			<XComponentHeader
				title="Statistics"
				subtitle="Commercial networks and enterprises"
				changePercentage="28"
				value="$78,000"
				isPositiveChange={true}
			/>
			<XComponentBody>
				<XLineChart
					data={chartData}
					options={chartOptions}
					height="500"
				/>
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XChartJsLineCard;
