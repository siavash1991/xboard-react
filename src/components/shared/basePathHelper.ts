import Config from './config'; // Import your configuration file

const getBasePath = () => {
	return Config.basePath;
};

export const withBasePath = () => {
	const basePath = getBasePath();
	return basePath;
};
