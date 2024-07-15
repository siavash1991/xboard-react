import React from 'react';
import XBaseLayout from '../templates/BaseLayout';
import { users } from '../../assets/data/sampleData';
import XUsersTable from '../organisms/UsersTable';

const XUsers: React.FC = () => {
	return (
		<XBaseLayout pageTitle="Users">
			<div className="content-wrapper grid grid-cols-12 ">
				<XUsersTable userData={users} usersPerPage={10} />
			</div>
		</XBaseLayout>
	);
};

export default XUsers;
