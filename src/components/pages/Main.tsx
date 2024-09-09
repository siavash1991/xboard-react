import React from 'react';
import XBaseLayout from '@templates/BaseLayout';
import XOverviewCards from '@organisms/OverviewCards';
import { overview } from '@assets/data/sampleData';
import XTableBasic from '@organisms/Table/TableBasic';
import XTableStriped from '@organisms/Table/TableStriped';
import XApexAreaCard from '@organisms/Charts/ApexAreaChart';
import XChartJsPolarCard from '@organisms/Charts/ChartJsPolar';
import XChartJsRadarCard from '@organisms/Charts/ChartJsRadar';
import XCryptoCard from '@organisms/Cards/Crypto';
import XEarningReportsCard from '@organisms/Cards/EarningReport';
import XActiveProjectCard from '@organisms/Cards/ActiveProject';
import XOrdersByCountriesCard from '@organisms/Cards/OrdersByCountries';

const XMain: React.FC = () => {
	return (
		<XBaseLayout pageTitle="Dashboard">
			{/* <div className="content-wrapper grid grid-cols-12 ">
				<XOverviewCards
					cardData={overview}
					className="col-span-12 grid-cols-12 gap-4 w-full"
				/>
				<XApexAreaCard className="col-span-12 break-inside-avoid" />
				<XTableBasic className="col-span-12 break-inside-avoid" />
				<div className="col-span-12 grid grid-cols-12 gap-4 mb-7">
					<XChartJsRadarCard className="col-span-6 break-inside-avoid" />
					<XChartJsPolarCard className="col-span-6 break-inside-avoid" />
				</div>
				<XTableStriped className="col-span-12 break-inside-avoid" />
				<div className="col-span-12 grid grid-cols-12 gap-4 mb-7">
					<XCryptoCard className="col-span-6 break-inside-avoid" />
					<XEarningReportsCard className="col-span-6 break-inside-avoid" />
					<XActiveProjectCard className="col-span-6 break-inside-avoid" />
					<XOrdersByCountriesCard className="col-span-6 break-inside-avoid" />
				</div>
			</div> */}
		</XBaseLayout>
	);
};

export default XMain;
