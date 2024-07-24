import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Card } from 'flowbite-react';
import ComponentWrapper from '@atoms/ComponentWrapper';
import ChartDropdownMenu from '@atoms/ChartDropdownMenu';

// Data for the bar chart
const series = [{}];
const XApexStocksPricesCard: React.FC<{ className?: string }> = ({
	className = '',
}) => {
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
					<ApexCharts type="bubble" />
				</div>
			</Card>
		</ComponentWrapper>
	);
};

export default XApexStocksPricesCard;
