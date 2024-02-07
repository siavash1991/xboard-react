import React from 'react';
import XBaseLayout from '../templates/BaseLayout';
import XOverviewCards from '../molecules/OverviewCards';
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
				<XOverviewCards cardData={overview} />
				<XSimpleTable />
				<div className="col-span-12 grid grid-cols-12 gap-4 mb-7">
					<XLineChart />
					<XBarChart />
				</div>
			</div>
		</XBaseLayout>
	);
};

export default XMain;
