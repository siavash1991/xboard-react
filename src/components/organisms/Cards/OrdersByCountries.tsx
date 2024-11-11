import React from 'react';
import { Tabs } from 'flowbite-react';
import {
	EllipsisVerticalIcon,
	CheckCircleIcon,
	MapPinIcon,
} from '@heroicons/react/24/outline';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';

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
const XOrdersByCountriesCard: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	return (
		<ComponentWrapper
			className={`bg-component-light dark:bg-gray-600 col-span-12 lg:col-span-6 2xl:col-span-4 $className`}
		>
			<XComponentHeader
				title="Orders by Countries"
				subtitle="62 deliveries in progress"
				menuItems={menuItems}
				menuIcon={<EllipsisVerticalIcon />}
				data-testid="component-header"
			/>
			<XComponentBody data-testid="component-body">
				<Tabs.Group aria-label="Tabs">
					<Tabs.Item active title="New" data-testid="tab-new">
						<div className="mt-4" data-testid="new-orders">
							{data.new.map(renderOrder)}
						</div>
					</Tabs.Item>
					<Tabs.Item title="Preparing" data-testid="tab-preparing">
						<div className="mt-4" data-testid="preparing-orders">
							{data.preparing.map(renderOrder)}
						</div>
					</Tabs.Item>
					<Tabs.Item title="Shipping" data-testid="tab-shipping">
						<div className="mt-4" data-testid="shipping-orders">
							{data.shipping.map(renderOrder)}
						</div>
					</Tabs.Item>
				</Tabs.Group>
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XOrdersByCountriesCard;
