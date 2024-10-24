import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import XFooter from '@organisms/Footer';
import XSidebar from '@organisms/Sidebar';
import XHeader from '@organisms/Header';
import XBreadcrumb from '@atoms/Breadcrumb';
import PageTitle from '@atoms/PageTitle';
import { RootState } from '@redux/store';

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
		{ id: 1, href: '#/', label: 'Home' },
		{ id: 2, href: '#/sample', label: 'Sample Page' },
	];

	const isSidebarOpen = useSelector(
		(state: RootState) => state.sidebar.isSidebarOpen
	);

	return (
		<div className="min-h-screen grid grid-cols-12 bg-gradient-to-b from-pale-azure to-pale-ivory dark:from-gray-900 dark:to-gray-800 semi-dark:from-gray-800 semi-dark:to-gray-700 relative">
			<aside
				className={`md:col-span-3 xl:col-span-2 fixed z-20 md:static top-0 bottom-0 left-0 w-64 md:w-auto bg-white dark:bg-gray-800 transition-transform transform md:translate-x-0 ${
					isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
				} lg:translate-x-0`}
			>
				<XSidebar />
			</aside>

			<main
				className={`col-span-12 md:col-span-9 xl:col-span-10 p-6 transition-all duration-300 ease-in-out`}
			>
				<XHeader />

				<XBreadcrumb items={breadcrumbItems} />
				<PageTitle title={pageTitle} />

				{children}

				<XFooter />
			</main>
		</div>
	);
};

export default XBaseLayout;
