import Config from './config'; // Import your configuration file

const getBasePath = () => {
	return Config.basePath;
};

export const withBasePath = (path: string): string => {
	const basePath = getBasePath();
	return basePath + path;
};
