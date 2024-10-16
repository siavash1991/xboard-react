import React, { useState, useRef, useEffect } from 'react';
import useClickOutside from '@hooks/useClickOutside';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

interface XTableRowDropdownMenuProps {
	menuItems: { id: string; label: string; onClick: () => void }[];
}

const XTableRowDropdownMenu: React.FC<XTableRowDropdownMenuProps> = ({
	menuItems,
}) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [openUpwards, setOpenUpwards] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	// Close the dropdown if clicked outside
	useClickOutside(dropdownRef, () => {
		setIsDropdownOpen(false);
	});

	const toggleDropdown = () => {
		setIsDropdownOpen((prev) => !prev);
	};

	// Determine if dropdown should open upwards
	useEffect(() => {
		if (isDropdownOpen && buttonRef.current && dropdownRef.current) {
			const buttonRect = buttonRef.current.getBoundingClientRect();
			const dropdownHeight = dropdownRef.current.offsetHeight;
			const parentRect = buttonRef.current
				.closest('table')
				?.getBoundingClientRect();

			if (parentRect) {
				// Check if there's enough space to open the dropdown downwards
				const spaceBelow = parentRect.bottom - buttonRect.bottom;
				if (spaceBelow < dropdownHeight) {
					// If not enough space below, open upwards
					setOpenUpwards(true);
				} else {
					// Otherwise, open downwards
					setOpenUpwards(false);
				}
			}
		}
	}, [isDropdownOpen]);

	return (
		<div className="relative w-fit" data-testid="dropdown-menu">
			<button
				type="button"
				className="flex items-center text-gray-500 hover:text-gray-900"
				onClick={toggleDropdown}
				ref={buttonRef}
				data-testid="toggle-button"
			>
				<EllipsisVerticalIcon className="h-5 w-5 dark:text-gray-100 semi-dark:text-gray-100" />
			</button>
			<div
				ref={dropdownRef}
				className={`absolute z-10 right-0 mt-2 w-36 bg-white rounded-lg shadow-md ${
					isDropdownOpen ? '' : 'hidden'
				} ${
					openUpwards ? 'bottom-full mt-1 me-5' : 'top-full mb-1 me-5'
				}`}
				data-testid="dropdown"
			>
				<ul className="py-1 text-gray-700">
					{menuItems.map((item) => (
						<li key={item.id}>
							<button
								type="button"
								className="block px-4 py-2 w-full text-left hover:bg-gray-100"
								onClick={() => {
									item.onClick();
									setIsDropdownOpen(false);
								}}
								data-testid={`menu-item-${item.id}`}
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

export default XTableRowDropdownMenu;
