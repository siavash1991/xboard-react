module.exports = {
	process() {
		// Return a simple string as a mock for the image file
		return { code: 'module.exports = "mocked-image-file";' };
	},
	getCacheKey() {
		return 'imgTransform';
	},
};
