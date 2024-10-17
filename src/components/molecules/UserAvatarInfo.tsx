import { Avatar } from 'flowbite-react';
import avatarImg from '@assets/images/avatar.jpg';

interface XUserAvatarInfoProps {
	className?: string;
}

const XUserAvatarInfo: React.FC<XUserAvatarInfoProps> = ({
	className = '',
}) => {
	return (
		<div
			className={`flex items-center gap-4 ${className}`}
			data-testid="user-avatar-info"
		>
			<Avatar
				img={avatarImg}
				status="online"
				statusPosition="bottom-right"
				size="md"
				data-testid="user-avatar"
			/>

			<div
				className="hidden sm:block font-medium text-sm dark:text-white semi-dark:text-gray-300"
				data-testid="user-info"
			>
				<div data-testid="user-name">Jese Leos</div>
				<div
					className="text-xs text-gray-500 dark:text-gray-400 semi-dark:text-gray-400"
					data-testid="user-joined"
				>
					Joined in 2014
				</div>
			</div>
		</div>
	);
};

export default XUserAvatarInfo;
