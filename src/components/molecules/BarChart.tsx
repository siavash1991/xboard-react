import { useEffect, useId } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = [65, 59, 80, 81, 56, 55, 40];

const chartData: ChartConfiguration<'bar'> = {
	// Change the type to 'bar'
	type: 'bar',
	data: {
		labels,
		datasets: [
			{
				label: 'Contracts Per Month',
				data,
				backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color for bars
				borderColor: 'rgb(75, 192, 192)',
				borderWidth: 1,
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				title: {
					display: true,
					text: 'Month',
					color: 'rgb(75, 192, 192)',
					font: {
						size: 14,
						weight: 'bold',
					},
					padding: {
						top: 10,
					},
				},
				grid: {
					display: false,
				},
				ticks: {
					color: 'rgb(75, 192, 192)',
				},
			},
			y: {
				title: {
					display: true,
					text: 'Contracts',
					color: 'rgb(75, 192, 192)',
					font: {
						size: 14,
						weight: 'bold',
					},
					padding: {
						top: 5,
						bottom: 5,
					},
				},
				grid: {
					color: 'rgba(75, 192, 192, 0.2)',
				},
				ticks: {
					color: 'rgb(75, 192, 192)',
				},
			},
		},
		plugins: {
			legend: {
				display: true,
				position: 'top',
				labels: {
					color: 'rgb(75, 192, 192)',
				},
			},
		},
		layout: {
			padding: {
				right: 20,
			},
		},
	},
};

const XBarChart = () => {
	const chartId = useId();

	useEffect(() => {
		const ctx = document.getElementById(chartId);
		if (ctx instanceof HTMLCanvasElement) {
			const existingChart = Chart.getChart(ctx);
			if (existingChart) {
				existingChart.destroy();
			}

			new Chart(ctx, chartData);
		}
	}, [chartId]);

	return (
		<div className="component-wrapper  bg-component-light dark:bg-gray-600 col-span-12 md:col-span-6 mb-7">
			<div className="bg-white dark:bg-gray-800 w-full rounded-md">
				<canvas id={chartId} width="400" height="200"></canvas>
			</div>
		</div>
	);
};

export default XBarChart;
