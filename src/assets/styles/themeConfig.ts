import { type CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
	breadcrumb: {
		item: {
			chevron:
				'mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2  rtl:rotate-180',
			href: {
				off: 'flex items-center text-sm font-medium text-gray-400 dark:text-gray-2',
				on: 'flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white dark:text-gray-100 semi-dark:text-gray-300',
			},
			icon: 'mr-2 h-4 w-4 rtl:rotate-180',
		},
	},
	table: {
		root: {
			base: 'w-full text-left rtl:text-right text-sm text-gray-800 dark:text-gray-300 semi-dark:text-gray-200 overflow-hidden rounded-lg',
			shadow: 'absolute ',
			wrapper: 'relative',
		},
		head: {
			base: 'text-gray-700 dark:text-gray-200 semi-dark:text-gray-300 bg-gray-50 dark:bg-gray-700 semi-dark:bg-gray-600',
			cell: {
				base: 'px-6 py-3',
			},
		},
		row: {
			hovered: 'hover:bg-gray-50 dark:hover:bg-gray-600',
			striped:
				'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 odd:semi-dark:bg-gray-700 even:semi-dark:bg-gray-600',
		},
	},
	pagination: {
		pages: {
			previous: {
				base: 'ml-0 rounded-l-lg rtl:rounded-l-none rtl:rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-normal text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white semi-dark:border-gray-500 semi-dark:bg-gray-500 semi-dark:text-gray-100 enabled:semi-dark:hover:bg-gray-500 enabled:semi-dark:hover:text-white',
				icon: 'h-5 w-5 rtl:rotate-180 mt-1',
			},
			next: {
				base: 'rounded-r-lg rtl:rounded-r-none rtl:rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-normal text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white semi-dark:border-gray-500 semi-dark:bg-gray-500 semi-dark:text-gray-100 enabled:semi-dark:hover:bg-gray-500 enabled:semi-dark:hover:text-white ',
				icon: 'h-5 w-5 rtl:rotate-180 mt-1',
			},
			selector: {
				base: 'w-12 border border-gray-300 bg-white py-2 leading-normal text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white semi-dark:border-gray-600 semi-dark:bg-gray-600 semi-dark:text-gray-400 enabled:semi-dark:hover:bg-gray-700 enabled:semi-dark:hover:text-white',
			},
		},
	},
	card: {
		root: {
			base: 'flex h-full rounded-lg',
			children: 'flex flex-col justify-center gap-4 p-10 ',
			horizontal: {
				off: 'flex-col',
				on: 'flex-col md:flex-row',
			},
			href: 'hover:bg-white dark:hover:bg-gray-700 semi-dark:hover:bg-gray-700',
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
			inner: 'bg-blue-800 dark:bg-gray-800 semi-dark:bg-gray-700 h-full overflow-y-auto overflow-x-hidden py-4 px-3',
		},
		item: {
			base: 'relative my-1 flex items-center justify-center rounded-md p-2 text-sm font-normal text-sky-200 hover:transition-all duration-300 hover:bg-gray-800 dark:text-white dark:hover:bg-gray-700',
			active: 'active-item bg-gray-100 dark:bg-gray-700  semi-dark:bg-gray-300 text-gray-800 hover:text-sky-200',
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
				off: 'self-center whitespace-nowrap text-3xl font-bold text-sky-200 dark:text-white',
			},
			img: 'mr-3 w-10 sm:w-7',
		},
	},
	avatar: {
		root: {
			base: 'flex items-center justify-center space-x-4 rounded-lg',
		},
	},

	tab: {
		base: 'flex flex-col gap-2',
		tablist: {
			base: 'flex text-center border-none',
			styles: {
				default:
					'flex-wrap border-none flex-row flex-nowrap items-center justify-center',
				fullWidth:
					'grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400',
			},
			tabitem: {
				base: 'flex flex-1 flex-grow border-b border-blue-50 items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-1 focus:ring-cyan-100 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500',
				styles: {
					default: {
						base: 'rounded-t-lg',
						active: {
							on: 'bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500',
							off: 'text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300',
						},
					},
				},
			},
		},
	},
	fileInput: {
		root: {
			base: 'flex',
		},
		field: {
			input: {
				colors: {
					gray: 'border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 semi-dark:border-gray-500 semi-dark:bg-gray-600 semi-dark:text-white semi-dark:placeholder-gray-300 semi-dark:focus:border-cyan-400 semi-dark:focus:ring-cyan-400',
				},
			},
		},
	},
	textInput: {
		field: {
			base: 'relative w-full',
			icon: {
				base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
				svg: 'h-5 w-5 text-gray-500 dark:text-gray-400',
			},
			rightIcon: {
				base: 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3',
				svg: 'h-5 w-5 text-gray-500 dark:text-gray-400',
			},
			input: {
				base: 'bg-gray-200 block w-full border disabled:cursor-not-allowed disabled:opacity-50',
				colors: {
					gray: 'border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 semi-dark:border-gray-500 semi-dark:bg-gray-600 semi-dark:text-gray-300 semi-dark:placeholder-gray-400 semi-dark:focus:border-cyan-400 semi-dark:focus:ring-cyan-400',
				},
			},
		},
	},
	label: {
		root: {
			base: 'text-sm font-medium',
			disabled: 'opacity-50',
			colors: {
				default:
					'text-gray-900 dark:text-white semi-dark:text-gray-300',
				info: 'text-cyan-500 dark:text-cyan-600',
				failure: 'text-red-700 dark:text-red-500',
				warning: 'text-yellow-500 dark:text-yellow-600',
				success: 'text-green-700 dark:text-green-500',
			},
		},
	},
	textarea: {
		colors: {
			gray: 'border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 semi-dark:border-gray-500 semi-dark:bg-gray-600 semi-dark:text-white semi-dark:placeholder-gray-300 semi-dark:focus:border-cyan-500 semi-dark:focus:ring-cyan-500',
		},
		withShadow: {
			on: 'shadow-sm dark:shadow-sm-light semi-dark:shadow-sm-light',
		},
	},
	select: {
		base: 'flex',
		addon: 'inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400',
		field: {
			base: 'relative w-full',
			icon: {
				base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
				svg: 'h-5 w-5 text-gray-500 dark:text-gray-400',
			},
			select: {
				base: 'block w-full border disabled:cursor-not-allowed disabled:opacity-50',
				withIcon: {
					on: 'pl-10',
					off: '',
				},
				withAddon: {
					on: 'rounded-r-lg',
					off: 'rounded-lg',
				},
				withShadow: {
					on: 'shadow-sm dark:shadow-sm-light',
					off: '',
				},
				sizes: {
					sm: 'p-2 sm:text-xs',
					md: 'p-2.5 text-sm',
					lg: 'p-4 sm:text-base',
				},
				colors: {
					gray: 'border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 semi-dark:border-gray-500 semi-dark:bg-gray-600 semi-dark:text-white semi-dark:placeholder-gray-800 semi-dark:focus:border-cyan-500 semi-dark:focus:ring-cyan-500',
					info: 'border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
					failure:
						'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
					warning:
						'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
					success:
						'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',
				},
			},
		},
	},

	footer: {
		root: {
			base: 'w-full rounded-lg bg-white dark:bg-gray-700 semi-dark:bg-gray-600 md:flex md:items-center md:justify-between',
		},
		groupLink: {
			link: {
				base: 'dark:text-white semi-dark:text-white last:mr-0 mr-6 me-4 rtl:last:mr-6 rtl:last:ml-0',
			},
		},
		brand: {
			img: 'mr-3 h-8 rtl:mr-0 rtl:ml-3',
			span: 'dark:text-white semi-dark:text-white self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white',
		},
	},
};

export default customTheme;
