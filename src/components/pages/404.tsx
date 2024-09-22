import React from 'react';
import XBaseLayout from '@templates/BaseLayout';

const NotFound = () => {
	return (
		<XBaseLayout pageTitle="Page Not Found">
			<div className="flex items-center justify-center h-1/2">
				<div className="text-center ">
					<h1 className="text-4xl font-bold text-gray-800 dark:text-white semi-dark:text-gray-300 mb-4">
						Oops!
					</h1>
					<p className="text-lg text-gray-600 dark:text-gray-400 semi-dark:text-gray-500">
						It seems like there's nothing for you here.
					</p>
				</div>
			</div>
		</XBaseLayout>
	);
};

export default NotFound;
