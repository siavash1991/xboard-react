import { useState, useEffect } from 'react';

const XThemeToggle = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [currentTheme, setCurrentTheme] = useState<
		'light' | 'dark' | 'semi-dark' | 'system'
	>('system');

	const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

	const updateTheme = (theme: 'light' | 'dark' | 'semi-dark' | 'system') => {
		if (theme === 'system') {
			const prefersDarkMode = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches;
			theme = prefersDarkMode ? 'dark' : 'light';
		}

		document.documentElement.classList.remove('dark', 'semi-dark', 'light');
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else if (theme === 'semi-dark') {
			document.documentElement.classList.add('semi-dark');
		} else if (theme === 'light') {
			document.documentElement.classList.add('light');
		}
		localStorage.setItem('color-theme', theme);
		setCurrentTheme(theme);
		setIsDropdownOpen(false);
	};

	useEffect(() => {
		const savedTheme =
			(localStorage.getItem('color-theme') as
				| 'light'
				| 'dark'
				| 'semi-dark'
				| 'system') || 'system';
		if (savedTheme === 'system') {
			const prefersDarkMode = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches;
			document.documentElement.classList.add(
				prefersDarkMode ? 'dark' : 'light'
			);
		} else {
			document.documentElement.classList.add(savedTheme);
		}
		setCurrentTheme(savedTheme);
	}, []);

	return (
		<div className="relative">
			{/* Main Toggle Icon */}
			<button
				type="button"
				className="rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none ring-4 ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:ring-gray-700"
				onClick={toggleDropdown}
			>
				{currentTheme === 'dark' && (
					<svg
						className="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
				)}
				{currentTheme === 'semi-dark' && (
					<svg
						className="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path d="M12 2a1 1 0 01.832.445l.09.144A7 7 0 1012 16a6.98 6.98 0 001.843-2.398A6.981 6.981 0 0012 2z" />
					</svg>
				)}
				{currentTheme === 'light' && (
					<svg
						className="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
					</svg>
				)}
				{currentTheme === 'system' && (
					<svg
						className="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path d="M10 3a7 7 0 10-.001 14.001A7 7 0 0010 3zm0-2a9 9 0 100 18A9 9 0 0010 1zm0 15a6 6 0 11.001-12.001A6 6 0 0110 16z" />
					</svg>
				)}
			</button>

			{/* Dropdown Menu */}
			{isDropdownOpen && (
				<div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
					{['dark', 'semi-dark', 'light', 'system'].map((theme) => (
						<button
							key={theme}
							onClick={() =>
								updateTheme(
									theme as
										| 'light'
										| 'dark'
										| 'semi-dark'
										| 'system'
								)
							}
							className={`flex items-center px-4 py-2 text-sm ${
								currentTheme === theme
									? 'bg-gray-100 dark:bg-gray-700'
									: 'text-gray-700 dark:text-gray-300'
							} hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left ${
								theme === 'light'
									? 'rounded-b-lg'
									: theme === 'dark'
									? 'rounded-t-lg'
									: ''
							}`}
						>
							<svg
								className="w-5 h-5 mr-2"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								{theme === 'dark' && (
									<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
								)}
								{theme === 'semi-dark' && (
									<path d="M12 2a1 1 0 01.832.445l.09.144A7 7 0 1012 16a6.98 6.98 0 001.843-2.398A6.981 6.981 0 0012 2z" />
								)}
								{theme === 'light' && (
									<path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
								)}
								{theme === 'system' && (
									<path d="M10 3a7 7 0 10-.001 14.001A7 7 0 0010 3zm0-2a9 9 0 100 18A9 9 0 0010 1zm0 15a6 6 0 11.001-12.001A6 6 0 0110 16z" />
								)}
							</svg>
							<span>
								{theme.charAt(0).toUpperCase() + theme.slice(1)}
							</span>
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default XThemeToggle;
