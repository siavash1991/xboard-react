import React from 'react';
import XBaseLayout from '@templates/BaseLayout';
import XChartJsBarCard from '@organisms/ChartCards/ChartJsBarCard';
import XChartJsHorizontalBarCard from '@organisms/ChartCards/ChartJsHorizontalBarCard';
import XChartJsLineCard from '@organisms/ChartCards/ChartJsLineCard';
import XChartJsRadarCard from '@organisms/ChartCards/ChartJsRadarCard';
import XChartJsPolarCard from '@organisms/ChartCards/ChartJsPolarCard';
import XChartJsBubbleCard from '@organisms/ChartCards/ChartJsBubbleCard';

const XChartJS: React.FC = () => {
	return (
		<XBaseLayout pageTitle="ChartJS">
			<div className="content-wrapper grid grid-cols-12 gap-6 mb-7">
				<XChartJsBarCard className="col-span-6 break-inside-avoid" />
				<XChartJsHorizontalBarCard className="col-span-6 break-inside-avoid" />
				<XChartJsLineCard className="col-span-12 break-inside-avoid" />
				<XChartJsRadarCard className="col-span-6 break-inside-avoid" />
				<XChartJsPolarCard className="col-span-6 break-inside-avoid" />
				<XChartJsBubbleCard className="col-span-12 break-inside-avoid" />
			</div>
		</XBaseLayout>
	);
};

export default XChartJS;
