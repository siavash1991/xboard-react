import { useEffect } from 'react';
import UserAvatarInfo from '../molecules/UserAvatarInfo';
import XSearch from '../molecules/Search';

const XHeader = () => {
	const handleClick = () => {
		const themeToggleDarkIcon = document.getElementById(
			'theme-toggle-dark-icon'
		);
		const themeToggleLightIcon = document.getElementById(
			'theme-toggle-light-icon'
		);

		// Toggle SVG visibility
		themeToggleDarkIcon?.classList.toggle('hidden');
		themeToggleLightIcon?.classList.toggle('hidden');

		// Toggle theme class on document
		document.documentElement.classList.toggle('dark');

		// Update local storage theme preference
		const isDarkMode = document.documentElement.classList.contains('dark');
		localStorage.setItem('color-theme', isDarkMode ? 'dark' : 'light');
	};

	useEffect(() => {
		const themeToggleDarkIcon = document.getElementById(
			'theme-toggle-dark-icon'
		);
		const themeToggleLightIcon = document.getElementById(
			'theme-toggle-light-icon'
		);

		// Set initial theme based on local storage
		const initialTheme = localStorage.getItem('color-theme');
		if (initialTheme === 'dark') {
			document.documentElement.classList.add('dark');
			themeToggleDarkIcon?.classList.remove('hidden');
		} else {
			themeToggleLightIcon?.classList.remove('hidden');
		}

		const themeToggleBtn = document.getElementById('theme-toggle');
		themeToggleBtn?.addEventListener('click', handleClick);
	}, []);
	return (
		<header className="container mx-auto mb-12">
			<div className="flex flex-1 items-center justify-between w-full ">
				<XSearch className="w-5/12 md:w-6/12 lg:w-8/12 xl:w-9/12" />
				<div className="flex items-center gap-4">
					<UserAvatarInfo />

					<button
						data-testid="dark-theme-toggle"
						id="theme-toggle"
						type="button"
						className="rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none ring-4 ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:ring-gray-700"
					>
						<svg
							id="theme-toggle-dark-icon"
							className="w-5 h-5 hidden"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
						</svg>
						<svg
							id="theme-toggle-light-icon"
							className="w-5 h-5 hidden"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
								fill-rule="evenodd"
								clip-rule="evenodd"
							></path>
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
};

export default XHeader;
