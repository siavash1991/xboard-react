import React, { useState, useEffect } from 'react';

interface XDirToggleProps {
	className?: string;
}

const XDirToggle: React.FC<XDirToggleProps> = ({ className = '' }) => {
	const [isRtl, setIsRtl] = useState(false);

	useEffect(() => {
		document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
	}, [isRtl]);

	const toggleDirection = () => {
		setIsRtl(!isRtl);
	};

	return (
		<button
			data-testid="dir-toggle-button"
			onClick={toggleDirection}
			className={`text-sm font-bold text-gray-500 hover:bg-gray-100 rounded-lg w-10 h-10 focus:outline-none ring-4 ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:ring-gray-700 semi-dark:ring-gray-600 semi-dark:hover:bg-gray-600 ${className}`}
		>
			{isRtl ? 'LTR' : 'RTL'}
		</button>
	);
};

export default XDirToggle;
