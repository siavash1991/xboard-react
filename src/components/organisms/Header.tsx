import UserAvatarInfo from '../molecules/UserAvatarInfo';
import XSearch from '../molecules/Search';

const XHeader = () => {
	return (
		<header className="container mx-auto mb-12">
			<div className="flex flex-1 items-center justify-between w-full ">
				<XSearch />
				<UserAvatarInfo />
			</div>
		</header>
	);
};

export default XHeader;
