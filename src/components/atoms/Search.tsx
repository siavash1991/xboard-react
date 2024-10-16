import React, { useEffect, useRef } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface XSearchProps {
	className?: string;
}

const XSearch: React.FC<XSearchProps> = ({ className = '' }) => {
	// Create a ref for the input element
	const searchInputRef = useRef<HTMLInputElement>(null);

	// Add an effect to listen for the keyboard shortcut (Ctrl + /)
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			// Check for "Ctrl + /"
			if (event.ctrlKey && event.key === '/') {
				event.preventDefault();
				// Focus the input element when the shortcut is pressed
				searchInputRef.current?.focus();
			}
		};

		// Attach the keydown event listener
		window.addEventListener('keydown', handleKeyDown);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<div
			data-testid="search-container"
			className={`search mr-5 rtl:mr-0 rtl:ml-5 ${className}`}
		>
			<div className="relative p-1">
				<input
					data-testid="search-input"
					type="text"
					ref={searchInputRef} // Attach the ref to the input
					className="bg-inherit placeholder-gray-400 text-gray-500 text-sm border-none ring-4 ring-gray-200 dark:ring-gray-700 semi-dark:ring-gray-600 dark:border-gray-700 h-10 w-full p-3 pl-3 pr-10 rtl:pr-3 rtl:pl-10 rounded-md focus:outline-none focus:ring-4 focus:ring-white focus:border-neutral-200 hover:cursor-pointer"
					placeholder="Search ( Ctrl + / )"
				/>
				<span
					data-testid="search-icon"
					className="absolute top-1.5 right-2 pl-3 rtl:right-auto rtl:left-2 rtl:pl-0 rtl:pr-3"
				>
					<MagnifyingGlassIcon className="hover:text-blue-500 hover:cursor-pointer h-5 w-5 mt-2 mr-2 text-gray-300" />
				</span>
			</div>
		</div>
	);
};

export default XSearch;
