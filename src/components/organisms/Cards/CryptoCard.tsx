import React from 'react';
import { Card } from 'flowbite-react';
import ComponentWrapper from '@atoms/ComponentWrapper';

interface XCryptoCardProps {
	className?: string;
}

const XCryptoCard: React.FC<XCryptoCardProps> = ({ className = '' }) => {
	return (
		<ComponentWrapper
			className={`md:col-span-6 break-inside-avoid ${className}`}
		>
			<Card href="#" className={className}>
				<h5
					className="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white semi-dark:text-gray-200"
					data-testid="crypto-card-title"
				>
					Connect wallet
				</h5>
				<p
					className="text-sm font-normal text-gray-500 dark:text-gray-400 semi-dark:text-gray-300"
					data-testid="crypto-card-description"
				>
					Connect with one of our available wallet providers or create
					a new one.
				</p>
				<ul className="my-4 space-y-3">
					<li>
						<a
							href="/"
							className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 semi-dark:bg-gray-800 semi-dark:text-gray-200 semi-dark:hover:bg-gray-500"
							data-testid="crypto-card-link-metamask"
						>
							<svg
								className="h-4"
								viewBox="0 0 40 38"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								{/* SVG paths */}
							</svg>
							<span className="ml-3 rtl:ml-0 rtl:mr-3 flex-1 whitespace-nowrap">
								MetaMask
							</span>
							<span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400 semi-dark:bg-gray-600 semi-dark:text-gray-300">
								Popular
							</span>
						</a>
					</li>
					<li>
						<a
							href="/"
							className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 semi-dark:bg-gray-800 semi-dark:text-gray-200 semi-dark:hover:bg-gray-500"
							data-testid="crypto-card-link-other"
						>
							<svg
								className="h-5"
								viewBox="0 0 292 292"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								{/* SVG paths */}
							</svg>
							<span className="ml-3 rtl:ml-0 rtl:mr-3 flex-1 whitespace-nowrap">
								Other Wallet
							</span>
						</a>
					</li>
				</ul>
			</Card>
		</ComponentWrapper>
	);
};

export default XCryptoCard;
