import React, { ReactNode } from 'react';

interface ComponentWrapperProps {
	className?: string;
	children?: ReactNode;
}

const XComponentWrapper: React.FC<ComponentWrapperProps> = ({
	className = '',
	children,
}) => {
	return (
		<div
			data-testid="component-wrapper"
			className={`component-wrapper col-span-12 break-inside-avoid bg-component-light dark:bg-gray-600 semi-dark:bg-gray-500 mb-7 pb-1 ${className}`}
		>
			<div
				data-testid="inner-wrapper"
				className={`bg-white dark:bg-gray-700 semi-dark:bg-gray-600 rounded-lg h-full`}
			>
				{children}
			</div>
		</div>
	);
};

export default XComponentWrapper;
