# Usage

This project contains several components that you can use throughout your application. To get started, import the desired component into your files.

### Components

#### XBreadcrumb

A breadcrumb component for navigation.

```typescript
import XBreadcrumb from '@atoms/Breadcrumb';

const items = [
	{ href: '/home', label: 'Home', id: 1 },
	{ href: '/products', label: 'Products', id: 2 },
	{ label: 'Details', id: 3 },
];

<XBreadcrumb items={items} />;
```

#### XChartDropdownMenu

A dropdown menu component that includes a button and a list of menu items.

```typescript
import XChartDropdownMenu from '@atoms/ChartDropdownMenu';

const menuItems = [
	{
		id: 'item1',
		label: 'Option 1',
		onClick: () => console.log('Option 1 clicked'),
	},
	{
		id: 'item2',
		label: 'Option 2',
		onClick: () => console.log('Option 2 clicked'),
	},
];

<XChartDropdownMenu menuItems={menuItems} menuLabel="Menu" />;
```

#### ComponentBody

A wrapper component for holding child components.

```typescript
import ComponentBody from '@atoms/ComponentBody';

<ComponentBody>
	<p>Your content goes here</p>
</ComponentBody>;
```

#### XComponentHeader

A header component that displays a title, subtitle, and optional value and change percentage.

```typescript
import XComponentHeader from '@atoms/ComponentHeader';

<XComponentHeader
	title="Revenue"
	subtitle="Total Revenue"
	value="$78,000"
	changePercentage="+5%"
	isPositiveChange={true}
/>;
```

#### XComponentWrapper

A wrapper component for styling your content.

```typescript
import XComponentWrapper from '@atoms/ComponentWrapper';

<XComponentWrapper>
	<p>Your content goes here</p>
</XComponentWrapper>;
```

#### XDirToggle

A button that toggles the text direction between left-to-right (LTR) and right-to-left (RTL) for the entire document.

```typescript
import React from 'react';
import XDirToggle from '@atoms/DirToggle';

const App = () => {
	return (
		<div>
			<XDirToggle />
		</div>
	);
};

export default App;
```

#### XGridContainer

A grid container component that uses Tailwind CSS classes to create a responsive grid layout.

```typescript
import React from 'react';
import XGridContainer from '@atoms/GridContainer';

const App: React.FC = () => {
	return (
		<XGridContainer className="your-custom-class">
			{/* Your grid items go here */}
			<div className="col-span-4">Item 1</div>
			<div className="col-span-4">Item 2</div>
			<div className="col-span-4">Item 3</div>
		</XGridContainer>
	);
};

export default App;
```

#### XLoadingSpinner

A simple loading spinner component that can be used to indicate a loading state in your application.

```typescript
import React from 'react';
import XLoadingSpinner from '@atoms/LoadingSpinner';

const App: React.FC = () => {
	return (
		<div>
			<h1>Loading Data...</h1>
			<XLoadingSpinner />
			{/* Other components or content can go here */}
		</div>
	);
};

export default App;
```

#### XPageTitle

A simple component for displaying a page title.

```typescript
import React from 'react';
import PageTitle from '@atoms/PageTitle';

const App: React.FC = () => {
	return (
		<div>
			<PageTitle title="Welcome to My Application" />
			{/* Other components or content can go here */}
		</div>
	);
};

export default App;
```

#### XPagination

A component for displaying pagination controls for navigating through a list of items.

```typescript
import React, { useState } from 'react';
import XPagination from '@atoms/Pagination';

const App: React.FC = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalItems = 100; // Total number of items
	const itemsPerPage = 10; // Items to display per page

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		// Add logic to fetch or display items for the new page if necessary
	};

	return (
		<div>
			{/* Other components or content can go here */}
			<XPagination
				totalItems={totalItems}
				itemsPerPage={itemsPerPage}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};

export default App;
```

#### XSearch

A component for displaying a search input field with a keyboard shortcut (Ctrl + /) to focus the input.

```typescript
import React from 'react';
import XSearch from '@atoms/Search';

const App: React.FC = () => {
	return (
		<div>
			<XSearch className="my-custom-class" />
			{/* Other components or content can go here */}
		</div>
	);
};

export default App;
```

#### XSidebarToggle

A component for toggling a sidebar with keyboard support to close it using the 'Esc' key. It displays a hamburger icon when the sidebar is closed and a close icon when it is open.

```typescript
import React from 'react';
import XSidebarToggle from '@atoms/SidebarToggle';

const App: React.FC = () => {
	return (
		<div>
			<XSidebarToggle />
			{/* Other components or content can go here */}
		</div>
	);
};

export default App;
```

#### XTableRowDropdownMenu

A dropdown menu component for table rows that displays a list of actions when clicked. It closes when an item is selected or when clicked outside. The dropdown automatically adjusts its position to open upwards if there's not enough space below.

```typescript
import React from 'react';
import XTableRowDropdownMenu from '@atoms/TableRowDropdownMenu';

const App: React.FC = () => {
	const menuItems = [
		{
			id: 'edit',
			label: 'Edit',
			onClick: () => console.log('Edit clicked'),
		},
		{
			id: 'delete',
			label: 'Delete',
			onClick: () => console.log('Delete clicked'),
		},
	];

	return (
		<table>
			<tbody>
				<tr>
					<td>Row Data</td>
					<td>
						<XTableRowDropdownMenu menuItems={menuItems} />
					</td>
				</tr>
				{/* Additional rows can be added here */}
			</tbody>
		</table>
	);
};

export default App;
```

#### XThemeToggle

Allows users to switch between light, dark, semi-dark, and system themes. It features a dropdown menu with icons representing each theme.

```typescript
import React from 'react';
import XThemeToggle from '@atoms/ThemeToggle'; // Adjust the import path as necessary

const App: React.FC = () => {
	return (
		<div className="app-container">
			<header className="app-header">
				<h1 className="text-2xl font-bold">Welcome to My App</h1>
				<XThemeToggle className="theme-toggle" /> {/* Use the theme toggle here */}
			</header>
			<main className="app-content">
				<p>
					This is a sample application demonstrating the theme toggle
					feature.
				</p>
			</main>
		</div>
	);
};

export default App;
```

#### XBarChart

A bar chart component that displays data using the Chart.js library.

```typescript
import React from 'react';
import XBarChart from '@molecules/ChartJs/BarChart';
import { ChartData, ChartOptions } from 'chart.js';

const App: React.FC = () => {
	const data: ChartData<'bar'> = {
		labels: ['January', 'February', 'March', 'April'],
		datasets: [
			{
				label: 'Sales',
				data: [12, 19, 3, 5],
				backgroundColor: 'rgba(75, 192, 192, 0.6)',
			},
		],
	};

	const options: ChartOptions<'bar'> = {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	};

	return (
		<div>
			<XBarChart
				data={data}
				options={options}
				className="your-custom-class"
			/>
			{/* Other components */}
		</div>
	);
};

export default App;
```

#### XBubbleChart

A bubble chart component that visualizes data points in three dimensions using the Chart.js library.

```typescript
import React from 'react';
import XBubbleChart from '@molecules/ChartJs/BubbleChart';
import { ChartData, ChartOptions } from 'chart.js';

const App: React.FC = () => {
	const data: ChartData<'bubble'> = {
		labels: ['My First dataset', 'My Second dataset'],
		datasets: [
			{
				label: 'Dataset 1',
				data: [
					{ x: 20, y: 30, r: 15 },
					{ x: 40, y: 10, r: 10 },
				],
				backgroundColor: 'rgba(75, 192, 192, 0.6)',
			},
			{
				label: 'Dataset 2',
				data: [
					{ x: 30, y: 40, r: 20 },
					{ x: 25, y: 25, r: 15 },
				],
				backgroundColor: 'rgba(153, 102, 255, 0.6)',
			},
		],
	};

	const options: ChartOptions<'bubble'> = {
		scales: {
			x: {
				type: 'linear',
				position: 'bottom',
			},
		},
	};

	return (
		<div>
			<XBubbleChart data={data} options={options} height="300" />
			{/* Other components */}
		</div>
	);
};

export default App;
```

#### XLineChart

A line chart component that visualizes data trends over time using the Chart.js library.

```typescript
import React from 'react';
import XLineChart from '@molecules/ChartJs/LineChart';
import { ChartData, ChartOptions } from 'chart.js';

const App: React.FC = () => {
	const data: ChartData<'line'> = {
		labels: ['January', 'February', 'March', 'April', 'May'],
		datasets: [
			{
				label: 'Sales',
				data: [65, 59, 80, 81, 56],
				fill: false,
				borderColor: 'rgba(75, 192, 192, 1)',
				tension: 0.1,
			},
		],
	};

	const options: ChartOptions<'line'> = {
		responsive: true,
		scales: {
			x: {
				title: {
					display: true,
					text: 'Months',
				},
			},
			y: {
				title: {
					display: true,
					text: 'Sales',
				},
			},
		},
	};

	return (
		<div>
			<XLineChart data={data} options={options} height="300" />
			{/* Other components */}
		</div>
	);
};

export default App;
```

#### XPolarChart

A polar area chart component that displays data in a circular layout, ideal for comparing proportions of different categories using the Chart.js library.

```typescript
import React from 'react';
import XPolarChart from '@molecules/ChartJs/PolarChart';
import { ChartOptions } from 'chart.js';

const App: React.FC = () => {
	const data = {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [
			{
				label: 'Votes',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					'rgba(255, 99, 132, 0.6)',
					'rgba(54, 162, 235, 0.6)',
					'rgba(255, 206, 86, 0.6)',
					'rgba(75, 192, 192, 0.6)',
					'rgba(153, 102, 255, 0.6)',
					'rgba(255, 159, 64, 0.6)',
				],
			},
		],
	};

	const options: ChartOptions<'polarArea'> = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
		},
	};

	return (
		<div>
			<XPolarChart data={data} options={options} height={250} />
			{/* Other components */}
		</div>
	);
};

export default App;
```

#### XRadarChart

A radar chart component that visualizes multivariate data using the Chart.js library, making it easy to compare different variables.

```typescript
import React from 'react';
import XRadarChart from '@molecules/ChartJs/RadarChart';
import { ChartOptions } from 'chart.js';

const App: React.FC = () => {
	const data = {
		labels: ['Eating', 'Drinking', 'Sleeping', 'Working', 'Playing'],
		datasets: [
			{
				label: 'Activity Level',
				data: [65, 59, 90, 81, 56],
				backgroundColor: 'rgba(255, 99, 132, 0.6)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
			},
		],
	};

	const options: ChartOptions<'radar'> = {
		responsive: true,
		scales: {
			r: {
				ticks: {
					beginAtZero: true,
				},
			},
		},
	};

	return (
		<div>
			<XRadarChart data={data} options={options} height={250} />
			{/* Other components */}
		</div>
	);
};

export default App;
```

#### XCountCard

A card component that displays a title, content, and an icon.

```typescript
import React from 'react';
import XCountCard from '@molecules/CountCard';

const App: React.FC = () => {
	return (
		<div>
			<XCountCard
				title="Total Sales"
				content="$50,000"
				iconName="ChartBar" // Replace with the desired HeroIcon name
				className="your-custom-class"
			/>
			{/* Other components */}
		</div>
	);
};

export default App;
```

#### XFlatPickr

A date picker component that allows users to select a date.

```typescript
import React, { useState } from 'react';
import XFlatPickr from '@molecules/FlatPickr';

const App: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

	return (
		<div>
			<XFlatPickr
				value={selectedDate}
				onChange={handleDateChange}
				options={{ dateFormat: 'Y-m-d' }} // Example of options
				className="your-custom-class"
			/>
			{/* Other components */}
		</div>
	);
};

export default App;
```

#### XSearch

A search input component that allows users to enter search queries, featuring a magnifying glass icon for visual indication.

```typescript
import React from 'react';
import XSearch from '@molecules/Search';

const App: React.FC = () => {
	return (
		<div>
			<XSearch className="your-custom-class" />
			{/* Other components */}
		</div>
	);
};

export default App;
```

#### XUserAvatarInfo

A user avatar component that displays the user's profile picture along with their name and join date, indicating their online status.

```typescript
import React from 'react';
import XUserAvatarInfo from '@molecules/UserAvatarInfo';

const App: React.FC = () => {
	return (
		<div>
			<XUserAvatarInfo className="your-custom-class" />
			{/* Other components */}
		</div>
	);
};

export default App;
```

#### XActiveProjectCard

A component that displays a card with active project details, including a list of projects with progress bars.

```typescript
import React from 'react';
import XActiveProjectCard from '@organisms/Cards/ActiveProjectCard';

const App = () => {
	return (
		<div className="grid grid-cols-12 gap-4">
			<XActiveProjectCard className="custom-class" />
		</div>
	);
};

export default App;
```

#### XCryptoCard

A component that displays a card for connecting cryptocurrency wallets, featuring popular wallet options.

```typescript
import React from 'react';
import XCryptoCard from '@organisms/Cards/CryptoCard';

const App = () => {
	return (
		<div className="grid grid-cols-12 gap-4">
			<XCryptoCard className="custom-class" />
		</div>
	);
};

export default App;
```

#### XCTACard

A component that displays a call-to-action card encouraging users to download a mobile app.

```typescript
import React from 'react';
import XCTACard from '@organisms/Cards/CTACard';

const App = () => {
	return (
		<div className="grid grid-cols-12 gap-4">
			<XCTACard className="custom-class" />
		</div>
	);
};

export default App;
```

#### XDefaultCard

A simple card component that displays a title and description, useful for showcasing notable content.

```typescript
import React from 'react';
import XDefaultCard from '@organisms/Cards/DefaultCard';

const App = () => {
	return (
		<div className="grid grid-cols-12 gap-4">
			<XDefaultCard className="custom-class" />
			<XDefaultCard />
		</div>
	);
};

export default App;
```

#### XEarningReportsCard

A component that displays an overview of weekly earnings, including a bar chart and financial metrics.

```typescript
import XEarningReportsCard from '@organisms/Cards/EarningReportsCard';

const App = () => {
	return (
		<div className="grid grid-cols-12 gap-4">
			<XEarningReportsCard className="col-span-12 lg:col-span-6 xl:col-span-4" />
		</div>
	);
};

export default App;
```

#### XEcommerceCard

Displays an e-commerce card for products, including an image, title, rating, price, and an "Add to cart" button.

```typescript
import XEcommerceCard from '@organisms/Cards/EcommerceCard';

const App = () => {
	return (
		<div className="grid grid-cols-12 gap-4">
			<XEcommerceCard className="col-span-12 lg:col-span-6 xl:col-span-4" />
		</div>
	);
};

export default App;
```

#### XFormCard

Is a form card that includes fields for email and password, a "Remember me" checkbox, and a submit button.

```typescript
import XFormCard from '@organisms/Cards/FormCard';

const App = () => {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<XFormCard className="w-full max-w-md" />
		</div>
	);
};

export default App;
```

#### XHorizontalCard

Displays a horizontal card with a title, description, and an image.

```typescript
import XHorizontalCard from '@organisms/Cards/HorizontalCard';

const App = () => {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<XHorizontalCard className="w-full max-w-sm" />
		</div>
	);
};

export default App;
```

#### XWithImageCard

Displays a card with an image, title, and description.

```typescript
import XWithImageCard from '@organisms/Cards/WithImageCard';

const App = () => {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<XWithImageCard className="w-full max-w-sm" />
		</div>
	);
};

export default App;
```

#### XMonthlyCampaignStateCard

Displays a card with a header and a list of campaign state data items, including icons, labels, values, and percentage changes.

```typescript
import XMonthlyCampaignStateCard from '@organisms/Cards/MonthlyCampaignStateCard';

const App = () => {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<XMonthlyCampaignStateCard className="w-full max-w-md" />
		</div>
	);
};

export default App;
```

#### XOrdersByCountriesCard

This component displays a card with orders categorized by their statuses (New, Preparing, Shipping). It includes a header with menu options and utilizes tabs to switch between order categories.

```typescript
import React from 'react';
import XOrdersByCountriesCard from '@organisms/Cards/OrdersByCountriesCard';

const App: React.FC = () => {
	return (
		<div className="grid grid-cols-12 gap-4">
			<XOrdersByCountriesCard className="col-span-12 lg:col-span-6 xl:col-span-4" />
		</div>
	);
};

export default App;
```

#### XPricingCard

Displays a pricing card with features and a call-to-action button.

```typescript
import XPricingCard from '@organisms/Cards/PricingCard';

const PricingSection = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
			<XPricingCard className="bg-white shadow-md rounded-lg" />
			<XPricingCard className="bg-white shadow-md rounded-lg" />
			<XPricingCard className="bg-white shadow-md rounded-lg" />
		</div>
	);
};

export default PricingSection;
```

#### XWithCTAButtonCard

Displays a card with a title, description, and a call-to-action button.

```typescript
import XWithCTAButtonCard from '@organisms/Cards/WithCTAButtonCard';

const InfoSection = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			<XWithCTAButtonCard className="bg-white shadow-md rounded-lg" />
			<XWithCTAButtonCard className="bg-white shadow-md rounded-lg" />
		</div>
	);
};

export default InfoSection;
```

#### XApexAreaChart

Displays an area chart with customizable data and themes. It includes options for different time ranges and displays relevant metrics such as visits, clicks, and sales.

```typescript
import React from 'react';
import XApexAreaChart from '@organisms/Charts/ApexAreaChart';

const App: React.FC = () => {
	return (
		<div className="container mx-auto">
			<XApexAreaChart className="my-4" />
		</div>
	);
};

export default App;
```

#### XApexBalanceChart

Presents a line chart displaying balance data for commercial networks and enterprises. It shows the current balance value and its percentage change.

```typescript
import React from 'react';
import XApexBalanceChart from '@organisms/Charts/ApexBalanceChart';

const App: React.FC = () => {
	return (
		<div className="container mx-auto">
			<XApexBalanceChart className="my-4" />
		</div>
	);
};

export default App;
```

#### XApexBalanceHorizontalChart

Displays a horizontal bar chart representing balance data for specific dates, along with a header that includes the total balance amount and a menu for selecting date ranges.

```typescript
import React from 'react';
import XApexBalanceHorizontalChart from '@organisms/Charts/ApexBalanceHorizontalChart';

const App: React.FC = () => {
	return (
		<div className="container mx-auto">
			<XApexBalanceHorizontalChart className="my-4" />
		</div>
	);
};

export default App;
```

#### XApexBarChart

Displays a bar chart comparing data from different categories, with options for filtering the displayed data based on time periods.

```typescript
import React from 'react';
import XApexBarChart from '@organisms/Charts/ApexBarChart';

const App: React.FC = () => {
	return (
		<div className="container mx-auto">
			<XApexBarChart className="my-4" />
		</div>
	);
};

export default App;
```

#### XApexStocksPricesChart

Displays a candlestick chart visualizing stock prices over time, with options for filtering the displayed data based on time periods.

```typescript
import React from 'react';
import XApexStocksPricesChart from '@organisms/Charts/ApexStocksPricesChart';

const App: React.FC = () => {
	return (
		<div className="container mx-auto">
			<XApexStocksPricesChart className="my-4" />
		</div>
	);
};

export default App;
```

#### XApexTechnologiesChart

Displays a bubble chart visualizing data for various technologies, allowing users to filter the displayed data based on time periods.

```typescript
import React from 'react';
import XApexTechnologiesChart from '@organisms/Charts/ApexTechnologiesChart';

const App: React.FC = () => {
	return (
		<div className="container mx-auto">
			<XApexTechnologiesChart className="my-4" />
		</div>
	);
};

export default App;
```

#### XChartJsBar

Displays a bar chart with statistics, allowing users to filter the data displayed based on time periods.

```typescript
import React from 'react';
import XChartJsBar from '@organisms/Charts/ChartJsBar';

const App: React.FC = () => {
	return (
		<div className="container mx-auto">
			<XChartJsBar className="my-4" />
		</div>
	);
};

export default App;
```

#### XChartJsBubble

Displays a bubble chart with statistics about commercial networks and enterprises, including dynamic options based on the current theme.

```typescript
import React from 'react';
import XChartJsBubble from '@organisms/Charts/ChartJsBubble';

const App: React.FC = () => {
	return (
		<div className="container mx-auto">
			<XChartJsBubble className="my-4" />
		</div>
	);
};

export default App;
```

#### XChartJsHorizontalBar

Displays a horizontal bar chart illustrating sales data, with a dropdown menu for selecting different time periods.

```typescript
import React from 'react';
import XChartJsHorizontalBar from '@organisms/Charts/ChartJsHorizontalBar';

const App: React.FC = () => {
	return (
		<div className="container mx-auto">
			<XChartJsHorizontalBar className="my-4" />
		</div>
	);
};

export default App;
```

#### XChartJsLine

Visualizes statistical data with a line chart, highlighting trends for various regions.

```typescript
import React from 'react';
import XChartJsLine from '@organisms/Charts/ChartJsLine';

const App: React.FC = () => {
	return (
		<div className="container mx-auto">
			<XChartJsLine className="my-4" />
		</div>
	);
};

export default App;
```

#### XChartJsPolar

Displays a polar area chart for visualizing average skills in various regions.

```typescript
import React from 'react';
import XChartJsPolar from '@organisms/Charts/ChartJsPolar';

const App: React.FC = () => {
	return (
		<div className="container mx-auto">
			<XChartJsPolar className="my-4" />
		</div>
	);
};

export default App;
```

#### XChartJsRadar

Displays a radar chart showcasing various activities and their associated scores.

```typescript
import React from 'react';
import XChartJsRadar from '@organisms/Charts/ChartJsRadar';

const App: React.FC = () => {
	return (
		<div className="container mx-auto">
			<XChartJsRadar className="my-4" />
		</div>
	);
};

export default App;
```

#### XBasicWithIcon

Provides a basic form layout with icons for input fields, ideal for user details submission.

```typescript
import React from 'react';
import XBasicWithIcon from '@organisms/Forms/BasicWithIcon';

const App = () => {
	return (
		<div className="container mx-auto">
			<XBasicWithIcon className="mt-5" />
		</div>
	);
};

export default App;
```

#### XBasicForm

Provides a simple form layout with labeled input fields for user details, suitable for basic data collection.

```typescript
import React from 'react';
import XBasicForm from '@organisms/Forms/BasicForm';

const App = () => {
	return (
		<div className="container mx-auto">
			<XBasicForm className="mt-5" />
		</div>
	);
};

export default App;
```

#### XFormWithTabs

Renders a multi-tabbed form for user input. It includes sections for personal information, account details, and social links, allowing users to switch between tabs to fill out different parts of the form.

```typescript
import React from 'react';
import XFormWithTabs from '@organisms/Forms/FormWithTabs';

const App: React.FC = () => {
	return (
		<div className="container mx-auto">
			<XFormWithTabs className="custom-class" />
		</div>
	);
};

export default App;
```

#### XMultiColWithSep

Renders a multi-column form with various input fields, including text inputs, a date picker, and a multi-select dropdown.

```typescript
import React from 'react';
import XMultiColWithSep from '@organisms/Forms/MultiColWithSep';

const app = () => {
	return (
		<div className="my-4">
			<XMultiColWithSep className="additional-class" />
		</div>
	);
};

export default app;
```

#### XTableBasic

Renders a basic table with project details, including columns for project name, client, assigned users, status, and actions.

```typescript
import XTableBasic from '@organisms/Tables/TableBasic';

const ExampleComponent: React.FC = () => {
	// Optional: Custom data can be passed as props to override the default table data
	const customTableData = [
		{
			id: '1',
			project: 'Custom Project',
			logo: '/path/to/custom-logo.png',
			client: 'Custom Client',
			users: [
				{
					id: '1',
					fullName: 'Custom User',
					avatarUrl: '/path/to/avatar.png',
				},
			],
			status: 'In Progress',
			statusColor: 'bg-purple-100',
			statusTextColor: 'text-purple-500',
		},
		// Additional custom projects...
	];

	return (
		<div className="container">
			<XTableBasic className="custom-class" tableData={customTableData} />
		</div>
	);
};

export default ExampleComponent;
```

#### XCaptionTable

Displays a customizable table of projects, including columns for the project name, client, associated users, and project status. The table also has an actions column with dropdown options to edit or delete a project. You can pass a tableData prop to supply custom project data, or it will default to sample data.

```typescript
import React from 'react';
import XCaptionTable from '@organisms/Tables/XCaptionTable';

// Sample usage
const App: React.FC = () => {
	const customTableData = [
		{
			id: '1',
			project: 'Custom Project',
			logo: '/path/to/custom-logo.png',
			client: 'Custom Client',
			users: [
				{
					id: '1',
					fullName: 'Custom User',
					avatarUrl: '/path/to/avatar1.png',
				},
				{
					id: '2',
					fullName: 'Another User',
					avatarUrl: '/path/to/avatar2.png',
				},
			],
			status: 'In Progress',
			statusColor: 'bg-purple-100',
			statusTextColor: 'text-purple-500',
		},
		// Additional project entries as needed
	];

	return (
		<div className="container mx-auto">
			<XCaptionTable className="mt-8" tableData={customTableData} />
		</div>
	);
};

export default App;
```

#### XDarkHeadTable

Renders a table with a dark header, displaying projects and their details, including project name, client, users, and status. Each row has an actions menu for "Edit" and "Delete" actions.

```typescript
import React from 'react';
import XDarkHeadTable from '@organisms/Tables/XDarkHeadTable';

const App: React.FC = () => {
	return (
		<div className="container mx-auto">
			<XDarkHeadTable className="mt-8" title="Project Overview" />
		</div>
	);
};

export default App;
```

#### XHeaderFooterTable

Renders a table with a customizable header, body, and footer. It displays project information, including logos, client names, associated users, and project statuses, each with designated colors. This component uses Tippy for tooltip support on user avatars and includes action buttons for editing and deleting rows.

```typescript
import XHeaderFooterTable from '@organisms/Tables/XHeaderFooterTable';

// Usage example
const App = () => {
	return (
		<div className="my-custom-container">
			<XHeaderFooterTable className="my-custom-class" />
		</div>
	);
};

export default App;
```

#### XTableHoverable

Displays a hoverable table with project details, including project name, client, users, status, and actions. It provides visual feedback on hover and allows for action menus for each row.

```typescript
import React from 'react';
import XTableHoverable from '@organisms/XTableHoverable';

const App = () => {
	// Sample table data (can be replaced with dynamic data)
	const sampleData = [
		{
			id: '1',
			project: 'Laravel Project',
			logo: 'images/cards/active-project/laravel-logo.png',
			client: 'Olivia Parker',
			users: [
				{
					id: '1',
					fullName: 'John Doe',
					avatarUrl: 'path/to/avatar1.png',
				},
				{
					id: '2',
					fullName: 'Jane Smith',
					avatarUrl: 'path/to/avatar2.png',
				},
			],
			status: 'Pending',
			statusColor: 'bg-blue-100',
			statusTextColor: 'text-blue-500',
		},
		// Add more projects as needed
	];

	return (
		<div>
			<XTableHoverable
				tableData={sampleData}
				className="my-custom-class"
			/>
		</div>
	);
};

export default App;
```

#### XTableResponsive

Renders a responsive table displaying project details, including project name, client, users, status, and action buttons. It supports a dropdown menu for editing and deleting actions.

```typescript
import React from 'react';
import XTableResponsive from '@organisms/XTableResponsive';

const App = () => {
	const customTableData = [
		{
			id: '1',
			project: 'Next.js Project',
			logo: 'images/cards/active-project/nextjs-logo.png',
			client: 'Emily Brown',
			users: [
				{ id: '1', fullName: 'John Doe', avatarUrl: avatar5 },
				{ id: '2', fullName: 'Jane Smith', avatarUrl: avatar6 },
			],
			status: 'Completed',
			statusColor: 'bg-green-100',
			statusTextColor: 'text-green-500',
		},
		// Add more project objects as needed
	];

	return (
		<XTableResponsive
			className="custom-class"
			tableData={customTableData} // Pass custom table data if needed
		/>
	);
};

export default App;
```

#### XTableStriped

Displays a responsive striped table that lists projects along with their associated clients, users, statuses, and actions.

```typescript
import React from 'react';
import XTableStriped from '@organisms/XTableStriped';

const App = () => {
	const customTableData = [
		{
			id: '1',
			project: 'Next.js Project',
			logo: 'path/to/nextjs-logo.png',
			client: 'Emma Watson',
			users: [
				{
					id: '1',
					fullName: 'John Doe',
					avatarUrl: 'path/to/avatar1.png',
				},
				{
					id: '2',
					fullName: 'Jane Smith',
					avatarUrl: 'path/to/avatar2.png',
				},
			],
			status: 'In Progress',
			statusColor: 'bg-orange-100',
			statusTextColor: 'text-orange-500',
		},
		// Add more project objects as needed
	];

	return (
		<div className="my-4">
			<XTableStriped tableData={customTableData} />
		</div>
	);
};

export default App;
```
