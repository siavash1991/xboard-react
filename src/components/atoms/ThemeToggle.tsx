import React, {
	useState,
	useEffect,
	useLayoutEffect,
	useCallback,
} from 'react';
import {
	StarIcon,
	MoonIcon,
	SunIcon,
	ComputerDesktopIcon,
} from '@heroicons/react/24/outline';

interface XThemeToggleProps {
	className?: string;
}

const THEMES = ['light', 'dark', 'semi-dark', 'system'] as const;
type Theme = (typeof THEMES)[number];

const ICONS = {
	light: SunIcon,
	dark: MoonIcon,
	'semi-dark': StarIcon,
	system: ComputerDesktopIcon,
};

const getSystemTheme = (): Theme => {
	const prefersDarkMode = window.matchMedia(
		'(prefers-color-scheme: dark)'
	).matches;
	return prefersDarkMode ? 'dark' : 'light';
};

const updateDocumentTheme = (theme: Theme) => {
	document.documentElement.classList.remove('dark', 'semi-dark', 'light');
	if (theme !== 'system') {
		document.documentElement.classList.add(theme);
	}
};

const XThemeToggle: React.FC<XThemeToggleProps> = ({ className = '' }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [currentTheme, setCurrentTheme] = useState<Theme>('system');

	const applyTheme = useCallback((theme: Theme) => {
		const effectiveTheme = theme === 'system' ? getSystemTheme() : theme;
		updateDocumentTheme(effectiveTheme);
		localStorage.setItem('color-theme', theme);
		setCurrentTheme(theme);
	}, []);

	const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

	const handleThemeChange = (theme: Theme) => {
		if (theme !== currentTheme) {
			applyTheme(theme);
			setIsDropdownOpen(false);
		}
	};

	// Ensure the theme is applied before the page renders
	useLayoutEffect(() => {
		const savedTheme =
			(localStorage.getItem('color-theme') as Theme) || 'system';
		const initialTheme =
			savedTheme === 'system' ? getSystemTheme() : savedTheme;
		updateDocumentTheme(initialTheme);
		setCurrentTheme(savedTheme);
	}, []);

	// Listen for system theme changes
	useEffect(() => {
		const mediaQueryList = window.matchMedia(
			'(prefers-color-scheme: dark)'
		);
		const systemThemeChangeHandler = () => {
			if (localStorage.getItem('color-theme') === 'system') {
				const systemTheme = getSystemTheme();
				updateDocumentTheme(systemTheme);
			}
		};

		mediaQueryList.addEventListener('change', systemThemeChangeHandler);

		return () => {
			mediaQueryList.removeEventListener(
				'change',
				systemThemeChangeHandler
			);
		};
	}, []);

	return (
		<div className="relative">
			<button
				type="button"
				className={`rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none ring-4 ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:ring-gray-700 semi-dark:ring-gray-600 semi-dark:hover:bg-gray-600 ${className}`}
				onClick={toggleDropdown}
			>
				{React.createElement(ICONS[currentTheme], {
					className: 'w-5 h-5',
					fill: 'currentColor',
				})}
			</button>

			{isDropdownOpen && (
				<div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
					{THEMES.map((theme) => (
						<button
							key={theme}
							onClick={() => handleThemeChange(theme)}
							className={`flex items-center px-4 py-2 text-sm ${
								currentTheme === theme
									? 'bg-gray-100 dark:bg-gray-700'
									: 'text-gray-700 dark:text-gray-300'
							} hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left`}
						>
							{React.createElement(ICONS[theme], {
								className: 'w-5 h-5 mr-2',
								fill: 'currentColor',
							})}
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
