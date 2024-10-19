import React from 'react';
import { Card } from 'flowbite-react';
import cardImg from '@assets/images/cards/image-4.jpg';
import ComponentWrapper from '@atoms/ComponentWrapper';

interface XHorizontalCardProps {
	className?: string;
}
const XHorizontalCard: React.FC<XHorizontalCardProps> = ({
	className = '',
}) => {
	return (
		<ComponentWrapper className={`break-inside-avoid $className`}>
			<Card href="#" imgSrc={cardImg} horizontal>
				<h5
					className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white semi-dark:text-gray-200"
					data-testid="horizontal-card-title"
				>
					Noteworthy technology acquisitions 2021
				</h5>
				<p
					className="font-normal text-gray-700 dark:text-gray-400 semi-dark:text-gray-300"
					data-testid="horizontal-card-description"
				>
					Here are the biggest enterprise technology acquisitions of
					2021 so far, in reverse chronological order.
				</p>
			</Card>
		</ComponentWrapper>
	);
};
export default XHorizontalCard;
