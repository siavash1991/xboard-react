import React from 'react';
import { Card } from 'flowbite-react';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XPolarChart from '@molecules/ChartJs/PolarChart';
import { ChartOptions, LegendItem } from 'chart.js';

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

const XChartJsPolarCard: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	return (
		<ComponentWrapper className={`component-wrapper mb-7 ${className}`}>
			<Card>
				<div className="card-header flex items-center justify-between p-4 ">
					<h5 className="card-title text-lg font-semibold text-gray-900">
						Average Skills
					</h5>
				</div>
				<div className="card-body">
					<XPolarChart
						data={chartData}
						options={chartOptions}
						height={400}
					/>
				</div>
			</Card>
		</ComponentWrapper>
	);
};

export default XChartJsPolarCard;
