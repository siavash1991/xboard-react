import React from 'react';
import XBaseLayout from '@templates/BaseLayout';
import XMonthlyCampaignStateCard from '@organisms/Cards/MonthlyCampaignState';
import XActiveProjectCard from '@organisms/Cards/ActiveProject';
import XEarningReportsCard from '@organisms/Cards/EarningReport';
import XOrdersByCountriesCard from '@organisms/Cards/OrdersByCountries';

const XAdvanceCards: React.FC = () => {
	return (
		<XBaseLayout pageTitle="Advance Cards">
			<div className="content-wrapper grid grid-cols-12 gap-6 mb-7">
				<XMonthlyCampaignStateCard className="bg-component-light dark:bg-gray-600  col-span-12 md:col-span-6" />
				<XActiveProjectCard className="bg-component-light dark:bg-gray-600 col-span-12 md:col-span-6" />
				<XEarningReportsCard className="bg-component-light dark:bg-gray-600 col-span-12 md:col-span-6" />
				<XOrdersByCountriesCard className="bg-component-light dark:bg-gray-600 col-span-12 md:col-span-6" />
			</div>
		</XBaseLayout>
	);
};

export default XAdvanceCards;
