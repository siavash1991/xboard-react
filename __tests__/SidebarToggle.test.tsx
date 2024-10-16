import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import XSidebarToggle from '@atoms/SidebarToggle';

// Define the state type for your Redux store
interface RootState {
	sidebar: {
		isSidebarOpen: boolean;
	};
}
const mockStore = configureStore<RootState>([]);

describe('XSidebarToggle', () => {
	let store: MockStoreEnhanced<RootState>;

	beforeEach(() => {
		// Create a store with initial state
		store = mockStore({
			sidebar: { isSidebarOpen: false },
		});
	});

	it('renders toggle button', () => {
		render(
			<Provider store={store}>
				<XSidebarToggle />
			</Provider>
		);

		const toggleButton = screen.getByRole('button', {
			name: /toggle sidebar/i,
		});
		expect(toggleButton).toBeInTheDocument();
		expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
	});

	it('toggles sidebar open state when button is clicked', () => {
		// Mock the store with sidebar open initially
		store = mockStore({
			sidebar: { isSidebarOpen: true },
		});

		render(
			<Provider store={store}>
				<XSidebarToggle />
			</Provider>
		);

		const toggleButton = screen.getByRole('button', {
			name: /toggle sidebar/i,
		});

		// Simulate button click
		fireEvent.click(toggleButton);
		const actions = store.getActions();

		// Check if the toggleSidebar action was dispatched
		expect(actions).toEqual([{ type: 'sidebar/toggleSidebar' }]);
	});
});
