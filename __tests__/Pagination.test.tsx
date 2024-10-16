import React from 'react';
import { render, screen } from '@testing-library/react';
import XPagination from '@atoms/Pagination';

describe('XPagination', () => {
	const mockOnPageChange = jest.fn();
	const totalItems = 100;
	const itemsPerPage = 10;

	it('should render pagination component correctly', () => {
		render(
			<XPagination
				totalItems={totalItems}
				itemsPerPage={itemsPerPage}
				currentPage={1}
				onPageChange={mockOnPageChange}
			/>
		);

		// Check if the pagination container is rendered
		expect(screen.getByTestId('pagination-container')).toBeInTheDocument();
		expect(screen.getByTestId('flowbite-pagination')).toBeInTheDocument();

		// Check if the correct number of pages is rendered
		expect(screen.getByText('Previous')).toBeInTheDocument();
		expect(screen.getByText('Next')).toBeInTheDocument();
	});

	it('should call onPageChange when a page is clicked', () => {
		render(
			<XPagination
				totalItems={totalItems}
				itemsPerPage={itemsPerPage}
				currentPage={1}
				onPageChange={mockOnPageChange}
			/>
		);

		// Simulate clicking on the next page
		const nextButton = screen.getByText('Next');
		nextButton.click();

		expect(mockOnPageChange).toHaveBeenCalledWith(2); // Assuming next page is 2
	});
});
