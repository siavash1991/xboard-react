import { useEffect } from 'react';
import { toggleDarkMode, selectDarkMode } from '../../redux/themeSlice';
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks';
import { DarkThemeToggle, useThemeMode } from 'flowbite-react';
import UserAvatarInfo from '../molecules/UserAvatarInfo';
import XSearch from '../molecules/Search';

const XHeader = () => {
	const dispatch = useAppDispatch();
	const darkMode = useAppSelector(selectDarkMode);

	const [, , toggleMode] = useThemeMode();

	useEffect(() => {
		const storedMode = localStorage.getItem('darkMode');
		if (storedMode === 'true') {
			toggleMode();
		}
	}, [dispatch]);
	const handleDarkModeToggle = () => {
		const newMode = !darkMode;
		localStorage.setItem('darkMode', newMode.toString());
		dispatch(toggleDarkMode());
	};
	return (
		<header className="container mx-auto mb-12">
			<div className="flex flex-1 items-center justify-between w-full ">
				<XSearch />
				<div className="flex items-center gap-4">
					<UserAvatarInfo />
					<DarkThemeToggle
						className="rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none ring-4 ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:ring-gray-700"
						onClick={() => {
							handleDarkModeToggle();
							toggleMode();
						}}
						data-testid="dark-theme-toggle"
					/>
				</div>
			</div>
		</header>
	);
};

export default XHeader;
