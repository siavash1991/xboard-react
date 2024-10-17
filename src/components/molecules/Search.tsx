import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface XSearchProps {
	className?: string;
}

const XSearch: React.FC<XSearchProps> = ({ className = '' }) => {
	return (
		<div className={`search ${className}`} data-testid="search-container">
			<div className="relative">
				<input
					type="text"
					className="bg-component-light dark:bg-gray-600 placeholder-gray-400 text-gray-500 text-sm border-white dark:border-gray-700 h-8 w-full p-2 pl-3 pr-10 rounded-md focus:outline-none focus:ring-0 focus:border-neutral-200 hover:cursor-pointer"
					placeholder="Search"
					data-testid="search-input"
				/>
				<span
					className="absolute top-1.5 right-2 pl-2"
					data-testid="search-icon"
				>
					<MagnifyingGlassIcon className="hover:text-blue-500 hover:cursor-pointer h-5 w-5 text-gray-300" />
				</span>
			</div>
		</div>
	);
};

export default XSearch;
