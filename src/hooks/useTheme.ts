import { useEffect, useState } from 'react';

const useTheme = () => {
	const [theme, setTheme] = useState<'light' | 'dark' | 'semi-dark'>('light');

	useEffect(() => {
		const updateTheme = () => {
			let detectedTheme: 'light' | 'dark' | 'semi-dark';

			if (document.documentElement.classList.contains('dark')) {
				detectedTheme = 'dark';
			} else if (
				document.documentElement.classList.contains('semi-dark')
			) {
				detectedTheme = 'semi-dark';
			} else {
				detectedTheme = 'light';
			}

			setTheme(detectedTheme);
		};

		// Initial theme detection
		updateTheme();

		// Optionally, add an event listener for changes to the theme
		const observer = new MutationObserver(updateTheme);
		observer.observe(document.documentElement, { attributes: true });

		return () => observer.disconnect();
	}, []);

	return theme;
};

export default useTheme;
