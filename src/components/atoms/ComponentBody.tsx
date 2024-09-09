import React, { ReactNode } from 'react';

interface XComponentBodyProps {
	className?: string;
	children: ReactNode;
}

const XComponentBody: React.FC<XComponentBodyProps> = ({
	className = '',
	children,
}) => {
	return (
		<div className={`component-body p-10 pt-0 ${className}`}>
			{children}
		</div>
	);
};
export default XComponentBody;
