import React from 'react';
import ApexCharts from 'react-apexcharts';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// Data for the bubble chart
const series = [{}];

const XApexStatisticsCard: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	const menuItems = [
		{ id: 'today', label: 'Today', onClick: () => {} },
		{ id: 'yesterday', label: 'Yesterday', onClick: () => {} },
		{ id: 'last7days', label: 'Last 7 Days', onClick: () => {} },
		{ id: 'last30days', label: 'Last 30 Days', onClick: () => {} },
		{ id: 'currentMonth', label: 'Current Month', onClick: () => {} },
		{ id: 'lastMonth', label: 'Last Month', onClick: () => {} },
	];

	return (
		<ComponentWrapper className={className}>
			<XComponentHeader
				title="New Technologies Data"
				menuItems={menuItems}
				arrowIcon={
					<ChevronDownIcon className="h-5 w-5 text-gray-600" />
				}
			/>
			<XComponentBody>
				<ApexCharts type="bubble" height={400} />
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XApexStatisticsCard;
