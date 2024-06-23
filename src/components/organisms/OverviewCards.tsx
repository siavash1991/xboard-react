import React from 'react';
import XCountCard from '../molecules/CountCard';

interface XCardsProps {
	cardData: {
		id: number;
		title: string;
		content: string;
		iconName: string;
		className?: string;
	}[];
	className?: string;
}

const XOverviewCards: React.FC<XCardsProps> = ({
	cardData,
	className = '',
}) => {
	return (
		<div className={`grid mb-7 ${className}`}>
			{cardData.map((card) => (
				<XCountCard
					key={card.id}
					title={card.title}
					content={card.content}
					iconName={card.iconName}
					className=" bg-component-light dark:bg-gray-600 col-span-12 sm:col-span-6 lg:col-span-3"
				/>
			))}
		</div>
	);
};

export default XOverviewCards;
