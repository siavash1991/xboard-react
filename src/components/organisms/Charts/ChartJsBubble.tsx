import React from 'react';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XBubbleChart from '@molecules/ChartJs/BubbleChart';
import { ChartOptions } from 'chart.js';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';
import { getThemeColor } from '@utils/themeUtils';
import useTheme from '@hooks/useTheme';

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

interface XChartJsBubbleProps {
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

const XChartJsBubble: React.FC<XChartJsBubbleProps> = ({ className }) => {
	const currentTheme = useTheme();

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
	};
	return (
		<ComponentWrapper
			className={`col-span-12 break-inside-avoid $className`}
		>
			<XComponentHeader
				title="Statistics"
				subtitle="Commercial networks and enterprises"
				changePercentage="32"
				value="$120,000"
				isPositiveChange={true}
			/>
			<XComponentBody>
				<XBubbleChart data={bubbleChartData} options={chartOptions} />
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XChartJsBubble;
