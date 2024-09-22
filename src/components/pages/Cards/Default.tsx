import React from 'react';
import XBaseLayout from '@templates/BaseLayout';

import {
	XDefaultCard,
	XWithCTAButtonCard,
	XWithImageCard,
	XHorizontalCard,
	XFormCard,
	XEcommerceCard,
	XCTACard,
	XPricingCard,
	XCryptoCard,
} from '@organisms/Cards';

const XDefaultCards: React.FC = () => {
	return (
		<XBaseLayout pageTitle="Default Cards">
			<div className="content-wrapper columns-2 space-y-6 gap-6 mb-7">
				<XDefaultCard />
				<XHorizontalCard />
				<XFormCard />
				<XCTACard />
				<XEcommerceCard />
				<XWithImageCard />
				<XWithCTAButtonCard />
				<XPricingCard />
				<XCryptoCard />
			</div>
		</XBaseLayout>
	);
};

export default XDefaultCards;
