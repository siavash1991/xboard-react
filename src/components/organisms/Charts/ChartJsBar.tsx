import React from 'react';
import ComponentWrapper from '@atoms/ComponentWrapper';
import { ChartData, ChartOptions } from 'chart.js';
import XBarChart from '@molecules/ChartJs/BarChart';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';
import colors from 'tailwindcss/colors';
import { getThemeColor } from '@utils/themeUtils';
import useTheme from '@hooks/useTheme';

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

const XChartJsBar: React.FC<{ className?: string }> = ({ className = '' }) => {
	// Access theme inside the component
	const currentTheme = useTheme();

	// Chart.js configuration based on theme
	const options: ChartOptions<'bar'> = {
		responsive: true,
		maintainAspectRatio: false,

		scales: {
			x: {
				grid: {
					display: true,
					color: getThemeColor(currentTheme),
				},
				border: {
					color: getThemeColor(currentTheme),
				},
				ticks: {
					color: getThemeColor(currentTheme),
				},
			},
			y: {
				grid: {
					display: true,
					color: getThemeColor(currentTheme),
				},
				border: {
					color: getThemeColor(currentTheme),
				},
				ticks: {
					color: getThemeColor(currentTheme),
				},
			},
		},

		layout: {
			padding: {
				right: 20,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	return (
		<ComponentWrapper
			className={`col-span-12 lg:col-span-6 2xl:col-span-4 break-inside-avoid $className`}
		>
			<XComponentHeader
				title="Latest Statistics"
				menuItems={menuItems}
				arrowIcon={<ChevronDownIcon className="w-5 h-5" />}
			/>
			<XComponentBody>
				<XBarChart
					data={data}
					options={options} // Pass dynamic options
					className="chartjs"
					height={250}
				/>
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XChartJsBar;
