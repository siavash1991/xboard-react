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
	});
});
