import { useEffect, useState } from 'react';

const useDirection = (): 'ltr' | 'rtl' => {
	const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');

	useEffect(() => {
		const currentDirection =
			document.documentElement.getAttribute('dir') === 'rtl'
				? 'rtl'
				: 'ltr';
		setDirection(currentDirection);
	}, []);

	return direction;
};

export default useDirection;
