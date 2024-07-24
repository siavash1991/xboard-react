import React from 'react';
import XBaseLayout from '@templates/BaseLayout';
import XDefaultCard from '@organisms/Cards/Default';
import XWithCTAButtonCard from '@organisms/Cards/WithCTAButton';
import XWithImageCard from '@organisms/Cards/Image';
import XHorizontalCard from '@organisms/Cards/Horizontal';
import XFormCard from '@organisms/Cards/Form';
import XEcommerceCard from '@organisms/Cards/Ecommerce';
import XCTACard from '@organisms/Cards/CTA';
import XPricingCard from '@organisms/Cards/Pricing';
import XCryptoCard from '@organisms/Cards/Crypto';

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
