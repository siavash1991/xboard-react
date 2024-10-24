import React from 'react';
import { Table } from 'flowbite-react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // For default Tippy styles
import ComponentWrapper from '@atoms/ComponentWrapper';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';
import XTableRowDropdownMenu from '@atoms/TableRowDropdownMenu';

import avatar5 from '@assets/images/avatars/5.png';
import avatar6 from '@assets/images/avatars/6.png';
import avatar7 from '@assets/images/avatars/7.png';
import LaravelImg from '@assets/images/cards/active-project/laravel-logo.png';
import FigmaImg from '@assets/images/cards/active-project/figma-logo.png';
import vueImg from '@assets/images/cards/active-project/vue-logo.png';
import reactImg from '@assets/images/cards/active-project/react-logo.png';

// Interfaces
interface User {
	id: string;
	fullName: string;
	avatarUrl: string;
}

interface Project {
	id: string;
	project: string;
	logo: string;
	client: string;
	users: User[];
	status: string;
	statusColor: string;
	statusTextColor: string;
}

interface XTableBasicProps {
	className?: string;
	tableData?: Project[]; // Accept tableData as a prop
}

// Sample user data
const users: User[] = [
	{ id: '1', fullName: 'John Doe', avatarUrl: avatar5 },
	{ id: '2', fullName: 'Jane Smith', avatarUrl: avatar6 },
	{ id: '3', fullName: 'Alice Johnson', avatarUrl: avatar7 },
];

// Sample table data - can be removed if only using props
const defaultTableData: Project[] = [
	{
		id: '1',
		project: 'Laravel Project',
		logo: LaravelImg,
		client: 'Olivia Parker',
		users: [users[0], users[1], users[2]],
		status: 'Pending',
		statusColor: 'bg-blue-100',
		statusTextColor: 'text-blue-500',
	},
	{
		id: '2',
		project: 'VueJs Project',
		logo: vueImg,
		client: 'Liam Carter',
		users: [users[0], users[1], users[2]],
		status: 'Scheduled',
		statusColor: 'bg-yellow-100',
		statusTextColor: 'text-yellow-500',
	},
	{
		id: '3',
		project: 'Figma Design',
		logo: FigmaImg,
		client: 'Sophia Walker',
		users: [users[0], users[1], users[2]],
		status: 'Active',
		statusColor: 'bg-green-100',
		statusTextColor: 'text-green-500',
	},
	{
		id: '4',
		project: 'React Project',
		logo: reactImg,
		client: 'Noah Brooks',
		users: [users[0], users[1], users[2]],
		status: 'Pending',
		statusColor: 'bg-blue-100',
		statusTextColor: 'text-blue-500',
	},
];

// Component Definition
const XTableBasic: React.FC<XTableBasicProps> = ({
	className = '',
	tableData = defaultTableData,
}) => {
	// Handlers for actions
	const handleEdit = (projectId: string) => {
		alert(`Edit action for project ID: ${projectId}`);
	};

	const handleDelete = (projectId: string) => {
		alert(`Delete action for project ID: ${projectId}`);
	};

	const menuItems = [
		{ id: 'edit', label: 'Edit', onClick: () => handleEdit('') }, // placeholder, can be updated in XTableRowDropdownMenu
		{ id: 'delete', label: 'Delete', onClick: () => handleDelete('') }, // placeholder, can be updated in XTableRowDropdownMenu
	];

	return (
		<ComponentWrapper
			className={`col-span-12 break-inside-avoid ${className}`}
		>
			<XComponentHeader
				title="Table Basic"
				className="border-b dark:border-gray-600 semi-dark:border-gray-500"
			/>
			<XComponentBody className="text-nowrap !p-0 overflow-x-auto">
				<Table>
					<Table.Head>
						<Table.HeadCell className="px-10 py-4">
							Project
						</Table.HeadCell>
						<Table.HeadCell>Client</Table.HeadCell>
						<Table.HeadCell>Users</Table.HeadCell>
						<Table.HeadCell>Status</Table.HeadCell>
						<Table.HeadCell>Actions</Table.HeadCell>
					</Table.Head>
					<Table.Body>
						{tableData.map((item) => (
							<Table.Row
								key={item.id}
								className="border-t dark:border-gray-600 semi-dark:border-gray-500"
							>
								<Table.Cell className="py-4">
									<img
										src={item.logo}
										alt={`${item.project}-logo`}
										className="w-5 mx-4 float-left"
									/>
									<span className="leading-2 font-semibold pe-4">
										{item.project}
									</span>
								</Table.Cell>
								<Table.Cell>{item.client}</Table.Cell>
								<Table.Cell>
									<ul className="list-unstyled m-0 avatar-group d-flex align-items-center">
										{item.users.map((user) => (
											<li
												key={user.id}
												className="avatar avatar-xs pull-up"
											>
												<Tippy content={user.fullName}>
													<img
														src={user.avatarUrl}
														alt={`Avatar of ${user.fullName}`}
														className="rounded-full w-5 float-left -mr-1 ring-2 ring-white dark:ring-gray-700 semi-dark:ring-gray-600"
													/>
												</Tippy>
											</li>
										))}
									</ul>
								</Table.Cell>
								<Table.Cell>
									<span
										className={`${item.statusColor} ${item.statusTextColor} rounded-md px-3 py-1`}
									>
										{item.status}
									</span>
								</Table.Cell>
								<Table.Cell>
									<XTableRowDropdownMenu
										menuItems={menuItems.map(
											(menuItem) => ({
												...menuItem,
												onClick: () => {
													if (
														menuItem.id === 'edit'
													) {
														handleEdit(item.id);
													} else {
														handleDelete(item.id);
													}
												},
											})
										)}
									/>
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XTableBasic;
