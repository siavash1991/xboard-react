import React from 'react';
import ApexCharts from 'react-apexcharts';
import ComponentWrapper from '@atoms/ComponentWrapper';

// Data for the bar chart
const series = [{}];
const XApexDailySalesCard: React.FC<{ className?: string }> = ({
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
	];

	return <ComponentWrapper className={className}></ComponentWrapper>;
};

export default XApexDailySalesCard;
