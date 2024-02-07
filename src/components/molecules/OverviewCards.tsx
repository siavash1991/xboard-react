import React from 'react';
import XCountCard from './CountCard';

interface XCardsProps {
	cardData: {
		id: number;
		title: string;
		content: string;
		iconName: string;
	}[];
}

const XOverviewCards: React.FC<XCardsProps> = ({ cardData }) => {
	return (
		<div className="col-span-12 grid grid-cols-12 gap-4 w-full mb-7">
			{cardData.map((card) => (
				<XCountCard
					key={card.id}
					title={card.title}
					content={card.content}
					iconName={card.iconName}
				/>
			))}
		</div>
	);
};

export default XOverviewCards;
