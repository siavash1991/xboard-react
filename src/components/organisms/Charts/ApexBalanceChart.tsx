import React from 'react';
import ApexCharts from 'react-apexcharts';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';
import { lineChartOptions } from '@shared/ApexChartsConfig';

// Define types for series and menu items
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

const XApexBalanceCard: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	return (
		<ComponentWrapper className={className}>
			<XComponentHeader
				title="Balance"
				subtitle="Commercial networks & enterprises"
				value="$78,000"
				changePercentage="37%"
				isPositiveChange={true}
			/>
			<XComponentBody>
				<ApexCharts
					options={lineChartOptions(['#FFA500'])}
					series={series}
					type="line"
					height={300}
				/>
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XApexBalanceCard;
