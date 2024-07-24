import React, { useState, useRef, useEffect } from 'react';
import useClickOutside from '@hooks/useClickOutside';
import { CalendarIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

interface ChartDropdownMenuProps {
	buttonLabel?: string;
	menuItems: { id: string; label: string; onClick: () => void }[];
}

const ChartDropdownMenu: React.FC<ChartDropdownMenuProps> = ({
	buttonLabel = '',
	menuItems,
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
		<div className="relative">
			<button
				type="button"
				className="flex items-center space-x-1 text-gray-500 hover:text-gray-900"
				onClick={toggleDropdown}
				ref={buttonRef}
			>
				<CalendarIcon className="h-5 w-5" />
				<ChevronDownIcon className="h-5 w-5" />
				<span className="ml-2">{buttonLabel}</span>
			</button>
			<div
				ref={dropdownRef}
				className={`absolute top-full z-10 ${
					dropdownPosition === 'right' ? 'right-0' : 'left-0'
				} mt-2 w-44 bg-white rounded-lg shadow-md ${
					isDropdownOpen ? '' : 'hidden'
				}`}
			>
				<ul className="py-1 text-gray-700">
					{menuItems.map((item) => (
						<li key={item.id}>
							<button
								type="button"
								className="block px-4 py-2 w-full text-left"
								onClick={item.onClick}
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

export default ChartDropdownMenu;
