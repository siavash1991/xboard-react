import React from 'react';
import { Card } from 'flowbite-react';
import ComponentWrapper from '@atoms/ComponentWrapper';

interface XPricingCardProps {
	className?: string;
}

const XPricingCard: React.FC<XPricingCardProps> = ({ className = '' }) => {
	return (
		<ComponentWrapper className={`break-inside-avoid $className`}>
			<Card href="#" className={className} data-testid="card">
				<h5
					className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400 semi-dark:text-gray-300"
					data-testid="card-title"
				>
					Standard plan
				</h5>
				<div
					className="flex items-baseline text-gray-900 dark:text-white semi-dark:text-gray-200"
					data-testid="card-price"
				>
					<span className="text-3xl font-semibold">$</span>
					<span className="text-5xl font-extrabold tracking-tight">
						49
					</span>
					<span className="ml-1 rtl:ml-0 rtl:mr-1 text-xl font-normal text-gray-500 dark:text-gray-400 semi-dark:text-gray-300">
						/month
					</span>
				</div>
				<ul className="my-7 space-y-5" data-testid="card-features">
					<li
						className="flex space-x-3 rtl:space-x-reverse"
						data-testid="feature-1"
					>
						<svg
							className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 semi-dark:text-gray-300">
							2 team members
						</span>
					</li>
					<li
						className="flex space-x-3 rtl:space-x-reverse"
						data-testid="feature-2"
					>
						<svg
							className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 semi-dark:text-gray-300">
							20GB Cloud storage
						</span>
					</li>
					<li
						className="flex space-x-3 rtl:space-x-reverse"
						data-testid="feature-3"
					>
						<svg
							className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 semi-dark:text-gray-300">
							Integration help
						</span>
					</li>
					{/* Add remaining features with data-testid attributes */}
				</ul>
				<button
					type="button"
					className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
					data-testid="choose-plan-button"
				>
					Choose plan
				</button>
			</Card>
		</ComponentWrapper>
	);
};

export default XPricingCard;
