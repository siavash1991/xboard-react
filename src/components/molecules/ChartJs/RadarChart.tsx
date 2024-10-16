import React from 'react';
import { Radar } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';

interface RadarChartProps {
	data: any;
	options?: ChartOptions<'radar'>;
	height?: number;
}

const XRadarChart: React.FC<RadarChartProps> = ({ data, options, height }) => {
	return (
		<Radar
			data={data}
			options={options}
			height={height}
			data-testid="radar-chart"
		/>
	);
};

export default XRadarChart;
