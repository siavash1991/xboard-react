import React, { useState } from 'react';
import { Table } from 'flowbite-react';
import Pagination from '../molecules/Pagination';

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
			<div className="component-wrapper col-span-12 mb-1">
				<Table striped>
					<Table.Head>
						<Table.HeadCell>User ID</Table.HeadCell>
						<Table.HeadCell>Name</Table.HeadCell>
						<Table.HeadCell>Email</Table.HeadCell>
						<Table.HeadCell>Role</Table.HeadCell>
						<Table.HeadCell>
							<span className="sr-only">Edit</span>
						</Table.HeadCell>
					</Table.Head>
					<Table.Body className="divide-y">
						{currentUsers.map((user) => (
							<Table.Row
								key={user.id}
								className="bg-white dark:border-gray-700 dark:bg-gray-800"
							>
								<Table.Cell>{user.id}</Table.Cell>
								<Table.Cell>{user.name}</Table.Cell>
								<Table.Cell>{user.email}</Table.Cell>
								<Table.Cell>{user.role}</Table.Cell>
								<Table.Cell>
									<a
										href="/"
										className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
									>
										Edit
									</a>
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</div>
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
