import React from 'react';
import XBaseLayout from '@templates/BaseLayout';
import XOverviewCards from '@organisms/OverviewCards';
import XGridContainer from '@atoms/GridContainer';
import { overview } from '@assets/data/sampleData';

import {
	XApexAreaCard,
	XChartJsRadarCard,
	XChartJsPolarCard,
} from '@organisms/Charts';

import { XTableBasic, XTableStriped } from '@organisms/Tables';

import {
	XCryptoCard,
	XEarningReportsCard,
	XActiveProjectCard,
	XOrdersByCountriesCard,
} from '@organisms/Cards';

const XMain: React.FC = () => {
	return (
		<XBaseLayout pageTitle="Dashboard">
			<XGridContainer className="content-wrapper">
				<XOverviewCards cardData={overview} />
				<XApexAreaCard />
				<XTableBasic />

				<XGridContainer className="col-span-12">
					<XChartJsRadarCard />
					<XChartJsPolarCard />
				</XGridContainer>
				<XTableStriped />
				<XGridContainer className="col-span-12">
					<XCryptoCard />
					<XEarningReportsCard />
					<XActiveProjectCard />
					<XOrdersByCountriesCard />
				</XGridContainer>
			</XGridContainer>
		</XBaseLayout>
	);
};

export default XMain;
