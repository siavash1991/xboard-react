import React from 'react';
import { Card, Dropdown } from 'flowbite-react';
import {
	CursorArrowRippleIcon,
	EllipsisVerticalIcon,
	EnvelopeIcon,
	EnvelopeOpenIcon,
	ExclamationTriangleIcon,
	UserMinusIcon,
	UserPlusIcon,
} from '@heroicons/react/24/outline';
import ComponentWrapper from 'components/atoms/ComponentWrapper';

interface DataItem {
	label: string;
	value: string;
	change: string;
	icon: string;
}

interface XMonthlyCampaignStateCardProps {
	className?: string;
}

const XMonthlyCampaignStateCard: React.FC<XMonthlyCampaignStateCardProps> = ({
	className = '',
}) => {
	const data: DataItem[] = [
		{
			label: 'Emails',
			value: '12,346',
			change: '0.3%',
			icon: 'mail',
		},
		{
			label: 'Opened',
			value: '8,734',
			change: '2.1%',
			icon: 'open',
		},
		{
			label: 'Clicked',
			value: '967',
			change: '1.4%',
			icon: 'click',
		},
		{
			label: 'Subscribe',
			value: '345',
			change: '8.5k',
			icon: 'subscribe',
		},
		{
			label: 'Complaints',
			value: '10',
			change: '1.5%',
			icon: 'complaint',
		},
		{
			label: 'Unsubscribe',
			value: '86',
			change: '0.8%',
			icon: 'unsubscribe',
		},
	];

	const getIconComponent = (icon: string) => {
		switch (icon) {
			case 'mail':
				return <EnvelopeIcon className="w-6 h-6 text-gray-500" />;
			case 'open':
				return <EnvelopeOpenIcon className="w-6 h-6 text-gray-500" />;
			case 'click':
				return (
					<CursorArrowRippleIcon className="w-6 h-6 text-gray-500" />
				);
			case 'subscribe':
				return <UserPlusIcon className="w-6 h-6 text-gray-500" />;
			case 'complaint':
				return (
					<ExclamationTriangleIcon className="w-6 h-6 text-gray-500" />
				);
			case 'unsubscribe':
				return <UserMinusIcon className="w-6 h-6 text-gray-500" />;
			default:
				return null;
		}
	};

	return (
		<ComponentWrapper className={className}>
			<Card>
				<div className="card-header flex justify-between items-center mb-4">
					<div className="card-title">
						<h5 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
							Monthly Campaign State
						</h5>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							8.52k Social Visitors
						</p>
					</div>
					<Dropdown
						label={
							<EllipsisVerticalIcon className="w-6 h-6 text-gray-500" />
						}
						inline={true}
						arrowIcon={false}
					>
						<Dropdown.Item>Refresh</Dropdown.Item>
						<Dropdown.Item>Download</Dropdown.Item>
						<Dropdown.Item>View All</Dropdown.Item>
					</Dropdown>
				</div>
				<div className="card-body">
					<ul className="space-y-6">
						{data.map((item, index) => (
							<li
								key={index}
								className="flex items-center space-x-4"
							>
								<div
									className={`badge rounded-lg p-2 ${
										index % 2 === 0
											? 'bg-green-200'
											: 'bg-blue-200'
									}`}
								>
									{getIconComponent(item.icon)}
								</div>
								<div className="flex justify-between w-full flex-wrap ml-4">
									<h6 className="text-sm font-semibold mb-0">
										{item.label}
									</h6>
									<div className="flex">
										<p className="mb-0">{item.value}</p>
										<p
											className={`ml-4 ${
												index % 2 === 0
													? 'text-green-500'
													: 'text-blue-500'
											}`}
										>
											{item.change}
										</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</Card>
		</ComponentWrapper>
	);
};

export default XMonthlyCampaignStateCard;
