import React from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';

const projects = [
	{
		id: 1,
		title: 'Laravel',
		subtitle: 'eCommerce',
		logo: 'images/cards/active-project/laravel-logo.png',
		progress: 65,
		progressColor: 'bg-red-500',
	},
	{
		id: 2,
		title: 'Figma',
		subtitle: 'App UI Kit',
		logo: 'images/cards/active-project/figma-logo.png',
		progress: 86,
		progressColor: 'bg-blue-500',
	},
	{
		id: 3,
		title: 'VueJs',
		subtitle: 'Calendar App',
		logo: 'images/cards/active-project/vue-logo.png',
		progress: 90,
		progressColor: 'bg-green-500',
	},
	{
		id: 4,
		title: 'React',
		subtitle: 'Dashboard',
		logo: 'images/cards/active-project/react-logo.png',
		progress: 37,
		progressColor: 'bg-teal-500',
	},
	{
		id: 5,
		title: 'Bootstrap',
		subtitle: 'Website',
		logo: 'images/cards/active-project/bootstrap-logo.png',
		progress: 22,
		progressColor: 'bg-blue-500',
	},
	{
		id: 6,
		title: 'Sketch',
		subtitle: 'Website Design',
		logo: 'images/cards/active-project/sketch-logo.png',
		progress: 29,
		progressColor: 'bg-yellow-500',
	},
];

const XActiveProjectCard = ({ className = '' }) => {
	const menuItems = [
		{
			id: 'Refresh',
			label: 'refresh',
			onClick: () => {
				/* handle click */
			},
		},
		{
			id: 'Download',
			label: 'download',
			onClick: () => {
				/* handle click */
			},
		},
		{
			id: 'viewAll',
			label: 'View All',
			onClick: () => {
				/* handle click */
			},
		},
	];

	return (
		<ComponentWrapper className={className}>
			<XComponentHeader
				title="Active Project"
				subtitle="Average 72% Completed"
				menuItems={menuItems}
				menuIcon={<EllipsisVerticalIcon />}
			></XComponentHeader>
			<XComponentBody>
				<ul className="space-y-5">
					{projects.map((project) => (
						<li
							key={project.id}
							className="flex items-center space-x-4"
						>
							<div className="flex items-center w-1/2 space-x-4">
								<img
									src={project.logo}
									alt={`${project.title}-logo`}
									className="w-8"
								/>
								<div>
									<h6 className="text-sm font-semibold text-gray-900 dark:text-white">
										{project.title}
									</h6>
									<small className="text-gray-500 dark:text-gray-400">
										{project.subtitle}
									</small>
								</div>
							</div>
							<div className="flex items-center w-full space-x-4">
								<div className="progress w-full h-2 bg-gray-200 rounded">
									<div
										className={`progress-bar ${project.progressColor} h-full rounded`}
										role="progressbar"
										style={{
											width: `${project.progress}%`,
										}}
										aria-valuenow={project.progress}
										aria-valuemin={0}
										aria-valuemax={100}
									/>
								</div>
								<span className="text-gray-500 dark:text-gray-400">
									{project.progress}%
								</span>
							</div>
						</li>
					))}
				</ul>
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XActiveProjectCard;