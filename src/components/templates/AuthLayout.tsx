import React, { ReactNode } from 'react';
import XThemeToggle from '@atoms/ThemeToggle';
interface AuthLayoutProps {
	children: ReactNode;
}

const XAuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
	return (
		<div className="grid grid-cols-12 bg-gradient-to-b from-pale-azure to-pale-ivory dark:from-gray-900 dark:to-gray-800 semi-dark:from-gray-800 semi-dark:to-gray-700 min-h-screen">
			<div className="col-span-12 page-content p-6">
				<XThemeToggle className="float-right" />
			</div>
			<main className="col-span-12 page-content p-6">
				<div className="components">{children}</div>
			</main>
		</div>
	);
};

export default XAuthLayout;
