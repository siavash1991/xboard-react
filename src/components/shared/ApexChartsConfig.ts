import { ApexOptions } from 'apexcharts';
import colors from 'tailwindcss/colors';
export const splineAreaChartOptions = (
	colorsPalette?: string[],
	categories?: string[]
): ApexOptions => ({
	chart: {
		type: 'area',
		toolbar: {
			show: false,
		},
	},

	colors: colorsPalette ?? undefined,
	xaxis: {
		categories: categories ?? undefined,
		title: {
			style: {
				fontSize: '12px',
				fontWeight: 'bold',
			},
		},
		labels: {
			style: {
				fontSize: '12px',
				colors: colors.gray[400],
			},
		},
	},
	yaxis: {
		tickAmount: 4,
		title: {
			style: {
				fontSize: '12px',
				fontWeight: 'bold',
			},
		},
		labels: {
			style: {
				fontSize: '12px',
				colors: colors.gray[400],
			},
			formatter: (value) => Math.floor(value).toString(),
		},

		min: 0,
		max: 400,
	},
	fill: {
		type: 'solid',
		opacity: 0.9,
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: 'straight',
		show: false,
	},
	grid: {
		borderColor: '#e0e0e0',
		xaxis: {
			lines: {
				show: true,
			},
		},
	},
	tooltip: {
		x: {
			format: 'dd/MM/yy',
		},
	},
	legend: {
		position: 'top',
		horizontalAlign: 'left',
	},
	markers: {
		size: 0,
	},
});

export const barChartOptions = (
	colorsPalette?: string[],
	categories?: string[]
): ApexOptions => ({
	chart: {
		offsetX: -10,
		stacked: true,
		parentHeightOffset: 0,
		toolbar: { show: false },
	},
	colors: colorsPalette ?? undefined,

	fill: { opacity: 1 },
	dataLabels: { enabled: false },
	legend: {
		position: 'top',
		horizontalAlign: 'left',
		fontSize: '13px',
		markers: {
			offsetY: 1,
			offsetX: -3,
		},
		itemMargin: {
			vertical: 3,
			horizontal: 10,
		},
	},
	stroke: {
		show: true,
		colors: ['transparent'],
	},
	plotOptions: {
		bar: {
			columnWidth: '15%',
			colors: {
				backgroundBarRadius: 10,
				backgroundBarColors: Array(5).fill('#f8d3ff'), // Background bar color
			},
		},
	},
	grid: {
		xaxis: {
			lines: { show: true },
		},
	},
	xaxis: {
		categories: categories ?? undefined,
		title: {
			style: {
				fontSize: '12px',
				fontWeight: 'bold',
			},
		},
		labels: {
			style: {
				fontSize: '12px',
				colors: colors.gray[400],
			},
		},
	},
	yaxis: {
		tickAmount: 4,
		title: {
			style: {
				fontSize: '12px',
				fontWeight: 'bold',
			},
		},
		labels: {
			style: {
				fontSize: '12px',
				colors: colors.gray[400],
			},
			formatter: (value) => Math.floor(value).toString(),
		},

		min: 0,
		max: 400,
	},
	responsive: [
		{
			breakpoint: 600,
			options: {
				plotOptions: {
					bar: {
						columnWidth: '35%',
					},
				},
			},
		},
	],
});

export const bubbleChartOptions = (
	colorsPalette?: string[],
	categories?: string[]
): ApexOptions => ({
	chart: {
		type: 'bubble',
		toolbar: {
			show: false,
		},
	},
	colors: colorsPalette ?? undefined,
	xaxis: {
		categories: categories ?? undefined,
		title: {
			style: {
				fontSize: '12px',
				fontWeight: 'bold',
			},
		},
		labels: {
			style: {
				fontSize: '12px',
				colors: colors.gray[400],
			},
		},
	},
	yaxis: {
		tickAmount: 4,
		title: {
			style: {
				fontSize: '12px',
				fontWeight: 'bold',
			},
		},
		labels: {
			style: {
				fontSize: '12px',
				colors: colors.gray[400],
			},
			formatter: (value) => Math.floor(value).toString(),
		},

		min: 0,
		max: 400,
	},
	fill: {
		opacity: 0.8,
	},
	grid: {
		borderColor: '#e0e0e0',
		xaxis: {
			lines: {
				show: true,
			},
		},
		yaxis: {
			lines: {
				show: true,
			},
		},
	},
	legend: {
		position: 'top',
		horizontalAlign: 'left',
	},
	tooltip: {
		enabled: true,
		x: {
			show: true,
			formatter: (val) => `X: ${val}`,
		},
		y: {
			formatter: (val) => `Y: ${val}`,
		},
		marker: {
			show: true,
		},
	},
	markers: {
		size: 7,
	},
	responsive: [
		{
			breakpoint: 600,
			options: {
				chart: {
					height: 300,
				},
				legend: {
					position: 'bottom',
				},
			},
		},
	],
});

export const lineChartOptions = (
	colorsPalette?: string[],
	categories?: string[]
): ApexOptions => ({
	chart: {
		type: 'line',
		toolbar: {
			show: false,
		},
	},
	colors: colorsPalette ?? undefined,
	xaxis: {
		categories: categories ?? undefined,
		title: {
			style: {
				fontSize: '12px',
				fontWeight: 'bold',
			},
		},
		labels: {
			style: {
				fontSize: '12px',
				colors: colors.gray[400],
			},
		},
	},
	yaxis: {
		tickAmount: 4,
		title: {
			style: {
				fontSize: '12px',
				fontWeight: 'bold',
			},
		},
		labels: {
			style: {
				fontSize: '12px',
				colors: colors.gray[400],
			},
			formatter: (value) => Math.floor(value).toString(),
		},

		min: 0,
		max: 400,
	},
	fill: {
		type: 'solid',
		opacity: 0.6,
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: 'smooth',
		width: 3,
	},
	grid: {
		borderColor: '#e0e0e0',
		xaxis: { lines: { show: true } },
	},

	tooltip: {
		x: {
			format: 'dd/MM',
		},
	},
	legend: {
		position: 'top',
		horizontalAlign: 'left',
	},
	markers: {
		size: 5,
	},
});
