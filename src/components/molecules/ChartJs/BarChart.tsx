import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

interface BarChartProps {
	data: ChartData<'bar'>;
	options: ChartOptions<'bar'>;
	className?: string;
	height?: number;
}

const XBarChart: React.FC<BarChartProps> = ({
	data,
	options,
	className = '',
	height = 250,
}) => {
	return (
		<Bar
			data={data}
			options={options}
			className={className}
			height={height}
			data-testid="bar-chart"
		/>
	);
};

export default XBarChart;
