import React, { ReactElement, ReactNode } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import ChartDropdownMenu from './ChartDropdownMenu';

interface MenuItem {
	id: string;
	label: string;
	onClick: () => void;
}

interface XComponentHeaderProps {
	className?: string;
	children?: ReactNode;
	title?: string;
	subtitle?: string;
	boldSubtitle?: boolean;
	value?: string; // Optional, for displaying a value like "$78,000"
	changePercentage?: string; // Optional, for displaying change percentage
	isPositiveChange?: boolean; // Optional, to indicate if the change is positive or negative
	menuItems?: MenuItem[];
	menuIcon?: ReactElement;
	arrowIcon?: ReactElement;
}

const XComponentHeader: React.FC<XComponentHeaderProps> = ({
	className = '',
	children,
	title,
	subtitle,
	boldSubtitle = false,
	value,
	changePercentage,
	isPositiveChange,
	menuItems,
	menuIcon,
	arrowIcon,
}) => {
	const renderValueAndChange = () => (
		<div className="flex items-center mt-2">
			{value && (
				<h5
					className="text-gray-800 dark:text-gray-100 semi-dark:text-gray-200 mr-4"
					data-testid="value"
				>
					{value}
				</h5>
			)}
			{changePercentage && (
				<span
					className={`${
						isPositiveChange
							? 'bg-green-500 dark:bg-gray-500 text-green-600 dark:text-green-100'
							: 'bg-red-100 dark:bg-red-200 text-red-600 dark:text-red-100'
					} px-2 py-1 rounded flex items-center`}
					data-testid="change-percentage"
				>
					{isPositiveChange ? (
						<ArrowUpIcon
							className="h-3 w-3"
							data-testid="arrow-up-icon"
						/>
					) : (
						<ArrowDownIcon
							className="h-3 w-3"
							data-testid="arrow-down-icon"
						/>
					)}
					<span className="ml-1 text-sm">{changePercentage}</span>
				</span>
			)}
		</div>
	);

	return (
		<div
			data-testid="component-header"
			className={`component-header flex items-center justify-between px-10 py-7 ${className}`}
		>
			<div className="component-title">
				{title && (
					<h5
						className={`text-lg text-gray-900 dark:text-white semi-dark:text-gray-200 ${
							boldSubtitle ? 'font-normal' : 'font-semibold'
						}`}
						data-testid="title"
					>
						{title}
					</h5>
				)}
				{subtitle && (
					<span
						className={`${
							boldSubtitle
								? 'text-lg font-semibold text-gray-800 dark:text-white semi-dark:text-gray-300'
								: 'text-sm font-normal text-gray-500 dark:text-gray-500 semi-dark:text-gray-400'
						}`}
						data-testid="subtitle"
					>
						{subtitle}
					</span>
				)}
			</div>
			{children}
			{value || changePercentage
				? renderValueAndChange()
				: menuItems && (
						<ChartDropdownMenu
							menuItems={menuItems}
							menuIcon={menuIcon}
							arrowIcon={arrowIcon}
						/>
				  )}
		</div>
	);
};

export default XComponentHeader;
