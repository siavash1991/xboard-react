import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Card } from 'flowbite-react';
import ComponentWrapper from '@atoms/ComponentWrapper';
import { lineChartOptions } from '@shared/ApexChartsConfig';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

// Data for the line chart
const series = [
	{
		name: 'Balance',
		data: [240, 180, 120, 170, 150, 140, 130, 160, 140, 180, 120, 90, 110],
	},
];

const XApexBalanceCard: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	return (
		<ComponentWrapper className={`component-wrapper mb-7 ${className}`}>
			<Card>
				<div className="p-4">
					<div className="flex justify-between items-start">
						<div>
							<h5 className="text-lg font-semibold text-gray-900">
								Balance
							</h5>
							<p className="text-sm text-gray-500">
								Commercial networks & enterprises
							</p>
						</div>
						<div className="flex items-center">
							<h5 className="text-gray-800 mr-4">$ 78,000</h5>
							<span className="bg-gray-200 text-gray-800 px-2 py-1 rounded flex items-center">
								<ArrowUpIcon className="h-3 w-3 text-green-500" />
								<span className="ml-1 text-sm">37%</span>
							</span>
						</div>
					</div>
					<div className="mt-4">
						<ApexCharts
							options={lineChartOptions(['#FFA500'])}
							series={series}
							type="line"
							height={300}
						/>
					</div>
				</div>
			</Card>
		</ComponentWrapper>
	);
};

export default XApexBalanceCard;
