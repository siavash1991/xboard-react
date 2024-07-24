import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

interface BubbleChartProps {
	data: ChartData<'bubble'>;
	options?: ChartOptions<'bubble'>;
	height?: string;
}

const XBubbleChart: React.FC<BubbleChartProps> = ({
	data,
	options = {},
	height = '250',
}) => {
	return (
		<Bubble data={data} options={options} height={parseInt(height, 10)} />
	);
};

export default XBubbleChart;
