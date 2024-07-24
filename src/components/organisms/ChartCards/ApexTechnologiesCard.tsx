import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Card } from 'flowbite-react';
import ComponentWrapper from '@atoms/ComponentWrapper';
import ChartDropdownMenu from '@atoms/ChartDropdownMenu';
import { bubbleChartOptions } from '@shared/ApexChartsConfig';

const series = [
	{
		name: 'Angular',
		data: [
			{ x: 5.4, y: 170 },
			{ x: 5.4, y: 100 },
			{ x: 6.3, y: 170 },
			{ x: 5.7, y: 140 },
			{ x: 5.9, y: 130 },
			{ x: 7.0, y: 150 },
			{ x: 8.0, y: 120 },
			{ x: 9.0, y: 170 },
			{ x: 10.0, y: 190 },
			{ x: 11.0, y: 220 },
			{ x: 12.0, y: 170 },
			{ x: 13.0, y: 230 },
		],
	},
	{
		name: 'Vue',
		data: [
			{ x: 14.0, y: 220 },
			{ x: 15.0, y: 280 },
			{ x: 16.0, y: 230 },
			{ x: 18.0, y: 320 },
			{ x: 17.5, y: 280 },
			{ x: 19.0, y: 250 },
			{ x: 20.0, y: 350 },
			{ x: 20.5, y: 320 },
			{ x: 20.0, y: 320 },
			{ x: 19.0, y: 280 },
			{ x: 17.0, y: 280 },
			{ x: 22.0, y: 300 },
			{ x: 18.0, y: 120 },
		],
	},
	{
		name: 'React',
		data: [
			{ x: 14.0, y: 290 },
			{ x: 13.0, y: 190 },
			{ x: 20.0, y: 220 },
			{ x: 21.0, y: 350 },
			{ x: 21.5, y: 290 },
			{ x: 22.0, y: 220 },
			{ x: 23.0, y: 140 },
			{ x: 19.0, y: 400 },
			{ x: 20.0, y: 200 },
			{ x: 22.0, y: 90 },
			{ x: 20.0, y: 120 },
		],
	},
];

const XApexTechnologiesCard: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	const menuItems = [
		{
			id: 'daily',
			label: 'Daily',
			onClick: () => {
				/* handle click */
			},
		},
		{
			id: 'monthly',
			label: 'Monthly',
			onClick: () => {
				/* handle click */
			},
		},
		{
			id: 'yearly',
			label: 'Yearly',
			onClick: () => {
				/* handle click */
			},
		},
	];

	return (
		<ComponentWrapper className={`component-wrapper mb-7 ${className}`}>
			<Card>
				<div className="card-header flex items-center justify-between p-4">
					<div>
						<h5 className="card-title text-lg font-semibold text-gray-900">
							New Technologies Data
						</h5>
					</div>
					<ChartDropdownMenu menuItems={menuItems} />
				</div>
				<div className="card-body p-4">
					<ApexCharts
						options={bubbleChartOptions()}
						series={series}
						type="bubble"
						height={350}
					/>
				</div>
			</Card>
		</ComponentWrapper>
	);
};

export default XApexTechnologiesCard;
