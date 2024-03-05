import React from 'react';
import XBaseLayout from '../templates/BaseLayout';
import { users } from '../../assets/data/sampleData';
import XUsersTable from '../organisms/UsersTable';

const XUsers: React.FC = () => {
	return (
		<XBaseLayout>
			<div className="content-wrapper grid grid-cols-12 ">
				<h1 className="col-span-12 text-2xl font-bold text-gray-900 dark:text-white w-full mb-7">
					Users
				</h1>
				<XUsersTable userData={users} usersPerPage={10} />
			</div>
		</XBaseLayout>
	);
};

export default XUsers;
