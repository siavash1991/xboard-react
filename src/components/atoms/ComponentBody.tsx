import React, { ReactNode } from 'react';

interface ComponentBodyProps {
	className?: string;
	children: ReactNode;
}

const ComponentBody: React.FC<ComponentBodyProps> = ({
	className = '',
	children,
}) => {
	return (
		<div
			data-testid="component-body"
			className={`component-body p-10 pt-0 ${className}`}
		>
			{children}
		</div>
	);
};

export default ComponentBody;
