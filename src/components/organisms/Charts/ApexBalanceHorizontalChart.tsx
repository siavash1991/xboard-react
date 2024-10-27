import React from 'react';
import ApexCharts from 'react-apexcharts';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';
import { horizontalBarChartOptions } from '@shared/ApexChartsConfig';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import useTheme from '@hooks/useTheme';
import useDirection from '@hooks/useDirection';

// Data for the horizontal bar chart
const series = [{ data: [700, 350, 480, 600, 210, 550, 150] }];
const categories = [
	'MON, 11',
	'THU, 14',
	'FRI, 15',
	'MON, 18',
	'WED, 20',
	'FRI, 21',
	'MON, 23',
];

const XApexBalanceHorizontalChart: React.FC<{ className?: string }> = ({
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
				title="Balance"
				subtitle="$74,382.72"
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
					options={horizontalBarChartOptions(
						currentTheme,
						currentDir,
						[],
						categories
					)}
					series={series}
					type="bar"
					height={450}
				/>
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XApexBalanceHorizontalChart;
