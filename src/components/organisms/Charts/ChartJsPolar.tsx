import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XPolarChart from '@molecules/ChartJs/PolarChart';
import { ChartOptions, LegendItem } from 'chart.js';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';

// Data for the polar chart
const chartData = {
	labels: ['Africa', 'Asia', 'Europe', 'America', 'Antarctica', 'Australia'],
	datasets: [
		{
			label: 'Average Skills',
			data: [25, 30, 45, 20, 35, 40],
			backgroundColor: [
				'#8B5CF6',
				'#F59E0B',
				'#F97316',
				'#3B82F6',
				'#374151',
				'#10B981',
			],
			borderColor: '#fff',
			borderWidth: 1,
		},
	],
};

// Chart options for the polar chart
const chartOptions: ChartOptions<'polarArea'> = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			title: {
				display: true,
			},
			display: true,
			position: 'right',
			labels: {
				usePointStyle: true,
				padding: 25,
				font: {
					size: 11,
				},
				generateLabels: (chart) => {
					const { data } = chart;
					return (data.labels || []).map((label, index) => ({
						text: label as string,
						fillStyle: (
							data.datasets[0].backgroundColor as string[]
						)[index],
						strokeStyle: data.datasets[0].borderColor as string,
						lineWidth: 1,
						hidden: false,
						index,
						pointStyle: 'circle',
					})) as LegendItem[];
				},
			},
		},
	},
	scales: {
		r: {
			grid: {
				display: false,
			},
			ticks: {
				display: false,
			},
		},
	},
};

// Define menu items outside the component
const menuItems = [
	{
		id: 'monthly',
		label: 'Monthly',
		onClick: () => {
			/* handle click */
		},
	},
	{
		id: 'quarterly',
		label: 'Quarterly',
		onClick: () => {
			/* handle click */
		},
	},
	{
		id: 'yearly',
		label: 'Yearly',
		onClick: () => {
			/* handle click */
		},
	},
];

const XChartJsPolarCard: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	return (
		<ComponentWrapper className={className}>
			<XComponentHeader
				title="Average Skills"
				arrowIcon={<ChevronDownIcon className="w-5 h-5" />}
				menuItems={menuItems}
			/>
			<XComponentBody>
				<XPolarChart
					data={chartData}
					options={chartOptions}
					height={400}
				/>
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XChartJsPolarCard;
