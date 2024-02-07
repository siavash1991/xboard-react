import { useEffect, useId } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = [65, 59, 80, 81, 56, 55, 40];

const chartData: ChartConfiguration<'line'> = {
	type: 'line',
	data: {
		labels,
		datasets: [
			{
				label: 'Products Sales',
				data,
				borderColor: 'rgb(75, 192, 192)',
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
				pointBackgroundColor: 'rgb(75, 192, 192)',
				pointBorderColor: 'rgb(255, 255, 255)',
				pointHoverBackgroundColor: 'rgb(255, 255, 255)',
				pointHoverBorderColor: 'rgb(75, 192, 192)',
				tension: 0.4,
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
					text: 'Sales',
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
		elements: {
			point: {
				radius: 5,
				borderWidth: 2,
				backgroundColor: 'rgba(75, 192, 192, 0.8)',
				hoverRadius: 8,
				hoverBorderWidth: 2,
			},
			line: {
				borderWidth: 2,
				tension: 0.4,
			},
		},
		layout: {
			padding: {
				right: 20,
			},
		},
	},
};

const XLineChart = () => {
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
	}, []);

	return (
		<div className="component-wrapper  bg-component-light dark:bg-gray-600 col-span-12 md:col-span-6 mb-7">
			<div className="bg-white dark:bg-gray-800 w-full rounded-md">
				<canvas id={chartId} width="400" height="200"></canvas>
			</div>
		</div>
	);
};

export default XLineChart;
