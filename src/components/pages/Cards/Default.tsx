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
		<XBaseLayout pageTitle="Default Cards">
			<div className="content-wrapper columns-2 space-y-6 gap-6 mb-7">
				<XDefaultCard className="break-inside-avoid" />
				<XHorizontalCard className="break-inside-avoid" />
				<XFormCard className="break-inside-avoid" />
				<XCTACard className="break-inside-avoid" />
				<XEcommerceCard className="break-inside-avoid" />
				<XWithImageCard className="break-inside-avoid" />
				<XWithCTAButtonCard className="break-inside-avoid" />
				<XPricingCard className="break-inside-avoid" />
				<XCryptoCard className="break-inside-avoid" />
			</div>
		</XBaseLayout>
	);
};

export default XDefaultCards;
