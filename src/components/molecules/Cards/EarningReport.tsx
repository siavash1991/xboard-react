import React from 'react';
import { Card, Dropdown } from 'flowbite-react';
import {
	EllipsisVerticalIcon,
	ChartPieIcon,
	CurrencyDollarIcon,
	CreditCardIcon,
	ChevronUpIcon,
} from '@heroicons/react/24/outline';
import ComponentWrapper from 'components/atoms/ComponentWrapper';
import { ApexOptions } from 'apexcharts';
import XBarChart from 'components/molecules/BarChart';

const XEarningReportsCard: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	// Sample data for the chart
	const series: ApexOptions['series'] = [
		{
			name: 'Progress',
			data: [40, 58, 33, 29, 60], // Replace with your actual data
		},
	];

	// Options for the chart
	const options: ApexOptions = {
		grid: {
			show: false,
			padding: {
				left: 0,
				right: 0,
			},
		},
		chart: {
			type: 'bar',
			toolbar: {
				show: false,
			},
			sparkline: {
				enabled: false,
			},
		},

		colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '55%',
				borderRadius: 3,
				borderRadiusApplication: 'end',
				distributed: true,
			},
		},
		dataLabels: {
			enabled: true,
		},
		xaxis: {
			categories: [
				'Today',
				'Three Days',
				'This Week',
				'Last Month',
				'Year',
			], // Replace with your period labels
		},
		yaxis: {
			show: false,
		},
		fill: {
			opacity: 0.8,
		},
		legend: {
			show: false,
		},
	};

	const data = [
		{
			label: 'Net Profit',
			value: '$1,619',
			change: '18.6%',
			subtitle: '12.4k Sales',
			icon: ChartPieIcon,
			color: 'bg-purple-100 text-purple-600',
		},
		{
			label: 'Total Income',
			value: '$3,571',
			change: '39.6%',
			subtitle: 'Sales, Affiliation',
			icon: CurrencyDollarIcon,
			color: 'bg-green-100 text-green-600',
		},
		{
			label: 'Total Expenses',
			value: '$430',
			change: '52.8%',
			subtitle: 'ADVT, Marketing',
			icon: CreditCardIcon,
			color: 'bg-gray-100 text-gray-600',
		},
	];

	return (
		<ComponentWrapper className={className}>
			<Card>
				<div className="flex justify-between items-center mb-4">
					<div>
						<h5 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
							Earning Reports
						</h5>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Weekly Earnings Overview
						</p>
					</div>
					<Dropdown
						label={
							<EllipsisVerticalIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
						}
						inline={true}
						arrowIcon={false}
					>
						<Dropdown.Item>Download</Dropdown.Item>
						<Dropdown.Item>Refresh</Dropdown.Item>
						<Dropdown.Item>Share</Dropdown.Item>
					</Dropdown>
				</div>
				<ul className="space-y-6">
					{data.map((item, index) => (
						<li key={index} className="flex items-center space-x-4">
							<div
								className={`badge rounded-lg p-2 ${item.color}`}
							>
								<item.icon className="w-6 h-6" />
							</div>
							<div className="flex w-full justify-between items-center ml-4 ">
								<div>
									<h6 className="text-sm font-semibold mb-0 text-gray-800 dark:text-white">
										{item.label}
									</h6>
									<small className="text-gray-500 dark:text-gray-400">
										{item.subtitle}
									</small>
								</div>
								<div className="flex items-center">
									<p className="font-medium text-gray-800 dark:text-white">
										{item.value}
									</p>
									<div className="flex items-center ml-4 space-x-2">
										<ChevronUpIcon className="w-4 h-4 text-green-500" />
										<small className="text-gray-500 dark:text-gray-400">
											{item.change}
										</small>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
				<XBarChart series={series} options={options} height={200} />
			</Card>
		</ComponentWrapper>
	);
};

export default XEarningReportsCard;
