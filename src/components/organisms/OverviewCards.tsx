import React from 'react';
import XCountCard from '@molecules/CountCard';

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
		<div
			className={`col-span-12 grid grid-cols-12 gap-4 mb-7 ${className}`}
		>
			{cardData.map((card) => (
				<XCountCard
					key={card.id}
					title={card.title}
					content={card.content}
					iconName={card.iconName}
					className="col-span-6 sm:col-span-6 lg:col-span-3"
				/>
			))}
		</div>
	);
};

export default XOverviewCards;
