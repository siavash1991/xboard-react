import React from 'react';

interface PageTitleProps {
	title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title = '' }) => {
	return (
		<h1 className="text-2xl font-bold text-gray-800 dark:text-white semi-dark:text-gray-100 mb-7">
			{title}
		</h1>
	);
};

export default PageTitle;
