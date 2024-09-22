import React from 'react';
import XBaseLayout from '@templates/BaseLayout';
import XApexAreaCard from '@organisms/Charts/ApexAreaChart';
import XApexBarCard from '@organisms/Charts/ApexBarChart';
import XApexTechnologiesCard from '@organisms/Charts/ApexTechnologiesChart';
import XApexBalanceCard from '@organisms/Charts/ApexBalanceChart';
import XApexBalanceHorizontalCard from '@organisms/Charts/ApexBalanceHorizontalChart';
import XApexStocksPricesCard from '@organisms/Charts/ApexStocksPricesChart';
// import XApexDailySalesCard from '@organisms/Charts/ApexDailySalesChart';

const XApexCharts: React.FC = () => {
	return (
		<XBaseLayout pageTitle="Apex Charts">
			<div className="content-wrapper grid grid-cols-12 gap-6 mb-7">
				<XApexAreaCard className="col-span-12 break-inside-avoid" />
				<XApexBarCard className="col-span-12 break-inside-avoid" />
				<XApexTechnologiesCard className="col-span-12 break-inside-avoid" />
				<XApexBalanceCard className="col-span-12 break-inside-avoid" />
				<XApexBalanceHorizontalCard className="col-span-12 md:col-span-6 break-inside-avoid" />
				<XApexStocksPricesCard className="col-span-12 md:col-span-6 break-inside-avoid" />
				{/* <XApexDailySalesCard className="col-span-12 md:col-span-6 break-inside-avoid" /> */}
			</div>
		</XBaseLayout>
	);
};

export default XApexCharts;