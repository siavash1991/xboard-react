import React from 'react';
import { Card } from 'flowbite-react';
import ComponentWrapper from '@atoms/ComponentWrapper';

interface XDefaultCardProps {
	className?: string;
}

const XDefaultCard: React.FC<XDefaultCardProps> = ({ className = '' }) => {
	return (
		<ComponentWrapper className={`break-inside-avoid ${className}`}>
			<Card href="#">
				<h5
					className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white semi-dark:text-gray-200"
					data-testid="xdefault-card-title"
				>
					Noteworthy technology acquisitions 2021
				</h5>
				<p
					className="font-normal text-gray-700 dark:text-gray-300 semi-dark:text-gray-200"
					data-testid="xdefault-card-description"
				>
					Here are the biggest enterprise technology acquisitions of
					2021 so far, in reverse chronological order.
				</p>
			</Card>
		</ComponentWrapper>
	);
};

export default XDefaultCard;
