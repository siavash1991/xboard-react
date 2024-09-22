import React from 'react';
import { Card } from 'flowbite-react';
import cardImg from '../../../assets/images/cards/image-1.jpg';
import ComponentWrapper from 'components/atoms/ComponentWrapper';

interface XWithImageCardProps {
	className?: string;
}
const XWithImageCard: React.FC<XWithImageCardProps> = ({ className = '' }) => {
	return (
		<ComponentWrapper className={`break-inside-avoid $className`}>
			<Card
				href="#"
				className={className}
				imgAlt="Meaningful alt text for an image that is not purely decorative"
				imgSrc={cardImg}
			>
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white semi-dark:text-gray-200">
					Noteworthy technology acquisitions 2021
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400 semi-dark:text-gray-300">
					Here are the biggest enterprise technology acquisitions of
					2021 so far, in reverse chronological order.
				</p>
			</Card>
		</ComponentWrapper>
	);
};
export default XWithImageCard;
