import React from 'react';
import XBaseLayout from '@templates/BaseLayout';

import {
	XMonthlyCampaignStateCard,
	XActiveProjectCard,
	XEarningReportsCard,
	XOrdersByCountriesCard,
} from '@organisms/Cards';

const XAdvanceCards: React.FC = () => {
	return (
		<XBaseLayout pageTitle="Advance Cards">
			<div className="content-wrapper grid grid-cols-12 gap-6 mb-7">
				<XMonthlyCampaignStateCard />
				<XActiveProjectCard />
				<XEarningReportsCard />
				<XOrdersByCountriesCard />
			</div>
		</XBaseLayout>
	);
};

export default XAdvanceCards;
