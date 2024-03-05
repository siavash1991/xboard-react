import React, { ReactNode } from 'react';

interface AuthLayoutProps {
	children: ReactNode;
}

const XAuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
	return (
		<div className="grid grid-cols-12 bg-gradient-to-b from-pale-azure to-pale-ivory min-h-screen">
			<main className="col-span-12 page-content p-6">
				<div className="components">{children}</div>
			</main>
		</div>
	);
};

export default XAuthLayout;
