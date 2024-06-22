import React from 'react';
import { Card } from 'flowbite-react';
import {
	CursorArrowRippleIcon,
	EnvelopeIcon,
	EnvelopeOpenIcon,
	ExclamationTriangleIcon,
	UserMinusIcon,
	UserPlusIcon,
} from '@heroicons/react/24/outline';
interface DataItem {
	label: string;
	value: string;
	change: string;
	icon: string;
	bgColor: string;
	textColor: string;
}

interface XDefaultCardProps {
	className?: string;
}
const XMonthlyCampaignStateCard: React.FC<XDefaultCardProps> = ({
	className = '',
}) => {
	const data: DataItem[] = [
		{
			label: 'Emails',
			value: '12,346',
			change: '0.3%',
			icon: 'mail',
			bgColor: 'bg-green-100',
			textColor: 'text-green-500',
		},
		{
			label: 'Opened',
			value: '8,734',
			change: '2.1%',
			icon: 'open',
			bgColor: 'bg-blue-100',
			textColor: 'text-blue-500',
		},
		{
			label: 'Clicked',
			value: '967',
			change: '1.4%',
			icon: 'click',
			bgColor: 'bg-yellow-100',
			textColor: 'text-yellow-500',
		},
		{
			label: 'Subscribe',
			value: '345',
			change: '8.5k',
			icon: 'subscribe',
			bgColor: 'bg-purple-100',
			textColor: 'text-purple-500',
		},
		{
			label: 'Complaints',
			value: '10',
			change: '1.5%',
			icon: 'complaint',
			bgColor: 'bg-red-100',
			textColor: 'text-red-500',
		},
		{
			label: 'Unsubscribe',
			value: '86',
			change: '0.8%',
			icon: 'unsubscribe',
			bgColor: 'bg-gray-100',
			textColor: 'text-gray-500',
		},
	];

	const getIcon = (icon: string) => {
		switch (icon) {
			case 'mail':
				return (
					<EnvelopeIcon className="size-6 text-gray-500 stroke-1.3" />
				);
			case 'open':
				return (
					<EnvelopeOpenIcon className="size-6 text-gray-500 stroke-1.3" />
				);
			case 'click':
				return (
					<CursorArrowRippleIcon className="size-6 text-gray-500 stroke-1.3" />
				);
			case 'subscribe':
				return (
					<UserPlusIcon className="size-6 text-gray-500 stroke-1.3" />
				);
			case 'complaint':
				return (
					<ExclamationTriangleIcon className="size-6 text-gray-500 stroke-1.3" />
				);
			case 'unsubscribe':
				return (
					<UserMinusIcon className="size-6 text-gray-500 stroke-1.3" />
				);
			default:
				return null;
		}
	};

	return (
		<div className={`component-wrapper mb-7 ${className}`}>
			<Card href="#">
				<div className="flex justify-between items-center mb-4">
					<div>
						<h2 className="text-lg font-semibold text-gray-900">
							Monthly Campaign State
						</h2>
						<p className="text-sm text-gray-500">
							8.52k Social Visitors
						</p>
					</div>
					<div className="text-gray-400">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 12h.01M12 12h.01M18 12h.01"
							/>
						</svg>
					</div>
				</div>
				<div className="space-y-4">
					{data.map((item, index) => (
						<div
							key={index}
							className="flex justify-between items-center"
						>
							<div className="flex items-center">
								<div
									className={`${item.bgColor} w-10 h-10 rounded-full flex items-center justify-center`}
								>
									{getIcon(item.icon)}
								</div>
								<span className="ml-3 text-gray-700">
									{item.label}
								</span>
							</div>
							<div className="text-right">
								<p className="text-gray-900">{item.value}</p>
								<p className={`${item.textColor} text-sm`}>
									{item.change}
								</p>
							</div>
						</div>
					))}
				</div>
			</Card>
		</div>
	);
};

export default XMonthlyCampaignStateCard;
