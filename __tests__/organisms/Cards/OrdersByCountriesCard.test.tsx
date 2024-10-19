import React from 'react';
import { render, screen } from '@testing-library/react';
import XOrdersByCountriesCard from '@organisms/Cards/OrdersByCountries';

describe('XOrdersByCountriesCard', () => {
	it('should render component wrapper', () => {
		render(<XOrdersByCountriesCard />);
		expect(screen.getByTestId('component-wrapper')).toBeInTheDocument();
	});

	it('should render component header', () => {
		render(<XOrdersByCountriesCard />);
		expect(screen.getByTestId('component-header')).toBeInTheDocument();
	});

	it('should render tabs and default active tab (New)', () => {
		render(<XOrdersByCountriesCard />);
		expect(screen.getByTestId('tab-new')).toBeInTheDocument();
		expect(screen.getByTestId('new-orders')).toBeInTheDocument();
	});

	it('should render Preparing and Shipping tabs', () => {
		render(<XOrdersByCountriesCard />);
		expect(screen.getByTestId('tab-preparing')).toBeInTheDocument();
		expect(screen.getByTestId('tab-shipping')).toBeInTheDocument();
	});

	it('should display orders under New tab', () => {
		render(<XOrdersByCountriesCard />);
		expect(screen.getByTestId('new-orders')).toBeInTheDocument();
	});

	it('should render component body', () => {
		render(<XOrdersByCountriesCard />);
		expect(screen.getByTestId('component-body')).toBeInTheDocument();
	});
});
