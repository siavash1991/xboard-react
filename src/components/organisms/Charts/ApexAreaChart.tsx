import React from 'react';
import ComponentWrapper from '@atoms/ComponentWrapper';
import ApexCharts from 'react-apexcharts';
import { splineAreaChartOptions } from '@shared/ApexChartsConfig';
import colors from 'tailwindcss/colors';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import useTheme from '@hooks/useTheme';
import useDirection from '@hooks/useDirection';

const colorsPalette = [colors.cyan[300], colors.cyan[400], colors.cyan[500]];

const series = [
	{
		name: 'Visits',
		data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375],
	},
	{
		name: 'Clicks',
		data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275],
	},
	{
		name: 'Sales',
		data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220],
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
	'16/12',
	'17/12',
	'18/12',
	'19/12',
];

const menuItems = [
	{
		id: 'today',
		label: 'Today',
		onClick: () => {
			/* handle click */
		},
	},
	{
		id: 'yesterday',
		label: 'Yesterday',
		onClick: () => {
			/* handle click */
		},
	},
	{
		id: 'last7days',
		label: 'Last 7 Days',
		onClick: () => {
			/* handle click */
		},
	},
	{
		id: 'last30days',
		label: 'Last 30 Days',
		onClick: () => {
			/* handle click */
		},
	},
	{
		id: 'currentMonth',
		label: 'Current Month',
		onClick: () => {
			/* handle click */
		},
	},
	{
		id: 'lastMonth',
		label: 'Last Month',
		onClick: () => {
			/* handle click */
		},
	},
];

const XApexAreaChart: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	const currentTheme = useTheme();
	const currentDir = useDirection();
	return (
		<ComponentWrapper
			className={`col-span-12 break-inside-avoid $className`}
		>
			<XComponentHeader
				title="Last updates"
				subtitle="Commercial networks"
				menuItems={menuItems}
				arrowIcon={
					<ChevronDownIcon
						className="h-5 w-5"
						data-testid="arrow-icon"
					/>
				}
			></XComponentHeader>

			<XComponentBody className="p-5">
				<ApexCharts
					type="area"
					series={series}
					options={splineAreaChartOptions(
						currentTheme,
						currentDir,
						colorsPalette,
						categories
					)}
					width="100%"
					className="chartjs"
					data-testid="apex-charts"
				/>
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XApexAreaChart;
