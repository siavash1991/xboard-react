import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface XSearchProps {
	className?: string;
}
const XSearch: React.FC<XSearchProps> = ({ className = '' }) => {
	return (
		<div className={`search mr-5 rtl:mr-0 rtl:ml-5 ${className}`}>
			<div className="relative">
				<input
					type="text"
					className="bg-inherit placeholder-gray-400 text-gray-500 text-sm border-none ring-4 ring-gray-200 dark:ring-gray-700 semi-dark:ring-gray-600 dark:border-gray-700 h-8 w-full p-2 pl-3 pr-10 rtl:pr-3 rtl:pl-10 rounded-md focus:outline-none focus:ring-4 focus:ring-white focus:border-neutral-200 hover:cursor-pointer"
					placeholder="Search"
				/>
				<span className="absolute top-1.5 right-2 pl-3 rtl:right-auto rtl:left-2 rtl:pl-0 rtl:pr-3">
					<MagnifyingGlassIcon className="hover:text-blue-500 hover:cursor-pointer h-5 w-5 text-gray-300" />
				</span>
			</div>
		</div>
	);
};

export default XSearch;
