import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { toggleSidebar } from '@redux/sidebarSlice';
import { RootState, AppDispatch } from '@redux/store';

const XSidebarToggle: React.FC = () => {
	const dispatch: AppDispatch = useDispatch();

	const isSidebarOpen = useSelector(
		(state: RootState) => state.sidebar.isSidebarOpen
	);

	// Close sidebar when pressing the 'Esc' key
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isSidebarOpen) {
				dispatch(toggleSidebar());
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [dispatch, isSidebarOpen]);

	return (
		<>
			<button
				onClick={() => dispatch(toggleSidebar())}
				className="md:hidden relative z-20 block text-gray-600 focus:outline-none rounded-lg p-2 ring-4 ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:ring-gray-700 semi-dark:ring-gray-600 semi-dark:hover:bg-gray-600"
				aria-label="Toggle Sidebar"
				aria-expanded={isSidebarOpen}
				aria-controls="sidebar"
				data-testid="sidebar-toggle"
			>
				{isSidebarOpen ? (
					<XMarkIcon className="h-6 w-6" data-testid="close-icon" /> // Close icon when sidebar is open
				) : (
					<Bars3Icon className="h-6 w-6" data-testid="open-icon" /> // Hamburger icon when sidebar is closed
				)}
			</button>

			{isSidebarOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-90 md:hidden z-10"
					role="button"
					tabIndex={0}
					aria-label="Close Sidebar Overlay"
					onClick={() => dispatch(toggleSidebar())}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							dispatch(toggleSidebar());
						}
					}}
					data-testid="sidebar-overlay"
				></div>
			)}
		</>
	);
};

export default XSidebarToggle;
