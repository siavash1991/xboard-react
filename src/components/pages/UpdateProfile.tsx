import React from 'react';
import XBaseLayout from '@templates/BaseLayout';
import XUserProfileForm from '@organisms/UserUpdateForm';
import avatar from '@assets/images/avatar.jpg';

const XUpdateProfile: React.FC = () => {
	const username = 'exampleUsername';
	const email = 'example@email.com';
	const avatarUrl = avatar;

	return (
		<XBaseLayout pageTitle="User Profile">
			<div className="content-wrapper grid grid-cols-12 gap-4 mb-7">
				<XUserProfileForm
					username={username}
					email={email}
					avatarUrl={avatarUrl}
				/>
			</div>
		</XBaseLayout>
	);
};

export default XUpdateProfile;
