import React from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';
import LaravelImg from '@assets/images/cards/active-project/laravel-logo.png';
import FigmaImg from '@assets/images/cards/active-project/figma-logo.png';
import vueImg from '@assets/images/cards/active-project/vue-logo.png';
import reactImg from '@assets/images/cards/active-project/react-logo.png';
import BootstrapImg from '@assets/images/cards/active-project/bootstrap-logo.png';
import SketchImg from '@assets/images/cards/active-project/sketch-logo.png';

const projects = [
	{
		id: 1,
		title: 'Laravel',
		subtitle: 'eCommerce',
		logo: LaravelImg,
		progress: 65,
		progressColor: 'bg-red-500',
	},
	{
		id: 2,
		title: 'Figma',
		subtitle: 'App UI Kit',
		logo: FigmaImg,
		progress: 86,
		progressColor: 'bg-blue-500',
	},
	{
		id: 3,
		title: 'VueJs',
		subtitle: 'Calendar App',
		logo: vueImg,
		progress: 90,
		progressColor: 'bg-green-500',
	},
	{
		id: 4,
		title: 'React',
		subtitle: 'Dashboard',
		logo: reactImg,
		progress: 37,
		progressColor: 'bg-teal-500',
	},
	{
		id: 5,
		title: 'Bootstrap',
		subtitle: 'Website',
		logo: BootstrapImg,
		progress: 22,
		progressColor: 'bg-blue-500',
	},
	{
		id: 6,
		title: 'Sketch',
		subtitle: 'Website Design',
		logo: SketchImg,
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
		<ComponentWrapper
			className={`bg-component-light dark:bg-gray-600 col-span-12 lg:col-span-6 xl:col-span-4 $className`}
		>
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
									<h6 className="text-sm font-semibold text-gray-900 dark:text-white semi-dark:text-gray-200">
										{project.title}
									</h6>
									<small className="text-gray-500 dark:text-gray-400 semi-dark:text-gray-300">
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
								<span className="text-gray-500 dark:text-gray-400 semi-dark:text-gray-300">
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
