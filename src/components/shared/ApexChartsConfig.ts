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
		borderColor: colors.gray[300],
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
		borderColor: colors.gray[300],
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

export const horizontalBararChartOptions = (
	colorsPalette?: string[],
	categories?: string[]
): ApexOptions => ({
	chart: {
		type: 'bar',
		toolbar: { show: false },
	},
	colors: colorsPalette ?? undefined,

	dataLabels: { enabled: false },
	plotOptions: {
		bar: {
			horizontal: true,
			barHeight: '35%',
			borderRadius: 8,
			borderRadiusApplication: 'end',
		},
	},

	grid: {
		padding: {
			left: 0,
		},
		borderColor: colors.gray[300],
		xaxis: {
			lines: { show: false },
		},
	},
	yaxis: {
		labels: {
			style: { fontSize: '0.8125rem', colors: colors.gray[400] },
		},
	},
	xaxis: {
		axisBorder: { show: false },
		categories: categories ?? [],
		labels: {
			style: { fontSize: '0.8125rem', colors: colors.gray[400] },
		},
	},
});

export const candlestickChartOptions = (
	colorsPalette?: string[],
	categories?: string[]
): ApexOptions => ({
	chart: {
		parentHeightOffset: 0,
		toolbar: { show: false },
	},
	plotOptions: {
		bar: {
			columnWidth: '70%',
		},
		candlestick: {
			colors: {
				upward: colors.green[400],
				downward: colors.red[400],
			},
		},
	},
	grid: {
		padding: { top: 0 },

		borderColor: colors.gray[300],
		xaxis: {
			lines: { show: true },
		},
	},
	yaxis: {
		tickAmount: 4,
		axisBorder: {
			show: false,
		},

		tooltip: { enabled: true },
		crosshairs: {
			stroke: { color: colors.gray[300] },
		},
		labels: {
			style: {
				fontSize: '12px',
				colors: colors.gray[400],
			},
			formatter: (value) => Math.floor(value).toString(),
		},
		min: 0,
		max: 500,
	},
	xaxis: {
		type: 'datetime',
		axisBorder: { show: false },
		axisTicks: { color: colors.gray[300] },
		crosshairs: {
			stroke: { color: colors.gray[300] },
		},
		labels: {
			style: {
				fontSize: '12px',
				colors: colors.gray[400],
			},
		},
	},
});
