import React from 'react';
import XBaseLayout from '../templates/BaseLayout';
import XUserProfileForm from '../organisms/UserUpdateForm';
import avatar from '../../assets/images/avatar.jpg';

const XUpdateProfile: React.FC = () => {
	const username = 'exampleUsername';
	const email = 'example@email.com';
	const avatarUrl = avatar;

	return (
		<XBaseLayout>
			<div className="content-wrapper grid grid-cols-12 gap-4 mb-7">
				<h1
					className="col-span-12 text-2xl font-bold text-gray-900 dark:text-white mb-7"
					data-testid="profile-heading"
				>
					Update Profile
				</h1>
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
