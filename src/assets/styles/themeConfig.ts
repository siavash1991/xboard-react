import type { CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
	breadcrumb: {
		item: {
			href: {
				off: 'flex items-center text-sm font-medium text-gray-400 dark:text-gray-400',
				on: 'flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
			},
		},
	},
	table: {
		root: {
			base: 'overflow-hidden w-full text-left text-sm text-gray-500 dark:text-gray-400 rounded-lg',
			shadow: 'absolute ',
			wrapper: 'relative',
		},
	},
	card: {
		root: {
			base: 'flex rounded-lg bg-white dark:bg-gray-800',
		},
	},
	sidebar: {
		root: {
			base: 'h-full x-sidebar',
			inner: 'bg-danube dark:bg-gray-800 h-full overflow-y-auto overflow-x-hidden py-4 px-3',
		},
		item: {
			base: 'relative my-1 flex items-center justify-center rounded-md p-2 text-sm font-normal text-sky-200 hover:transition-all duration-300 hover:bg-gray-800 dark:text-white dark:hover:bg-gray-700',
			active: 'active-item bg-gray-100 dark:bg-gray-700 text-gray-800 hover:text-sky-200',
			icon: {
				base: 'h-4 w-4 flex-shrink-0 text-sky-200 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
			},
		},
		cta: {
			base: 'mt-10 rounded-lg p-4 bg-gray-100',
		},
		logo: {
			base: 'mb-7 flex items-center pl-1',
			collapsed: {
				on: 'hidden',
				off: 'self-center whitespace-nowrap text-xl font-medium text-sky-200 dark:text-white',
			},
			img: 'mr-3 h-6 sm:h-7',
		},
	},
	footer: {
		root: {
			base: 'w-full rounded-lg bg-white dark:bg-gray-800 md:flex md:items-center md:justify-between',
		},
		groupLink: {
			link: {
				base: 'last:mr-0 mr-6 me-4',
			},
		},
	},
};

export default customTheme;
