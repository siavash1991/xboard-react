import React from 'react';
import { Card } from 'flowbite-react';
import * as HeroIcons from '@heroicons/react/24/outline';
import ComponentWrapper from 'components/atoms/ComponentWrapper';

interface CardProps {
	title: string;
	content: string;
	iconName: string;
	className?: string;
}

const XCountCard: React.FC<CardProps> = ({
	title,
	content,
	iconName,
	className = '',
}) => {
	// Form the icon component name based on iconName
	const iconComponentName = `${iconName}Icon` as keyof typeof HeroIcons;

	// Check if the corresponding icon component exists in HeroIcons
	const IconComponent = HeroIcons[iconComponentName];

	if (!IconComponent) {
		// Handle the case when the iconName is not found
		return null;
	}

	return (
		<ComponentWrapper className={`component-wrapper ${className}`}>
			<Card href="#" className="gap-2">
				<div className="flex items-center">
					<IconComponent className="h-5 w-5 text-gray-500" />
					<h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white ml-2">
						{title}
					</h5>
				</div>
				<p className="font-medium text-lg text-gray-700 dark:text-gray-400 ml-1 p-0">
					{content}
				</p>
			</Card>
		</ComponentWrapper>
	);
};

export default XCountCard;
