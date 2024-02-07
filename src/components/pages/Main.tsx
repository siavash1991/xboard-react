import React from 'react';
import XBaseLayout from '../templates/BaseLayout';
import XOverviewCards from '../molecules/OverviewCards';
import { overview } from '../../assets/data/sampleData';

const XMain: React.FC = () => {
	return (
		<XBaseLayout>
			<div className="content-wrapper grid grid-cols-12 ">
				<h1 className="text-2xl font-bold text-gray-900 dark:text-white w-full mb-7">
					Dashboard
				</h1>
				<XOverviewCards cardData={overview} />
			</div>
		</XBaseLayout>
	);
};

export default XMain;
