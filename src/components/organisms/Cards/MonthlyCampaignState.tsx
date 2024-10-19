import React from 'react';
import {
	CursorArrowRippleIcon,
	EllipsisVerticalIcon,
	EnvelopeIcon,
	EnvelopeOpenIcon,
	ExclamationTriangleIcon,
	UserMinusIcon,
	UserPlusIcon,
} from '@heroicons/react/24/outline';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';

interface DataItem {
	id: number;
	label: string;
	value: string;
	change: string;
	icon: string;
}

interface XMonthlyCampaignStateCardProps {
	className?: string;
}

const data: DataItem[] = [
	{
		id: 1,
		label: 'Emails',
		value: '12,346',
		change: '0.3%',
		icon: 'mail',
	},
	{
		id: 2,
		label: 'Opened',
		value: '8,734',
		change: '2.1%',
		icon: 'open',
	},
	{
		id: 3,
		label: 'Clicked',
		value: '967',
		change: '1.4%',
		icon: 'click',
	},
	{
		id: 4,
		label: 'Subscribe',
		value: '345',
		change: '8.5k',
		icon: 'subscribe',
	},
	{
		id: 5,
		label: 'Complaints',
		value: '10',
		change: '1.5%',
		icon: 'complaint',
	},
	{
		id: 6,
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
			return <CursorArrowRippleIcon className="w-6 h-6 text-gray-500" />;
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

const menuItems = [
	{
		id: 'Refresh',
		label: 'refresh',
		onClick: () => {
			/* handle click */
		},
	},
	{
		id: 'Download',
		label: 'download',
		onClick: () => {
			/* handle click */
		},
	},
	{
		id: 'viewAll',
		label: 'View All',
		onClick: () => {
			/* handle click */
		},
	},
];

const XMonthlyCampaignStateCard: React.FC<XMonthlyCampaignStateCardProps> = ({
	className = '',
}) => {
	return (
		<ComponentWrapper
			className={`bg-component-light dark:bg-gray-600 col-span-12 lg:col-span-6 xl:col-span-4 ${className}`}
		>
			<XComponentHeader
				title="Monthly Campaign State"
				subtitle="8.52k Social Visitors"
				menuItems={menuItems}
				menuIcon={<EllipsisVerticalIcon />}
			/>
			<XComponentBody>
				<ul className="space-y-6" data-testid="monthly-campaign-data">
					{data.map((item, index) => (
						<li
							key={item.id}
							className="flex items-center space-x-4"
							data-testid={`monthly-campaign-item-${item.id}`}
						>
							<div
								className={`badge rounded-lg p-2 ${
									index % 2 === 0
										? 'bg-green-200'
										: 'bg-blue-200'
								}`}
								data-testid={`monthly-campaign-item-icon-${item.id}`}
							>
								{getIconComponent(item.icon)}
							</div>
							<div className="flex justify-between w-full flex-wrap ml-4">
								<h6
									className="text-sm dark:text-white semi-dark:text-gray-200 font-semibold mb-0"
									data-testid={`monthly-campaign-item-label-${item.id}`}
								>
									{item.label}
								</h6>
								<div className="flex">
									<p
										className="dark:text-white semi-dark:text-gray-200 mb-0"
										data-testid={`monthly-campaign-item-value-${item.id}`}
									>
										{item.value}
									</p>
									<p
										className={`ms-4 ${
											index % 2 === 0
												? 'text-green-500'
												: 'text-blue-500'
										}`}
										data-testid={`monthly-campaign-item-change-${item.id}`}
									>
										{item.change}
									</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XMonthlyCampaignStateCard;
