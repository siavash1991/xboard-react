import React, { ReactNode } from 'react';

interface ComponentWrapperProps {
	className?: string;
	children?: ReactNode;
	fitContent?: boolean;
}

const ComponentWrapper: React.FC<ComponentWrapperProps> = ({
	className = '',
	children,
	fitContent = false,
}) => {
	return (
		<div
			className={`component-wrapper bg-component-light mb-7 ${className}`}
		>
			<div
				className={`h-full bg-white rounded-lg ${
					fitContent ? '' : 'p-10'
				}`}
			>
				{children}
			</div>
		</div>
	);
};

export default ComponentWrapper;
