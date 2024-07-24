import React from 'react';
import { Card } from 'flowbite-react';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XRadarChart from '@molecules/ChartJs/RadarChart';
import { ChartOptions } from 'chart.js';

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

const XChartJsRadarCard: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	return (
		<ComponentWrapper className={`component-wrapper mb-7 ${className}`}>
			<Card>
				<div className="card-header flex items-center justify-between p-4 ">
					<div>
						<h5 className="card-title text-lg font-semibold text-gray-900">
							Radar Chart
						</h5>
					</div>
				</div>
				<div className="card-body">
					<XRadarChart
						data={data}
						options={chartOptions}
						height={500}
					/>
				</div>
			</Card>
		</ComponentWrapper>
	);
};

export default XChartJsRadarCard;
