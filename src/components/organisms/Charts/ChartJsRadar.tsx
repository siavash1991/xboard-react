import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XRadarChart from '@molecules/ChartJs/RadarChart';
import { ChartOptions } from 'chart.js';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';

// Data for the radar chart
const data = {
	labels: [
		'Eating',
		'Drinking',
		'Sleeping',
		'Designing',
		'Coding',
		'Cycling',
		'Running',
	],
	datasets: [
		{
			label: 'My First Dataset',
			data: [65, 59, 90, 81, 56, 55, 40],
			fill: true,
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgb(255, 99, 132)',
			pointBackgroundColor: 'rgb(255, 99, 132)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgb(255, 99, 132)',
		},
		{
			label: 'My Second Dataset',
			data: [28, 48, 40, 19, 96, 27, 100],
			fill: true,
			backgroundColor: 'rgba(54, 162, 235, 0.2)',
			borderColor: 'rgb(54, 162, 235)',
			pointBackgroundColor: 'rgb(54, 162, 235)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgb(54, 162, 235)',
		},
	],
};

// Chart options for the radar chart
const chartOptions: ChartOptions<'radar'> = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: true,
		},
	},
	scales: {
		r: {
			angleLines: {
				display: true,
			},
			suggestedMin: 0,
			suggestedMax: 100,
		},
	},
	elements: {
		line: {
			borderWidth: 3,
		},
	},
};

// Define menu items outside the component
const menuItems = [
	{
		id: 'daily',
		label: 'Daily',
		onClick: () => {
			/* handle click */
		},
	},
	{
		id: 'weekly',
		label: 'Weekly',
		onClick: () => {
			/* handle click */
		},
	},
	{
		id: 'monthly',
		label: 'Monthly',
		onClick: () => {
			/* handle click */
		},
	},
];

const XChartJsRadarCard: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	return (
		<ComponentWrapper className={className}>
			<XComponentHeader
				title="Radar Chart"
				arrowIcon={<ChevronDownIcon className="w-5 h-5" />}
				menuItems={menuItems}
			/>
			<XComponentBody>
				<XRadarChart data={data} options={chartOptions} height={500} />
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XChartJsRadarCard;
