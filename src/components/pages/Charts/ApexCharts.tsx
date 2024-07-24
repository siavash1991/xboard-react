import React from 'react';
import XBaseLayout from '@templates/BaseLayout';
import XApexAreaCard from '@organisms/ChartCards/ApexAreaCard';
import XApexBarCard from '@organisms/ChartCards/ApexBarCard';
import XApexTechnologiesCard from '@organisms/ChartCards/ApexTechnologiesCard';
import XApexBalanceCard from '@organisms/ChartCards/ApexBalanceCard';

const XApexCharts: React.FC = () => {
	return (
		<XBaseLayout pageTitle="Apex Charts">
			<div className="content-wrapper grid grid-cols-12 gap-6 mb-7">
				<XApexAreaCard className="col-span-12 break-inside-avoid" />
				<XApexBarCard className="col-span-12 break-inside-avoid" />
				<XApexTechnologiesCard className="col-span-12 break-inside-avoid" />
				<XApexBalanceCard className="col-span-12 break-inside-avoid" />
			</div>
		</XBaseLayout>
	);
};

export default XApexCharts;
