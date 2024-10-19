import React from 'react';
import ApexCharts from 'react-apexcharts';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';
import { lineChartOptions } from '@shared/ApexChartsConfig';
import useTheme from '@hooks/useTheme';
import useDirection from '@hooks/useDirection';

// Define types for series
interface ChartSeries {
	name: string;
	data: number[];
}

// Data for the line chart
const series: ChartSeries[] = [
	{
		name: 'Balance',
		data: [240, 180, 120, 170, 150, 140, 130, 160, 140, 180, 120, 90, 110],
	},
];

const XApexBalanceChart: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	const currentTheme = useTheme();
	const currentDir = useDirection();
	return (
		<ComponentWrapper
			className={`col-span-12 break-inside-avoid ${className}`}
		>
			<XComponentHeader
				title="Balance"
				subtitle="Commercial networks & enterprises"
				value="$78,000"
				changePercentage="37%"
				isPositiveChange={true}
			/>
			<XComponentBody>
				<ApexCharts
					options={lineChartOptions(currentTheme, currentDir, [
						'#FFA500',
					])}
					series={series}
					type="line"
					height={300}
					data-testid="apex-chart"
				/>
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XApexBalanceChart;
