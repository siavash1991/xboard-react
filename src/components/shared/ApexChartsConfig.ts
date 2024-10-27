import { getThemeColor } from '@utils/themeUtils';
import { ApexOptions } from 'apexcharts';
import colors from 'tailwindcss/colors';

type Theme = 'light' | 'dark' | 'semi-dark';

export const splineAreaChartOptions = (
	theme: Theme = 'light',
	direction: 'ltr' | 'rtl' = 'ltr',
	colorsPalette?: string[],
	categories?: string[]
): ApexOptions => ({
	chart: {
		type: 'area',
		toolbar: {
			show: false,
		},
		height: '400px',
		width: '100%',
		offsetY: 0,
		offsetX: -10,
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
		borderColor: getThemeColor(theme),
		xaxis: {
			lines: {
				show: true,
			},
		},
		padding: {
			left: direction === 'ltr' ? 10 : 40,
			right: 0,
			top: 0,
			bottom: 15,
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
	// Add responsive settings based on Tailwind's screen sizes
	responsive: [
		{
			breakpoint: 2560, // Tailwind's `lg` (large screens)
			options: {
				chart: {
					height: '500px',
					width: '100%',
					offsetX: -15,
				},
				legend: {
					offsetX: 15,
				},
			},
		},
		{
			breakpoint: 1024, // Tailwind's `lg` (large screens)
			options: {
				chart: {
					height: '400px',
					width: '100%',
					offsetX: -10,
				},
				legend: {
					position: 'bottom', // Keep legend at top for larger screens
					horizontalAlign: 'center',
					offsetX: 15,
				},
			},
		},
		{
			breakpoint: 768, // Tailwind's `md` (medium screens)
			options: {
				chart: {
					height: '400px',
					width: '100%',
					offsetX: -10,
				},
				legend: {
					position: 'bottom', // Move legend below chart for medium screens
					horizontalAlign: 'center',
					offsetX: 15,
				},
				xaxis: {
					labels: {
						style: {
							fontSize: '10px', // Slightly smaller font size for labels
						},
					},
				},
				yaxis: {
					labels: {
						style: {
							fontSize: '10px',
						},
					},
				},
			},
		},
		{
			breakpoint: 640, // Tailwind's `sm` (small screens)
			options: {
				chart: {
					height: '400px',
					width: '100%',
				},
				legend: {
					position: 'bottom', // Keep legend below chart for small screens
					horizontalAlign: 'center',
				},
				xaxis: {
					labels: {
						style: {
							fontSize: '8px', // Further reduction for small screens
						},
					},
				},
				yaxis: {
					labels: {
						style: {
							fontSize: '8px',
						},
					},
				},
			},
		},
		{
			breakpoint: 475, // Tailwind's approximation for mobile (`sm` breakpoint and below)
			options: {
				chart: {
					height: '300px',
					width: '100%',
				},
				legend: {
					position: 'bottom',
					fontSize: '10px', // Smaller legend font size for mobile
					horizontalAlign: 'center',
					offsetX: 15,
				},
				xaxis: {
					labels: {
						style: {
							fontSize: '8px', // Smallest font size for mobile screens
						},
					},
				},
				yaxis: {
					labels: {
						style: {
							fontSize: '8px',
						},
					},
				},
			},
		},
	],
});

export const barChartOptions = (
	theme: Theme = 'light',
	direction: 'ltr' | 'rtl' = 'ltr',
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
		borderColor: getThemeColor(theme),
		xaxis: {
			lines: { show: true },
		},
		padding: {
			left: direction === 'ltr' ? 10 : 40,
			right: 0,
			top: 0,
			bottom: 15,
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
	theme: Theme = 'light',
	direction: 'ltr' | 'rtl' = 'ltr',
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
		borderColor: getThemeColor(theme),

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
		padding: {
			left: direction === 'ltr' ? 10 : 40,
			right: 0,
			top: 0,
			bottom: 15,
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
	theme: Theme = 'light',
	direction: 'ltr' | 'rtl' = 'ltr',
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
		borderColor: getThemeColor(theme),
		xaxis: { lines: { show: true } },
		padding: {
			left: direction === 'ltr' ? 10 : 40,
			right: 0,
			top: 0,
			bottom: 15,
		},
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

export const horizontalBarChartOptions = (
	theme: Theme = 'light',
	direction: 'ltr' | 'rtl' = 'ltr',
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
			left: direction === 'ltr' ? 40 : 0,
		},

		borderColor: getThemeColor(theme),
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
	theme: Theme = 'light',
	direction: 'ltr' | 'rtl' = 'ltr',
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
		padding: { top: 0, left: direction === 'ltr' ? 15 : 40 },
		borderColor: getThemeColor(theme),
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
