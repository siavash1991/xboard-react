import React from 'react';
import XBaseLayout from '@templates/BaseLayout';
import { users } from '@assets/data/sampleData';
import XUsersTable from '@organisms/UsersTable';
import XGridContainer from '@atoms/GridContainer';

const XUsers: React.FC = () => {
	return (
		<XBaseLayout pageTitle="Users">
			<XGridContainer className="content-wrapper">
				<XUsersTable userData={users} usersPerPage={10} />
			</XGridContainer>
		</XBaseLayout>
	);
};

export default XUsers;
