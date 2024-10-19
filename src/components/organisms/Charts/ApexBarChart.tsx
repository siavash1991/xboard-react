import React from 'react';
import ApexCharts from 'react-apexcharts';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';
import { barChartOptions } from '@shared/ApexChartsConfig';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import useTheme from '@hooks/useTheme';
import useDirection from '@hooks/useDirection';

// Data for the bar chart
const series = [
	{
		name: 'Apple',
		data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
	},
	{
		name: 'Samsung',
		data: [20, 29, 37, 36, 44, 45, 50, 58, 92],
	},
];
const categories = [
	'7/12',
	'8/12',
	'9/12',
	'10/12',
	'11/12',
	'12/12',
	'13/12',
	'14/12',
	'15/12',
];

const XApexBarChart: React.FC<{ className?: string }> = ({
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
			className={`col-span-12 break-inside-avoid ${className}`}
		>
			<XComponentHeader
				title="Data Science"
				subtitle="Commercial networks"
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
					type="bar"
					options={barChartOptions(
						currentTheme,
						currentDir,
						['#826af9', '#d2b0ff'],
						categories
					)}
					series={series}
					height={400}
					className="chartjs"
				/>
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XApexBarChart;
