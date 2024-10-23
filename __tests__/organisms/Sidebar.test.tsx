import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import XSidebar from '@organisms/Sidebar';
import useActiveItem from '@hooks/useActiveItem';
import { withBasePath } from '@shared/basePathHelper';

// Define your RootState interface
export interface RootState {
	sidebar: {
		isOpen: boolean;
	};
}

// Create a mock store
const mockStore = configureStore<RootState>([]);

// Mock hooks and base path helper
jest.mock('@hooks/useActiveItem'); // Mock the useActiveItem hook
jest.mock('@shared/basePathHelper'); // Mock the base path helper

describe('XSidebar', () => {
	let store: MockStoreEnhanced<RootState>; // Define the store type

	beforeEach(() => {
		// Initialize the store before each test
		store = mockStore({
			sidebar: { isOpen: true }, // Mock the initial state
		});

		// Set up mocks for hooks
		(withBasePath as jest.Mock).mockReturnValue('');
		(useActiveItem as jest.Mock).mockReturnValue('/');
	});

	test('renders sidebar with logo', () => {
		render(
			<Provider store={store}>
				<XSidebar />
			</Provider>
		);

		// Check if the logo is rendered
		expect(screen.getByTestId('sidebar-logo')).toBeInTheDocument();
	});
});
