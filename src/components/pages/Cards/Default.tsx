import React from 'react';
import XBaseLayout from '../../templates/BaseLayout';
import XDefaultCard from 'components/molecules/Cards/Default';

const XDefaultCards: React.FC = () => {
	return (
		<XBaseLayout>
			<div className="content-wrapper grid grid-cols-12 mb-7">
				<h1
					className="col-span-12 text-2xl font-bold text-gray-900 dark:text-white mb-7"
					data-testid="profile-heading"
				>
					Default Cards
				</h1>
				<XDefaultCard className="col-span-4" />
			</div>
		</XBaseLayout>
	);
};

export default XDefaultCards;
