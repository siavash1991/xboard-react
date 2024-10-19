import React from 'react';
import { render, screen } from '@testing-library/react';
import XBreadcrumb from '@atoms/Breadcrumb';

describe('XBreadcrumb', () => {
	const items = [
		{ id: 1, label: 'Home', href: '/' },
		{ id: 2, label: 'Library', href: '/library' },
		{ id: 3, label: 'Data', href: '/library/data' },
	];

	it('renders without crashing', () => {
		render(<XBreadcrumb items={items} />);
		expect(screen.getByRole('navigation')).toBeInTheDocument();
	});

	it('renders the correct number of breadcrumb items', () => {
		render(<XBreadcrumb items={items} />);
		const breadcrumbItems = screen.getAllByRole('link');
		expect(breadcrumbItems.length).toBe(items.length);
	});

	it('displays the correct labels', () => {
		render(<XBreadcrumb items={items} />);
		items.forEach((item) => {
			expect(screen.getByText(item.label)).toBeInTheDocument();
		});
	});

	it('renders the breadcrumb with additional className', () => {
		render(<XBreadcrumb items={items} className="extra-class" />);
		const breadcrumbContainer = screen.getByRole('navigation'); // This should target the <nav> element
		expect(breadcrumbContainer).toHaveClass('extra-class');
	});
});
