import { Badge, Sidebar } from 'flowbite-react';
import Logo from '@assets/images/logos/logo.svg';
import useActiveItem from '@hooks/useActiveItem';
import { withBasePath } from '@shared/basePathHelper';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { toggleSidebar } from '@redux/sidebarSlice'; // Import toggleSidebar action
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
	const activeItem = useActiveItem();
	const basePath = withBasePath();
	const dispatch = useDispatch();

	const getActiveItemClassName = (isActive: boolean) =>
		isActive
			? 'button-open bg-gray-100 dark:bg-gray-700 text-gray-800 hover:text-sky-200'
			: '';

	// Function to handle item click and close the sidebar
	const handleItemClick = () => {
		dispatch(toggleSidebar()); // Dispatch action to close sidebar
	};

	return (
		<Sidebar
			aria-label="Sidebar with logo branding example"
			className="w-100 overflow-y-auto"
		>
			<Sidebar.Logo
				href={`${basePath}/`}
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
						href={`${basePath}/`}
						icon={ChartPieIcon}
						active={activeItem === '/'}
						data-testid="dashboard-item"
						onClick={handleItemClick}
					>
						Dashboard
					</Sidebar.Item>
					<Sidebar.Item
						key="profile"
						href={`${basePath}/user-profile`}
						icon={UserCircleIcon}
						active={activeItem === '/user-profile'}
						onClick={handleItemClick}
					>
						Profile
					</Sidebar.Item>
					<Sidebar.Item
						key="users"
						icon={UsersIcon}
						active={activeItem === '/users'}
						href={`${basePath}/users`}
						onClick={handleItemClick}
					>
						Users
					</Sidebar.Item>
					<Sidebar.Item
						key="forms"
						icon={InformationCircleIcon}
						active={activeItem === '/forms'}
						href={`${basePath}/forms`}
						onClick={handleItemClick}
					>
						Forms
					</Sidebar.Item>
					<Sidebar.Item
						key="tables"
						icon={InformationCircleIcon}
						active={activeItem === '/tables'}
						href={`${basePath}/tables`}
						onClick={handleItemClick}
					>
						Tables
					</Sidebar.Item>
					<Sidebar.Collapse
						icon={ChartPieIcon}
						label="Charts"
						open={activeItem.includes('charts-')}
						className={getActiveItemClassName(
							activeItem.includes('/charts-')
						)}
					>
						<Sidebar.Item
							className={getActiveItemClassName(
								activeItem === '/charts-chartjs'
							)}
							active={activeItem === '/charts-chartjs'}
							href={`${basePath}/charts-chartjs`}
							onClick={handleItemClick}
						>
							ChartJs
						</Sidebar.Item>
						<Sidebar.Item
							className={getActiveItemClassName(
								activeItem === '/charts-apex'
							)}
							active={activeItem === '/charts-apex'}
							href={`${basePath}/charts-apex`}
							onClick={handleItemClick}
						>
							Apex Charts
						</Sidebar.Item>
					</Sidebar.Collapse>

					<Sidebar.Collapse
						icon={ClipboardIcon}
						label="Cards"
						open={activeItem.includes('cards-')}
						className={getActiveItemClassName(
							activeItem.includes('/cards-')
						)}
					>
						<Sidebar.Item
							className={getActiveItemClassName(
								activeItem === '/cards-default'
							)}
							active={activeItem === '/cards-default'}
							href={`${basePath}/cards-default`}
							onClick={handleItemClick}
						>
							Default
						</Sidebar.Item>
						<Sidebar.Item
							className={getActiveItemClassName(
								activeItem === '/cards-advance'
							)}
							active={activeItem === '/cards-advance'}
							href={`${basePath}/cards-advance`}
							onClick={handleItemClick}
						>
							Advance
						</Sidebar.Item>
					</Sidebar.Collapse>

					<Sidebar.Item
						key="signin"
						href={`${basePath}/signin`}
						icon={ArrowRightIcon}
						active={activeItem === '/signin'}
						onClick={handleItemClick}
					>
						Sign In
					</Sidebar.Item>
					<Sidebar.Item
						key="signout"
						icon={ArrowLeftIcon}
						active={activeItem === '/signup'}
						href={`${basePath}/signup`}
						onClick={handleItemClick}
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
						onClick={handleItemClick} // Close sidebar on button click
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
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 111.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 010-1.414z"
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
					onClick={handleItemClick} // Close sidebar on link click
				>
					Turn new navigation off
				</a>
			</Sidebar.CTA>
		</Sidebar>
	);
};

export default XSidebar;
