import React from 'react';
import XBaseLayout from '../templates/BaseLayout';
import XOverviewCards from '../organisms/OverviewCards';
import XSimpleTable from '../molecules/SimpleTable';
import XLineChart from '../molecules/LineChart';
import { overview } from '../../assets/data/sampleData';
import XBarChart from '../molecules/BarChart';

const XMain: React.FC = () => {
	return (
		<XBaseLayout>
			<div className="content-wrapper grid grid-cols-12 ">
				<h1 className="text-2xl font-bold text-gray-900 dark:text-white w-full mb-7">
					Dashboard
				</h1>
				<XOverviewCards
					cardData={overview}
					className="col-span-12 grid-cols-12 gap-4 w-full"
				/>
				<XSimpleTable className="bg-component-light dark:bg-gray-600 col-span-12" />
				<div className="col-span-12 grid grid-cols-12 gap-4 mb-7">
					<XLineChart className="bg-component-light dark:bg-gray-600 col-span-12 md:col-span-6" />
					<XBarChart className="bg-component-light dark:bg-gray-600 col-span-12 md:col-span-6" />
				</div>
			</div>
		</XBaseLayout>
	);
};

export default XMain;
