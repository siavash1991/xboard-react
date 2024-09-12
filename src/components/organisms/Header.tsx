import UserAvatarInfo from '@molecules/UserAvatarInfo';
import XSearch from '@atoms/Search';
import XDirToggle from '@atoms/DirToggle';
import XThemeToggle from '@atoms/ThemeToggle';
import XSidebarToggle from '@atoms/SidebarToggle';

const XHeader = () => {
	return (
		<header className="container mx-auto mb-12">
			<div className="grid grid-cols-12 items-center">
				<div className="col-span-8 sm:col-span-9 md:col-span-6 lg:col-span-8">
					<XSearch />
				</div>
				<div className="col-span-4 sm:col-span-3 md:col-span-6  lg:col-span-4 flex items-center justify-end md:justify-between">
					<div className="flex justify-around space-x-4 p-1">
						<XDirToggle />
						<XSidebarToggle />
						<XThemeToggle className="hidden sm:block" />
					</div>
					<UserAvatarInfo className="hidden md:flex justify-between" />
				</div>
			</div>
		</header>
	);
};

export default XHeader;
