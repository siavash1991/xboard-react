import { useEffect } from 'react';
import UserAvatarInfo from '../molecules/UserAvatarInfo';
import XSearch from '../atoms/Search';
import XDirToggle from 'components/atoms/DirToggle';
import XThemeToggle from 'components/atoms/ThemeToggle';
const XHeader = () => {
	return (
		<header className="container mx-auto mb-12">
			<div className="flex flex-1 items-center justify-between w-full ">
				<XSearch className="w-5/12 md:w-6/12 lg:w-8/12 xl:w-9/12" />
				<div className="flex items-center gap-4">
					<UserAvatarInfo />
					<XDirToggle />
					<XThemeToggle />
				</div>
			</div>
		</header>
	);
};

export default XHeader;
