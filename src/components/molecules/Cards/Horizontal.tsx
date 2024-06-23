import React from 'react';
import { Card } from 'flowbite-react';
import cardImg from '../../../assets/images/cards/image-4.jpg';

interface XHorizontalCardProps {
	className?: string;
}
const XHorizontalCard: React.FC<XHorizontalCardProps> = ({
	className = '',
}) => {
	return (
		<Card
			href="#"
			className={`max-w-sm ${className}`}
			imgSrc={cardImg}
			horizontal
		>
			<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				Noteworthy technology acquisitions 2021
			</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				Here are the biggest enterprise technology acquisitions of 2021
				so far, in reverse chronological order.
			</p>
		</Card>
	);
};
export default XHorizontalCard;
