import { StylesConfig } from 'react-select';
import { getThemeColor } from './themeUtils'; // Import your theme utility function
import { blue, gray } from 'tailwindcss/colors';

interface OptionType {
	value: string;
	label: string;
}

// Modify reactSelectStyles to use getThemeColor
const reactSelectStyles = (
	theme: 'light' | 'dark' | 'semi-dark'
): StylesConfig<OptionType, true> => {
	return {
		indicatorsContainer: () => ({
			display: 'none',
		}),
		multiValueRemove: (base) => ({
			...base,
			backgroundColor: getThemeColor(theme, {
				light: blue[100],
				semiDark: blue[500],
				dark: blue[700],
			}),
			borderTopRightRadius: '10px',
			borderBottomRightRadius: '10px',
			':hover': {
				backgroundColor: getThemeColor(theme, {
					light: blue[300],
					semiDark: blue[300],
					dark: blue[500],
				}),
			},
			paddingRight: '5px',
		}),
		multiValue: (base) => ({
			...base,
			borderRadius: '10px',
			paddingLeft: '10px',
			backgroundColor: getThemeColor(theme, {
				light: blue[100],
				semiDark: blue[500],
				dark: blue[700],
			}),
		}),
		control: (base) => ({
			...base,
			borderRadius: '0.5rem',
			padding: '0.2rem',
			backgroundColor: getThemeColor(theme, {
				light: gray[100],
				semiDark: gray[600],
				dark: gray[700],
			}),
			borderColor: getThemeColor(theme, {
				light: gray[300],
				semiDark: gray[500],
				dark: gray[600],
			}),
		}),
		placeholder: (base) => ({
			...base,
			color: getThemeColor(theme, {
				light: gray[500],
				semiDark: gray[400],
				dark: gray[400],
			}),
		}),
	};
};

export default reactSelectStyles;
