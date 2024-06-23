import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Badge, Sidebar } from 'flowbite-react';
import Logo from '../../assets/images/favicon.svg';

import {
	ArrowLeftIcon,
	ArrowRightIcon,
	ChartPieIcon,
	InformationCircleIcon,
	ClipboardIcon,
	UserCircleIcon,
	UsersIcon,
} from '@heroicons/react/24/outline';

const XSidebar = () => {
	const { pathname } = useLocation();
	const [activeItem, setActiveItem] = useState('');

	useEffect(() => {
		setActiveItem(pathname);
	}, [pathname]);

	return (
		<Sidebar
			aria-label="Sidebar with logo branding example"
			className="w-100 overflow-y-auto"
		>
			<Sidebar.Logo
				href="#/"
				img={Logo}
				imgAlt="Flowbite logo"
				data-testid="sidebar-logo"
			>
				XBoard
			</Sidebar.Logo>
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					<Sidebar.Item
						key="dashboard"
						href="/"
						icon={ChartPieIcon}
						active={activeItem === '/'}
						data-testid="dashboard-item"
					>
						Dashboard
					</Sidebar.Item>
					<Sidebar.Item
						key="profile"
						href="/user-profile"
						icon={UserCircleIcon}
						active={activeItem === '/user-profile'}
					>
						Profile
					</Sidebar.Item>
					<Sidebar.Item
						key="users"
						href="/users"
						icon={UsersIcon}
						active={activeItem === '/users'}
					>
						Users
					</Sidebar.Item>
					<Sidebar.Item
						key="forms"
						href="/"
						icon={InformationCircleIcon}
						active={activeItem === '/forms'}
					>
						Forms
					</Sidebar.Item>
					<Sidebar.Item
						key="charts"
						href="/"
						icon={ChartPieIcon}
						active={activeItem === '/charts'}
					>
						Charts
					</Sidebar.Item>
					<Sidebar.Collapse
						icon={ClipboardIcon}
						label="Cards"
						open={activeItem.includes('cards-')}
					>
						<Sidebar.Item
							active={
								activeItem === '/cards-default' ||
								activeItem === '#/cards-default'
							}
							href="/cards-default"
						>
							Default
						</Sidebar.Item>
						<Sidebar.Item
							href="/cards-advance"
							active={
								activeItem === '/cards-advance' ||
								activeItem === '#/cards-advance'
							}
						>
							Advance
						</Sidebar.Item>
					</Sidebar.Collapse>

					<Sidebar.Item
						key="signin"
						href="#/signin"
						icon={ArrowRightIcon}
						active={activeItem === '/signin'}
					>
						Sign In
					</Sidebar.Item>
					<Sidebar.Item
						key="signout"
						href="#/signup"
						icon={ArrowLeftIcon}
						active={activeItem === '/signup'}
					>
						Sign Up
					</Sidebar.Item>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
			<Sidebar.CTA>
				<div className="mb-3 flex items-center">
					<Badge color="warning">Beta</Badge>
					<button
						aria-label="Close"
						className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
						type="button"
					>
						<svg
							aria-hidden
							className="h-4 w-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
				<div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
					Preview the new Flowbite dashboard navigation! You can turn
					the new navigation off for a limited time in your profile.
				</div>
				<a
					className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
					href="#/"
				>
					Turn new navigation off
				</a>
			</Sidebar.CTA>
			<Sidebar.Items className="absolute bottom-0 text-white text-sm p-4"></Sidebar.Items>
		</Sidebar>
	);
};
export default XSidebar;
