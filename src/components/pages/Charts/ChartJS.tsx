import React from 'react';
import XBaseLayout from '@templates/BaseLayout';
import XChartJsBarCard from '@organisms/Charts/ChartJsBar';
import XChartJsHorizontalBarCard from '@organisms/Charts/ChartJsHorizontalBar';
import XChartJsLineCard from '@organisms/Charts/ChartJsLine';
import XChartJsRadarCard from '@organisms/Charts/ChartJsRadar';
import XChartJsPolarCard from '@organisms/Charts/ChartJsPolar';
import XChartJsBubbleCard from '@organisms/Charts/ChartJsBubble';

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
