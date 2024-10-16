import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';

interface PolarChartProps {
	data: any;
	options?: ChartOptions<'polarArea'>;
	height?: number;
}

const XPolarChart: React.FC<PolarChartProps> = ({ data, options, height }) => {
	return (
		<PolarArea
			data={data}
			options={options}
			height={height}
			data-testid="polar-chart"
		/>
	);
};

export default XPolarChart;
