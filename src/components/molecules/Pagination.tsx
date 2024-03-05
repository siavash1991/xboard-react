import React from 'react';
import { Pagination as FlowbitePagination } from 'flowbite-react';

interface XPaginationProps {
	totalItems: number;
	itemsPerPage: number;
	currentPage: number;
	onPageChange: (page: number) => void;
}

const XPagination: React.FC<XPaginationProps> = ({
	totalItems,
	itemsPerPage,
	currentPage,
	onPageChange,
}) => {
	return (
		<div className="col-span-12 flex items-center justify-center mt-2 mb-10">
			<FlowbitePagination
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
