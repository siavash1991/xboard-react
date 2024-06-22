import React from 'react';
import XBaseLayout from '../../templates/BaseLayout';
import XMonthlyCampaignStateCard from 'components/molecules/Cards/MonthlyCampaignState';

const XDefaultCards: React.FC = () => {
	return (
		<XBaseLayout>
			<div className="content-wrapper grid grid-cols-12 mb-7">
				<h1
					className="col-span-12 text-2xl font-bold text-gray-900 dark:text-white mb-7"
					data-testid="profile-heading"
				>
					Advance Cards
				</h1>
				<XMonthlyCampaignStateCard className="bg-component-light dark:bg-gray-600 col-span-4" />
			</div>
		</XBaseLayout>
	);
};

export default XDefaultCards;
