import React from 'react';
import ApexCharts from 'react-apexcharts';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { candlestickChartOptions } from '@shared/ApexChartsConfig';
import useTheme from '@hooks/useTheme';
import useDirection from '@hooks/useDirection';

// Updated series data for the candlestick chart
const series = [
	{
		data: [
			{
				x: new Date('2024-07-28T23:30:00').getTime(),
				y: [150, 170, 50, 100],
			},
			{
				x: new Date('2024-07-29T00:00:00').getTime(),
				y: [150, 250, 145, 230],
			},
			{
				x: new Date('2024-07-29T00:30:00').getTime(),
				y: [230, 320, 220, 310],
			},
			{
				x: new Date('2024-07-29T01:00:00').getTime(),
				y: [310, 330, 200, 320],
			},
			{
				x: new Date('2024-07-29T01:30:00').getTime(),
				y: [320, 450, 280, 350],
			},
			{
				x: new Date('2024-07-29T02:00:00').getTime(),
				y: [300, 350, 80, 250],
			},
			{
				x: new Date('2024-07-29T02:30:00').getTime(),
				y: [200, 330, 170, 300],
			},
			{
				x: new Date('2024-07-29T03:00:00').getTime(),
				y: [200, 220, 70, 130],
			},
			{
				x: new Date('2024-07-29T03:30:00').getTime(),
				y: [220, 270, 180, 250],
			},
			{
				x: new Date('2024-07-29T04:00:00').getTime(),
				y: [200, 250, 80, 100],
			},
			{
				x: new Date('2024-07-29T04:30:00').getTime(),
				y: [150, 170, 50, 120],
			},
			{
				x: new Date('2024-07-29T05:00:00').getTime(),
				y: [110, 300, 10, 290],
			},
			{
				x: new Date('2024-07-29T05:30:00').getTime(),
				y: [290, 360, 280, 320],
			},
		],
	},
];

const XApexStocksPricesChart: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	const currentTheme = useTheme();
	const currentDir = useDirection();

	const menuItems = [
		{ id: 'today', label: 'Today', onClick: () => {} },
		{ id: 'yesterday', label: 'Yesterday', onClick: () => {} },
		{ id: 'last7days', label: 'Last 7 Days', onClick: () => {} },
		{ id: 'last30days', label: 'Last 30 Days', onClick: () => {} },
		{ id: 'currentMonth', label: 'Current Month', onClick: () => {} },
		{ id: 'lastMonth', label: 'Last Month', onClick: () => {} },
	];

	return (
		<ComponentWrapper
			className={`col-span-12 lg:col-span-6 2xl:col-span-4 break-inside-avoid ${className}`}
		>
			<XComponentHeader
				title="Stocks Prices"
				subtitle="$50,863.98"
				boldSubtitle={true}
				menuItems={menuItems}
				arrowIcon={
					<ChevronDownIcon
						className="h-5 w-5 text-gray-600"
						data-testid="arrow-icon"
					/>
				}
			/>
			<XComponentBody>
				<ApexCharts
					options={candlestickChartOptions(currentTheme, currentDir)}
					series={series}
					type="candlestick"
					height={450}
				/>
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XApexStocksPricesChart;
