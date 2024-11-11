import React from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';
import { projects } from '@assets/data/projectsData';

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
			className={`bg-component-light dark:bg-gray-600 col-span-12 lg:col-span-6 2xl:col-span-4 ${className}`}
		>
			<XComponentHeader
				title="Active Project"
				subtitle="Average 72% Completed"
				menuItems={menuItems}
				menuIcon={<EllipsisVerticalIcon />}
			/>
			<XComponentBody>
				<ul className="space-y-5" data-testid="active-project-list">
					{projects.map((project) => (
						<li
							key={project.id}
							className="flex items-center space-x-4"
							data-testid={`project-item-${project.id}`}
						>
							<div className="flex items-center w-1/2 space-x-4">
								<img
									src={project.logo}
									alt={`${project.title}-logo`}
									className="w-8"
									data-testid={`project-logo-${project.id}`}
								/>
								<div>
									<h6
										className="text-sm font-semibold text-gray-900 dark:text-white semi-dark:text-gray-200"
										data-testid={`project-title-${project.id}`}
									>
										{project.title}
									</h6>
									<small
										className="text-gray-500 dark:text-gray-400 semi-dark:text-gray-300"
										data-testid={`project-subtitle-${project.id}`}
									>
										{project.subtitle}
									</small>
								</div>
							</div>
							<div className="flex items-center w-full space-x-4">
								<div
									className="progress w-full h-2 bg-gray-200 rounded"
									data-testid={`project-progress-bar-${project.id}`}
								>
									<div
										className={`progress-bar ${project.progressColor} h-full rounded`}
										role="progressbar"
										style={{
											width: `${project.progress}%`,
										}}
										aria-valuenow={project.progress}
										aria-valuemin={0}
										aria-valuemax={100}
										data-testid={`project-progress-${project.id}`}
									/>
								</div>
								<span
									className="text-gray-500 dark:text-gray-400 semi-dark:text-gray-300"
									data-testid={`project-progress-text-${project.id}`}
								>
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
