import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import 'chart.js/auto';

interface LineChartProps {
	data: ChartData<'line'>;
	options: ChartOptions<'line'>;
	height?: string;
}

const XLineChart: React.FC<LineChartProps> = ({
	data,
	options,
	height = '250',
}) => {
	return (
		<Line
			data={data}
			options={options}
			height={parseInt(height, 10)}
			data-testid="line-chart"
		/>
	);
};

export default XLineChart;
