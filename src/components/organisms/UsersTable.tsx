import React, { useState } from 'react';
import { Table } from 'flowbite-react';
import Pagination from '@atoms/Pagination';
import ComponentWrapper from '@atoms/ComponentWrapper';

interface User {
	id: number;
	name: string;
	email: string;
	role: string;
}

interface UsersTableProps {
	userData: User[];
	usersPerPage: number;
}

const XUsersTable: React.FC<UsersTableProps> = ({ userData, usersPerPage }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const indexOfLastUser = currentPage * usersPerPage;
	const indexOfFirstUser = indexOfLastUser - usersPerPage;
	const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);

	const onPageChange = (page: number) => setCurrentPage(page);

	return (
		<>
			<ComponentWrapper className="col-span-12 mb-1 overflow-x-auto">
				<Table striped>
					<Table.Head>
						<Table.HeadCell className="bg-white dark:bg-gray-800 semi-dark:bg-gray-600">
							User ID
						</Table.HeadCell>
						<Table.HeadCell className="bg-white dark:bg-gray-800 semi-dark:bg-gray-600">
							Name
						</Table.HeadCell>
						<Table.HeadCell className="bg-white dark:bg-gray-800 semi-dark:bg-gray-600">
							Email
						</Table.HeadCell>
						<Table.HeadCell className="bg-white dark:bg-gray-800 semi-dark:bg-gray-600">
							Role
						</Table.HeadCell>
						<Table.HeadCell className="bg-white dark:bg-gray-800 semi-dark:bg-gray-600">
							<span className="sr-only">Edit</span>
						</Table.HeadCell>
					</Table.Head>
					<Table.Body className="divide-y">
						{currentUsers.map((user) => (
							<Table.Row
								key={user.id}
								className="bg-white dark:border-gray-700 semi-dark:border-gray-600 dark:bg-gray-800 semi-dark:bg-gray-700"
							>
								<Table.Cell className="text-gray-900 dark:text-gray-300 semi-dark:text-gray-400">
									{user.id}
								</Table.Cell>
								<Table.Cell className="text-gray-900 dark:text-gray-300 semi-dark:text-gray-400">
									{user.name}
								</Table.Cell>
								<Table.Cell className="text-gray-900 dark:text-gray-300 semi-dark:text-gray-400">
									{user.email}
								</Table.Cell>
								<Table.Cell className="text-gray-900 dark:text-gray-300 semi-dark:text-gray-400">
									{user.role}
								</Table.Cell>
								<Table.Cell>
									<a
										href="/"
										className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 semi-dark:text-cyan-700"
									>
										Edit
									</a>
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</ComponentWrapper>
			<Pagination
				totalItems={userData.length}
				itemsPerPage={usersPerPage}
				currentPage={currentPage}
				onPageChange={onPageChange}
				className="col-span-12"
			/>
		</>
	);
};

export default XUsersTable;
