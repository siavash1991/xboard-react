import React from 'react';
import XBaseLayout from '@templates/BaseLayout';
import XGridContainer from '@atoms/GridContainer';

import {
	XApexAreaCard,
	XApexBarCard,
	XApexTechnologiesCard,
	XApexBalanceCard,
	XApexBalanceHorizontalCard,
	XApexStocksPricesCard,
} from '@organisms/Charts';

const XApexCharts: React.FC = () => {
	return (
		<XBaseLayout pageTitle="Apex Charts">
			<XGridContainer className="content-wrapper">
				<XApexAreaCard />
				<XApexBarCard />
				<XApexTechnologiesCard />
				<XApexBalanceCard />
				<XApexBalanceHorizontalCard />
				<XApexStocksPricesCard />
			</XGridContainer>
		</XBaseLayout>
	);
};

export default XApexCharts;
