import React from 'react';

const ChartJS = ({
	data,
	options,
	height,
}: {
	data: any;
	options: any;
	height: number;
}) => {
	return (
		<div data-testid="chart-js" style={{ height }}>
			Chart.js Mock
		</div>
	);
};

const register = jest.fn();
const unregister = jest.fn();
const Chart = {
	register,
	unregister,
};

export {
	Chart,
	ChartJS as Bar,
	ChartJS as Line,
	ChartJS as Pie,
	ChartJS as Bubble,
	ChartJS as PolarArea,
	ChartJS as Radar,
}; // Add other chart types as needed
