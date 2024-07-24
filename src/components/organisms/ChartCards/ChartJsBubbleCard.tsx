import React from 'react';
import { Card } from 'flowbite-react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XBubbleChart from '@molecules/ChartJs/BubbleChart';
import { ChartOptions } from 'chart.js';
import colors from 'tailwindcss/colors';

// Define the type for the dataset configuration
interface BubbleChartDataset {
	data: BubbleChartData[];
	label: string;
	fill?: boolean;
	borderColor: string;
	backgroundColor: string;
	tension?: number;
}

interface BubbleChartData {
	x: number;
	y: number;
	r: number;
}

interface XChartJsBubbleCardProps {
	className?: string;
}

const bubbleChartData = {
	animation: { duration: 10000 },
	datasets: [
		{
			label: 'Dataset 1',
			borderColor: '#3b82f6',
			backgroundColor: '#3b82f6',
			data: [
				{ x: 20, y: 74, r: 10 },
				{ x: 10, y: 110, r: 5 },
				{ x: 30, y: 165, r: 7 },
				{ x: 40, y: 200, r: 20 },
				{ x: 90, y: 185, r: 7 },
				{ x: 50, y: 240, r: 7 },
				{ x: 60, y: 275, r: 10 },
				{ x: 70, y: 305, r: 5 },
				{ x: 80, y: 325, r: 4 },
				{ x: 100, y: 310, r: 5 },
				{ x: 110, y: 240, r: 5 },
				{ x: 120, y: 270, r: 7 },
				{ x: 130, y: 300, r: 6 },
			],
		},
		{
			label: 'Dataset 2',
			borderColor: '#f59e0b', // Example yellow color
			backgroundColor: '#f59e0b', // Example yellow color
			data: [
				{ x: 30, y: 72, r: 5 },
				{ x: 40, y: 110, r: 7 },
				{ x: 20, y: 135, r: 6 },
				{ x: 10, y: 160, r: 12 },
				{ x: 50, y: 285, r: 5 },
				{ x: 60, y: 235, r: 5 },
				{ x: 70, y: 275, r: 7 },
				{ x: 80, y: 290, r: 4 },
				{ x: 90, y: 250, r: 10 },
				{ x: 100, y: 220, r: 7 },
				{ x: 120, y: 230, r: 4 },
				{ x: 110, y: 320, r: 15 },
				{ x: 130, y: 330, r: 7 },
			],
		},
	] as BubbleChartDataset[],
};

const chartOptions: ChartOptions<'bubble'> = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: false,
		},
	},
	scales: {
		x: {
			grid: {
				display: true,
				color: [colors.gray[200]],
			},
			border: {
				color: colors.gray[200],
			},
			ticks: {
				color: colors.gray[400],
			},
		},
		y: {
			grid: {
				display: true,
				color: [colors.gray[200]],
			},
			border: {
				color: colors.gray[200],
			},
			ticks: {
				color: colors.gray[400],
			},
		},
	},
};

const XChartJsBubbleCard: React.FC<XChartJsBubbleCardProps> = ({
	className,
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
					<XBubbleChart
						data={bubbleChartData}
						options={chartOptions}
						height="480"
					/>
				</div>
			</Card>
		</ComponentWrapper>
	);
};

export default XChartJsBubbleCard;
