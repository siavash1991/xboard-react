import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RedirectWithTrailingSlash = () => {
	const location = useLocation();
	useEffect(() => {
		if (!window.location.pathname.endsWith('/')) {
			window.location.replace(`${window.location.pathname}/`);
		}
	}, [location]);

	return null;
};

export default RedirectWithTrailingSlash;
