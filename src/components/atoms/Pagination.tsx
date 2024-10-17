import React from 'react';
import { Pagination } from 'flowbite-react';

interface XPaginationProps {
	totalItems: number;
	itemsPerPage: number;
	currentPage: number;
	onPageChange: (page: number) => void;
	className?: string;
}

const XPagination: React.FC<XPaginationProps> = ({
	totalItems,
	itemsPerPage,
	currentPage,
	onPageChange,
	className = '',
}) => {
	return (
		<div
			data-testid="pagination-container"
			className={`flex  items-center justify-center mt-2 mb-10 ${className}`}
		>
			<Pagination
				layout="pagination"
				currentPage={currentPage}
				totalPages={Math.ceil(totalItems / itemsPerPage)}
				onPageChange={onPageChange}
				previousLabel="Previous"
				nextLabel="Next"
				showIcons
				className="space-x-2"
			/>
		</div>
	);
};

export default XPagination;
