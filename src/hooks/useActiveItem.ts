import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useActiveItem = () => {
	const { pathname } = useLocation();
	const [activeItem, setActiveItem] = useState(pathname);

	useEffect(() => {
		setActiveItem(pathname);
	}, [pathname]);

	return activeItem;
};

export default useActiveItem;
