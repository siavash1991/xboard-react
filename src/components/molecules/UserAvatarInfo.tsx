import { Avatar } from 'flowbite-react';
import avatarImg from '../../assets/images/avatar.jpg';
const XUserAvatarInfo = () => {
	return (
		<div className="flex items-center gap-4">
			<Avatar
				img={avatarImg}
				status="online"
				statusPosition="bottom-right"
				size="md"
			/>

			<div className="hidden sm:block font-medium dark:text-white">
				<div>Jese Leos</div>
				<div className="text-xs text-gray-500 dark:text-gray-400">
					Joined in 2014
				</div>
			</div>
		</div>
	);
};

export default XUserAvatarInfo;
