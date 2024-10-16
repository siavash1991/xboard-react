import React, { useState, useRef, useEffect } from 'react';
import useClickOutside from '@hooks/useClickOutside';
import { CalendarIcon } from '@heroicons/react/24/outline';

interface XChartDropdownMenuProps {
	menuLabel?: string;
	menuItems: { id: string; label: string; onClick: () => void }[];
	menuIcon?: React.ReactElement;
	arrowIcon?: React.ReactElement;
}

const XChartDropdownMenu: React.FC<XChartDropdownMenuProps> = ({
	menuIcon = <CalendarIcon className="h-5 w-5" />,
	menuItems,
	menuLabel = '',
	arrowIcon = '',
}) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [dropdownPosition, setDropdownPosition] = useState<'left' | 'right'>(
		'right'
	);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	useClickOutside(dropdownRef, () => {
		setIsDropdownOpen(false);
	});

	const toggleDropdown = () => {
		setIsDropdownOpen((prev) => !prev);
	};

	useEffect(() => {
		if (buttonRef.current && dropdownRef.current) {
			const buttonRect = buttonRef.current.getBoundingClientRect();
			const dropdownRect = dropdownRef.current.getBoundingClientRect();

			// Check if dropdown overflows the viewport on the right
			if (buttonRect.right + dropdownRect.width > window.innerWidth) {
				setDropdownPosition('right');
			} else {
				setDropdownPosition('left');
			}
		}
	}, [isDropdownOpen]);

	return (
		<div className="relative" data-testid="dropdown-menu-placeholder">
			<button
				type="button"
				className="flex items-center rtl:flex-row-reverse space-x-1 text-gray-500 hover:text-gray-900"
				onClick={toggleDropdown}
				ref={buttonRef}
				aria-haspopup="true"
				aria-expanded={isDropdownOpen}
				aria-label={
					menuLabel
						? `Toggle ${menuLabel} dropdown`
						: 'Toggle dropdown'
				}
			>
				{React.cloneElement(menuIcon, {
					className: 'h-5 w-5 ',
				})}
				{arrowIcon &&
					React.cloneElement(arrowIcon as React.ReactElement, {
						className: 'h-5 w-5',
					})}
				{menuLabel && <span className="ml-2">{menuLabel}</span>}{' '}
			</button>
			<div
				ref={dropdownRef}
				className={`absolute top-full z-10 ${
					dropdownPosition === 'right' ? 'right-0' : 'left-0'
				} mt-2 w-44 bg-white dark:bg-gray-600 semi-dark:bg-gray-500 rounded-lg shadow-md ${
					isDropdownOpen ? '' : 'hidden'
				}`}
				role="menu"
				aria-labelledby={menuLabel ? `${menuLabel}-label` : undefined}
			>
				<ul className="py-1 text-gray-700 dark:text-white semi-dark:text-gray-200">
					{menuItems.map((item) => (
						<li key={item.id}>
							<button
								type="button"
								className="block px-4 py-2 w-full text-left"
								onClick={item.onClick}
								aria-label={`Select ${item.label}`}
								id={item.id} // Adding a unique ID for testing
							>
								{item.label}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default XChartDropdownMenu;
