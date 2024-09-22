import colors from 'tailwindcss/colors';

export type ThemeMode = 'light' | 'dark' | 'semi-dark';

export interface ColorConfig {
	light: string;
	semiDark: string;
	dark: string;
}

// Helper function to get theme-based colors
export const getThemeColor = (
	themeMode: ThemeMode = 'light', // Default to 'light' mode
	colorConfig: ColorConfig = {
		light: colors.gray[200], // Default light color
		semiDark: colors.gray[500], // Default semi-dark color
		dark: colors.gray[600], // Default dark color
	}
): string => {
	switch (themeMode) {
		case 'dark':
			return colorConfig.dark;
		case 'semi-dark':
			return colorConfig.semiDark;
		default:
			return colorConfig.light;
	}
};
