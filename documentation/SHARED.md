# Shared Directory

The shared directory contains utility functions and configurations that can be reused across different components and modules in the application.

### ApexChartsConfig.ts

This file contains the configuration settings for ApexCharts used in the application.

Key Features:

    Customizes the appearance and behavior of various chart types, including area, bar, and bubble charts.
    Utilizes a Theme type union ('light' | 'dark' | 'semi-dark') to apply consistent theming across charts.
    Exports configuration objects for different chart types that can be imported in chart components.
    Supports responsive design with breakpoints to adjust chart settings based on screen size.
    Provides customization options for colors, categories, and data labels, allowing for flexible chart presentation.

#### Usage:

```typescript
import React from 'react';
import ApexCharts from 'react-apexcharts';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';
import { barChartOptions } from '@shared/ApexChartsConfig';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import useTheme from '@hooks/useTheme';
import useDirection from '@hooks/useDirection';

// Data for the bar chart
const series = [
	{
		name: 'Apple',
		data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
	},
	{
		name: 'Samsung',
		data: [20, 29, 37, 36, 44, 45, 50, 58, 92],
	},
];
const categories = [
	'7/12',
	'8/12',
	'9/12',
	'10/12',
	'11/12',
	'12/12',
	'13/12',
	'14/12',
	'15/12',
];

const XApexBarChart: React.FC<{ className?: string }> = ({
	className = '',
}) => {
	const currentTheme = useTheme();
	const currentDir = useDirection();
	const menuItems = [
		{ id: 'today', label: 'Today', onClick: () => {} },
		{ id: 'yesterday', label: 'Yesterday', onClick: () => {} },
		{ id: 'last7days', label: 'Last 7 Days', onClick: () => {} },
		{ id: 'last30days', label: 'Last 30 Days', onClick: () => {} },
		{ id: 'currentMonth', label: 'Current Month', onClick: () => {} },
		{ id: 'lastMonth', label: 'Last Month', onClick: () => {} },
	];

	return (
		<ComponentWrapper
			className={`col-span-12 break-inside-avoid ${className}`}
		>
			<XComponentHeader
				title="Data Science"
				subtitle="Commercial networks"
				menuItems={menuItems}
				arrowIcon={
					<ChevronDownIcon
						className="h-5 w-5 text-gray-600"
						data-testid="arrow-icon"
					/>
				}
			/>
			<XComponentBody>
				<ApexCharts
					type="bar"
					options={barChartOptions(
						currentTheme,
						currentDir,
						['#826af9', '#d2b0ff'],
						categories
					)}
					series={series}
					height={400}
					className="chartjs"
				/>
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XApexBarChart;
```

### basePathHelper.ts

The `basePathHelper.ts` module provides utility functions for managing base paths in a React application. This ensures that paths for assets and routes are constructed correctly, regardless of the environment.

The `withBasePath` function constructs a complete URL path by appending a specified relative path to the application's base path. This is particularly useful in a single-page application (SPA) where routes and asset paths need to be resolved based on a common base path.

#### Benefits:

Consistency: Ensures all paths are generated based on a single base path, reducing errors related to hardcoded paths.
Maintainability: Changes to the base path only need to be made in one place, simplifying updates and deployments across different environments.

#### Usage:

```typescript
import { withBasePath } from '@shared/basePathHelper';

// Inside the XSidebar component
const XSidebar = () => {
	// Obtain the base path
	const basePath = withBasePath();

	return (
		<Sidebar>
			<Sidebar.Logo
				href={`${basePath}/`}
				img={Logo}
				imgAlt="Flowbite logo"
			>
				XBoard
			</Sidebar.Logo>
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					<Sidebar.Item
						href={`${basePath}/`} // Uses withBasePath for the Dashboard link
						active={activeItem === '/'}
						onClick={handleItemClick}
					>
						Dashboard
					</Sidebar.Item>
					<Sidebar.Item
						href={`${basePath}/user-profile`} // Uses withBasePath for Profile link
						active={activeItem === '/user-profile'}
						onClick={handleItemClick}
					>
						Profile
					</Sidebar.Item>
					<Sidebar.Item
						href={`${basePath}/users`} // Uses withBasePath for Users link
						active={activeItem === '/users'}
						onClick={handleItemClick}
					>
						Users
					</Sidebar.Item>
					<Sidebar.Item
						href={`${basePath}/forms`} // Uses withBasePath for Forms link
						active={activeItem === '/forms'}
						onClick={handleItemClick}
					>
						Forms
					</Sidebar.Item>
					<Sidebar.Item
						href={`${basePath}/tables`} // Uses withBasePath for Tables link
						active={activeItem === '/tables'}
						onClick={handleItemClick}
					>
						Tables
					</Sidebar.Item>
					{/* More items here */}
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	);
};
```

### config.ts

This file serves as a centralized location for managing configuration settings for the application. It contains various configuration variables that can be accessed and utilized across different parts of the application, making it a valuable resource for future enhancements and scalability.

#### Key Features:

Defines environment-specific variables, such as API endpoints or feature flags.
Stores global configuration settings that are consistent across all environments.
Manages theme variables, third-party integrations, or testing configurations.

#### Benefits:

Centralizes management of configuration settings for easier maintenance.
Improves code organization and separation of concerns.
Enables dynamic configuration updates without modifying multiple files.
Facilitates future updates and expansions of the application by providing a single source of truth for configuration.

#### Usage:

```typescript
import config from '@shared/config';

// Access the base path
const basePath = config.basePath;
```
