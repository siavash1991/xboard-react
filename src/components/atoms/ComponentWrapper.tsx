import React, { ReactNode } from 'react';

interface ComponentWrapperProps {
	className?: string;
	children?: ReactNode;
}

const ComponentWrapper: React.FC<ComponentWrapperProps> = ({
	className = '',
	children,
}) => {
	return (
		<div
			className={`component-wrapper bg-component-light dark:bg-gray-600  semi-dark:bg-gray-500 mb-7 pb-1 ${className}`}
		>
			<div
				className={`bg-white dark:bg-gray-700 semi-dark:bg-gray-600 rounded-lg h-full`}
			>
				{children}
			</div>
		</div>
	);
};

export default ComponentWrapper;
