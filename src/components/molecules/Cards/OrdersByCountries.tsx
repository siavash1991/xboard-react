import React from 'react';
import { Card, Dropdown, Tabs } from 'flowbite-react';
import {
	EllipsisVerticalIcon,
	CheckCircleIcon,
	MapPinIcon,
} from '@heroicons/react/24/outline';
import ComponentWrapper from 'components/atoms/ComponentWrapper';

interface Order {
	id: string;
	sender: {
		status: string;
		name: string;
		address: string;
		icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
		iconColor: string;
		textColor: string;
	};
	receiver: {
		status: string;
		name: string;
		address: string;
		icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
		iconColor: string;
		textColor: string;
	};
}

interface OrdersData {
	new: Order[];
	preparing: Order[];
	shipping: Order[];
}

const data: OrdersData = {
	new: [
		{
			id: '1',
			sender: {
				status: 'SENDER',
				name: 'Myrtle Ullrich',
				address: '101 Boulder, California(CA), 95959',
				icon: CheckCircleIcon,
				iconColor: 'text-green-500',
				textColor: 'text-green-500',
			},
			receiver: {
				status: 'RECEIVER',
				name: 'Barry Schowalter',
				address: '939 Orange, California(CA), 92118',
				icon: MapPinIcon,
				iconColor: 'text-blue-500',
				textColor: 'text-blue-500',
			},
		},
		{
			id: '2',
			sender: {
				status: 'SENDER',
				name: 'Veronica Herman',
				address: '162 Windsor, California(CA), 95492',
				icon: CheckCircleIcon,
				iconColor: 'text-green-500',
				textColor: 'text-green-500',
			},
			receiver: {
				status: 'RECEIVER',
				name: 'Helen Jacobs',
				address: '487 Sunset, California(CA), 94043',
				icon: MapPinIcon,
				iconColor: 'text-blue-500',
				textColor: 'text-blue-500',
			},
		},
	],
	preparing: [
		{
			id: '3',
			sender: {
				status: 'SENDER',
				name: 'Barry Schowalter',
				address: '939 Orange, California(CA), 92118',
				icon: CheckCircleIcon,
				iconColor: 'text-green-500',
				textColor: 'text-green-500',
			},
			receiver: {
				status: 'RECEIVER',
				name: 'Myrtle Ullrich',
				address: '101 Boulder, California(CA), 95959',
				icon: MapPinIcon,
				iconColor: 'text-blue-500',
				textColor: 'text-blue-500',
			},
		},
		{
			id: '4',
			sender: {
				status: 'SENDER',
				name: 'Veronica Herman',
				address: '162 Windsor, California(CA), 95492',
				icon: CheckCircleIcon,
				iconColor: 'text-green-500',
				textColor: 'text-green-500',
			},
			receiver: {
				status: 'RECEIVER',
				name: 'Helen Jacobs',
				address: '487 Sunset, California(CA), 94043',
				icon: MapPinIcon,
				iconColor: 'text-blue-500',
				textColor: 'text-blue-500',
			},
		},
	],
	shipping: [
		{
			id: '5',
			sender: {
				status: 'SENDER',
				name: 'Veronica Herman',
				address: '101 Boulder, California(CA), 95959',
				icon: CheckCircleIcon,
				iconColor: 'text-green-500',
				textColor: 'text-green-500',
			},
			receiver: {
				status: 'RECEIVER',
				name: 'Barry Schowalter',
				address: '939 Orange, California(CA), 92118',
				icon: MapPinIcon,
				iconColor: 'text-blue-500',
				textColor: 'text-blue-500',
			},
		},
		{
			id: '6',
			sender: {
				status: 'SENDER',
				name: 'Myrtle Ullrich',
				address: '162 Windsor, California(CA), 95492',
				icon: CheckCircleIcon,
				iconColor: 'text-green-500',
				textColor: 'text-green-500',
			},
			receiver: {
				status: 'RECEIVER',
				name: 'Helen Jacobs',
				address: '487 Sunset, California(CA), 94043',
				icon: MapPinIcon,
				iconColor: 'text-blue-500',
				textColor: 'text-blue-500',
			},
		},
	],
};

const XOrdersByCountriesCard: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	const renderOrder = (order: Order) => (
		<ul
			key={order.id}
			className="mb-5 [&:not(:last-child)]:border-b border-gray-200 border-dashed [&:not(:last-child)]:pb-5"
		>
			<li className="flex items-start mb-1 ml-2 border-l border-dashed ">
				<order.sender.icon
					className={`w-5 h-5 ${order.sender.iconColor} mr-2 -ml-2.5 bg-white`}
				/>
				<div>
					<p
						className={`text-sm font-medium ${order.sender.textColor} uppercase`}
					>
						{order.sender.status}
					</p>
					<p className="text-sm font-medium text-gray-800 dark:text-white">
						{order.sender.name}
					</p>
					<p className="text-sm text-gray-500 dark:text-gray-400">
						{order.sender.address}
					</p>
				</div>
			</li>
			<li className="flex items-start mb-1 ml-2">
				<order.receiver.icon
					className={`w-5 h-5 ${order.receiver.iconColor} mr-2 -ml-2.5 bg-white`}
				/>
				<div>
					<p
						className={`text-sm font-medium ${order.receiver.textColor} uppercase`}
					>
						{order.receiver.status}
					</p>
					<p className="text-sm font-medium text-gray-800 dark:text-white">
						{order.receiver.name}
					</p>
					<p className="text-sm text-gray-500 dark:text-gray-400">
						{order.receiver.address}
					</p>
				</div>
			</li>
		</ul>
	);

	return (
		<ComponentWrapper className={className}>
			<Card>
				<div className="flex justify-between items-center mb-4">
					<div>
						<h5 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
							Orders by Countries
						</h5>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							62 deliveries in progress
						</p>
					</div>
					<Dropdown
						label={
							<EllipsisVerticalIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
						}
						inline={true}
						arrowIcon={false}
					>
						<Dropdown.Item>Select All</Dropdown.Item>
						<Dropdown.Item>Refresh</Dropdown.Item>
						<Dropdown.Item>Share</Dropdown.Item>
					</Dropdown>
				</div>

				<Tabs.Group aria-label="Tabs" className="w-full">
					<Tabs.Item active title="New">
						<div className="mt-4">{data.new.map(renderOrder)}</div>
					</Tabs.Item>

					<Tabs.Item title="Preparing">
						<div className="mt-4">
							{data.preparing.map(renderOrder)}
						</div>
					</Tabs.Item>

					<Tabs.Item title="Shipping">
						<div className="mt-4">
							{data.shipping.map(renderOrder)}
						</div>
					</Tabs.Item>
				</Tabs.Group>
			</Card>
		</ComponentWrapper>
	);
};

export default XOrdersByCountriesCard;
