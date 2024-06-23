import React from 'react';
import XBaseLayout from '../../templates/BaseLayout';
import XDefaultCard from 'components/molecules/Cards/Default';
import XWithCTAButtonCard from 'components/molecules/Cards/WithCTAButton';
import XWithImageCard from 'components/molecules/Cards/Image';
import XHorizontalCard from 'components/molecules/Cards/Horizontal';
import XFormCard from 'components/molecules/Cards/Form';
import XEcommerceCard from 'components/molecules/Cards/Ecommerce';
import XCTACard from 'components/molecules/Cards/CTA';
import XPricingCard from 'components/molecules/Cards/Pricing';
import XCryptoCard from 'components/molecules/Cards/Crypto';

const XDefaultCards: React.FC = () => {
	return (
		<XBaseLayout>
			<div className="content-wrapper grid grid-cols-12 gap-4 mb-7">
				<h1
					className="col-span-12 text-2xl font-bold text-gray-900 dark:text-white mb-7"
					data-testid="profile-heading"
				>
					Default Cards
				</h1>
				<XDefaultCard className="col-span-4" />
				<XWithCTAButtonCard className="col-span-4" />
				<XWithImageCard className="col-span-4" />
				<XHorizontalCard className="col-span-6" />
				<XFormCard className="col-span-6" />
				<XEcommerceCard className="col-span-4" />
				<XCTACard className="col-span-4" />
				<XPricingCard className="col-span-4" />
				<XCryptoCard className="col-span-4" />
			</div>
		</XBaseLayout>
	);
};

export default XDefaultCards;
