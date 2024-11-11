import { XLightLogo, XDarkLogo } from '@assets/images/logos';

type Theme = 'light' | 'dark' | 'semi-dark';

const getLogo = (theme: Theme) => {
	// Return the appropriate logo based on the current theme
	return theme === 'light' ? XDarkLogo : XLightLogo;
};

export default getLogo;
