import { Avatar } from 'flowbite-react';
const XUserAvatarInfo = () => {
	return (
		<div className="flex items-center gap-4">
			<Avatar
				img="/images/avatar.jpg"
				w-10
				h-10
				rounded-md
				status="online"
				statusPosition="bottom-right"
			/>

			<div className="hidden sm:block font-medium dark:text-white">
				<div>Jese Leos</div>
				<div className="text-xs text-gray-500 dark:text-gray-400">
					Joined in August 2014
				</div>
			</div>
		</div>
	);
};

export default XUserAvatarInfo;
