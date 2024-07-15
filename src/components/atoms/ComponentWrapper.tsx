import React, { ReactNode } from 'react';

interface ComponentWrapperProps {
	className?: string;
	children: ReactNode;
}

const ComponentWrapper: React.FC<ComponentWrapperProps> = ({
	className = '',
	children,
}) => {
	return (
		<div
			className={`component-wrapper bg-component-light mb-4 ${className}`}
		>
			{children}
		</div>
	);
};

export default ComponentWrapper;
