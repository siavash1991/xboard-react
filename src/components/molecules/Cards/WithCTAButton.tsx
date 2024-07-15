import React from 'react';
import { Button, Card } from 'flowbite-react';
import ComponentWrapper from 'components/atoms/ComponentWrapper';

interface XWithCTAButtonCardProps {
	className?: string;
}
const XWithCTAButtonCard: React.FC<XWithCTAButtonCardProps> = ({
	className = '',
}) => {
	return (
		<ComponentWrapper className={className}>
			<Card href="#" className={`${className}`}>
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Noteworthy technology acquisitions 2021
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					Here are the biggest enterprise technology acquisitions of
					2021 so far, in reverse chronological order.
				</p>
				<Button>
					Read more
					<svg
						className="-mr-1 ml-2 h-4 w-4 rtl:rotate-180 rtl:mr-2 rtl:ml-0"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</Button>
			</Card>
		</ComponentWrapper>
	);
};

export default XWithCTAButtonCard;
