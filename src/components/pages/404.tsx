import React from 'react';
import XBaseLayout from '@templates/BaseLayout';

const NotFound = () => {
	return (
		<XBaseLayout pageTitle="Page Not Found">
			<div className="flex items-center justify-center h-screen">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-gray-800 mb-4">
						Oops!
					</h1>
					<p className="text-lg text-gray-600">
						It seems like there's nothing for you here.
					</p>
				</div>
			</div>
		</XBaseLayout>
	);
};

export default NotFound;
