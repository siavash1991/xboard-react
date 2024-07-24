import React, { ReactNode } from 'react';
import XFooter from '@organisms/Footer';
import XSidebar from '@organisms/Sidebar';
import XHeader from '@organisms/Header';
import XBreadcrumb from '@atoms/Breadcrumb';
import PageTitle from '@atoms/PageTitle';

interface BaseLayoutProps {
	children: ReactNode;
	pageTitle?: string;
}
type BreadcrumbItem = {
	id: number;
	href: string;
	icon?: React.ReactNode;
	label: string;
};

const XBaseLayout: React.FC<BaseLayoutProps> = ({
	children,
	pageTitle = 'Title Missed!',
}) => {
	const breadcrumbItems: BreadcrumbItem[] = [
		{ id: 1, href: '/', label: 'Home' },
		{ id: 2, href: '/sample', label: 'Sample Page' },
	];
	return (
		<div className="min-h-screen grid grid-cols-12 bg-gradient-to-b from-pale-azure to-pale-ivory dark:from-gray-900 dark:to-gray-700">
			<aside className="h-screen col-span-4 sm:col-span-3 md:col-span-3 lg:col-span-2 sticky top-0 max-w-xs min-w-fit">
				<XSidebar />
			</aside>
			<main className="page-content col-span-8 sm:col-span-9 md:col-span-9 lg:col-span-10 p-6">
				<XHeader />
				<XBreadcrumb className="rtl" items={breadcrumbItems} />
				<PageTitle title={pageTitle} />
				<div className="components">{children}</div>
				<XFooter />
			</main>
		</div>
	);
};

export default XBaseLayout;
