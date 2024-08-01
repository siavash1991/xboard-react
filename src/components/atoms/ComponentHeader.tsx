import React, { ReactElement, ReactNode } from 'react';
import ChartDropdownMenu from './ChartDropdownMenu';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

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
			{value && <h5 className="text-gray-800 mr-4">{value}</h5>}
			{changePercentage && (
				<span
					className={`${
						isPositiveChange
							? 'bg-green-100 text-green-600'
							: 'bg-red-100 text-red-600'
					} px-2 py-1 rounded flex items-center`}
				>
					{isPositiveChange ? (
						<ArrowUpIcon className="h-3 w-3" />
					) : (
						<ArrowDownIcon className="h-3 w-3" />
					)}
					<span className="ml-1 text-sm">{changePercentage}</span>
				</span>
			)}
		</div>
	);

	return (
		<div
			className={`component-header flex items-center justify-between ${className}`}
		>
			<div className="component-title">
				{title && (
					<h5
						className={`text-lg text-gray-900 ${
							boldSubtitle ? 'font-normal' : 'font-semibold'
						}`}
					>
						{title}
					</h5>
				)}
				{subtitle && (
					<span
						className={`${
							boldSubtitle
								? 'text-lg font-semibold text-gray-800'
								: 'text-sm font-normal text-gray-500'
						}`}
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
