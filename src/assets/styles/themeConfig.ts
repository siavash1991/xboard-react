import type { CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
	breadcrumb: {
		item: {
			chevron:
				'mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2  rtl:rotate-180',
			href: {
				off: 'flex items-center text-sm font-medium text-gray-400 dark:text-gray-400',
				on: 'flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
			},
			icon: 'mr-2 h-4 w-4 rtl:rotate-180',
		},
	},
	table: {
		root: {
			base: 'overflow-hidden w-full text-left rtl:text-right text-sm text-gray-500 dark:text-gray-400 rounded-lg',
			shadow: 'absolute ',
			wrapper: 'relative',
		},
	},
	pagination: {
		pages: {
			previous: {
				base: 'ml-0 rounded-l-lg rtl:rounded-l-none rtl:rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-normal text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white',
				icon: 'h-5 w-5 rtl:rotate-180 mt-1',
			},
			next: {
				base: 'rounded-r-lg rtl:rounded-r-none rtl:rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-normal text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white ',
				icon: 'h-5 w-5 rtl:rotate-180 mt-1',
			},
			selector: {
				base: 'w-12 border border-gray-300 bg-white py-2 leading-normal text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white',
			},
		},
	},
	card: {
		root: {
			base: 'flex h-full rounded-lg bg-white dark:bg-gray-800',
			children: 'flex flex-col justify-center gap-4 p-6',
			horizontal: {
				off: 'flex-col',
				on: 'flex-col md:flex-row',
			},
			href: 'hover:bg-white dark:hover:bg-gray-700',
		},
		img: {
			base: '',
			horizontal: {
				off: 'rounded-t-lg ',
				on: 'h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg rtl:md:rounded-l-none rtl:md:rounded-r-lg',
			},
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
			collapsed: {
				insideCollapse:
					'group w-full pl-4 bg-gray-500/50 transition duration-75',
				noIcon: 'font-bold',
			},
			icon: {
				base: 'h-4 w-4',
			},
		},
		collapse: {
			button: 'group flex w-full items-center justify-center rounded-lg p-2 text-sm font-normal text-sky-200 transition duration-75 hover:bg-gray-800 dark:text-white dark:hover:bg-gray-700',
			icon: {
				base: 'h-4 w-4',
			},
			label: {
				base: 'ms-3 flex-1 whitespace-nowrap text-start',
				icon: {
					base: 'h-6 w-6 transition delay-0 ease-in-out',
					open: {
						on: 'rotate-180',
						off: '',
					},
				},
			},
			list: 'p-3 pt-1 mt-1 rounded-lg',
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
	avatar: {
		root: {
			base: 'flex items-center justify-center space-x-4 rounded-lg',
		},
	},
	fileInput: {
		root: {
			base: 'flex',
		},
	},

	tab: {
		base: 'flex flex-col gap-2 siavash',
		tablist: {
			base: 'flex text-center border-none',
			styles: {
				default: 'flex-wrap border-none',
				fullWidth:
					'grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400',
			},
			tabitem: {
				base: 'flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-1 focus:ring-cyan-100 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500',
			},
		},
	},
	footer: {
		root: {
			base: 'w-full rounded-lg bg-white dark:bg-gray-800 md:flex md:items-center md:justify-between',
		},
		groupLink: {
			link: {
				base: 'last:mr-0 mr-6 me-4 rtl:last:mr-6 rtl:last:ml-0',
			},
		},
		brand: {
			img: 'mr-3 h-8 rtl:mr-0 rtl:ml-3',
		},
	},
};

export default customTheme;
