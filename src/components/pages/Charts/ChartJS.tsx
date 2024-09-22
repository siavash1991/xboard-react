import React from 'react';
import XBaseLayout from '@templates/BaseLayout';

import {
	XChartJsBarCard,
	XChartJsHorizontalBarCard,
	XChartJsLineCard,
	XChartJsRadarCard,
	XChartJsPolarCard,
	XChartJsBubbleCard,
} from '@organisms/Charts';

const XChartJS: React.FC = () => {
	return (
		<XBaseLayout pageTitle="ChartJS">
			<div className="content-wrapper grid grid-cols-12 gap-6 mb-7">
				<XChartJsBarCard />
				<XChartJsHorizontalBarCard />
				<XChartJsLineCard />
				<XChartJsRadarCard />
				<XChartJsPolarCard />
				<XChartJsBubbleCard />
			</div>
		</XBaseLayout>
	);
};

export default XChartJS;
