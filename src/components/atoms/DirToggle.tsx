import React, { useState, useEffect } from 'react';

const XDirToggle = () => {
	const [isRtl, setIsRtl] = useState(false);

	useEffect(() => {
		document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
	}, [isRtl]);

	const toggleDirection = () => {
		setIsRtl(!isRtl);
	};

	return (
		<button
			onClick={toggleDirection}
			className="rounded-lg p-2 text-sm font-bold text-gray-500 hover:bg-gray-100 focus:outline-none ring-4 ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:ring-gray-700"
		>
			{isRtl ? 'LTR' : 'RTL'}
		</button>
	);
};

export default XDirToggle;
