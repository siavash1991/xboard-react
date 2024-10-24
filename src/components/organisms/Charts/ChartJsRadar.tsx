import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XRadarChart from '@molecules/ChartJs/RadarChart';
import { ChartOptions } from 'chart.js';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';
import colors from 'tailwindcss/colors';
import useTheme from '@hooks/useTheme';
import { getThemeColor } from '@utils/themeUtils';

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

const XChartJsRadar: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	const currentTheme = useTheme();

	// Chart options for the radar chart
	const chartOptions: ChartOptions<'radar'> = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: true,
				labels: {
					color: getThemeColor(currentTheme, {
						light: colors.gray[100],
						semiDark: colors.gray[300],
						dark: colors.white,
					}),
					boxHeight: 15,
				},
			},
		},
		scales: {
			r: {
				angleLines: {
					display: true,
				},
				suggestedMin: 0,
				suggestedMax: 100,
				ticks: {
					backdropColor: 'transparent', // Ensure the background behind the numbers is transparent
					color: getThemeColor(currentTheme), // Adjust the text color if needed
					showLabelBackdrop: false, // Disable the default white backdrop behind labels
				},
				pointLabels: {
					font: {
						size: 11,
					},
					padding: 12,
					color: getThemeColor(currentTheme, {
						light: colors.gray[400],
						semiDark: colors.gray[300],
						dark: colors.gray[300],
					}),
				},
			},
		},
		elements: {
			line: {
				borderWidth: 3,
			},
		},
	};

	return (
		<ComponentWrapper
			className={`col-span-12 lg:col-span-6 2xl:col-span-4 break-inside-avoid $className`}
		>
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

export default XChartJsRadar;
