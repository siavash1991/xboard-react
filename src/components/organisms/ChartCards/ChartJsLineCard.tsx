import React from 'react';
import { Card } from 'flowbite-react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XLineChart from '@molecules/ChartJs/LineChart';
import colors from 'tailwindcss/colors';
import { ChartOptions } from 'chart.js';

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
			align: 'start', // Ensure this is a valid value
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

const XChartJsLineCard: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	return (
		<ComponentWrapper className={`component-wrapper mb-7 ${className}`}>
			<Card>
				<div className="card-header flex items-center justify-between p-4 ">
					<div>
						<h5 className="card-title text-lg font-semibold text-gray-900">
							Statistics
						</h5>
						<p className="card-subtitle text-gray-600">
							Commercial networks and enterprises
						</p>
					</div>
					<div className="flex items-center">
						<h5 className="text-gray-800 mr-4">$ 78,000</h5>
						<span className="bg-gray-200 text-gray-800 px-2 py-1 rounded flex items-center">
							<ArrowUpIcon className="h-3 w-3 text-green-500" />
							<span className="ml-1 text-sm">37%</span>
						</span>
					</div>
				</div>
				<div className="card-body">
					<XLineChart
						data={chartData}
						options={chartOptions}
						height="500"
					/>
				</div>
			</Card>
		</ComponentWrapper>
	);
};

export default XChartJsLineCard;
