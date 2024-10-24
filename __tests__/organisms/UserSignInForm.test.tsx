import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { RootState } from '@redux/store';
import UserSignInForm from '@organisms/UserSignInForm';

const mockStore = configureStore<RootState>();

describe('UserSignInForm', () => {
	let store: any;

	it('displays an error message when error exists in state', () => {
		const errorState = {
			authentication: {
				isLoading: false,
				error: { message: 'Invalid credentials' },
				username: 'testUser',
				token: 'fakeToken123',
			},
			sidebar: {
				isSidebarOpen: false,
			},
			theme: {
				darkMode: false,
			},
		};
		store = mockStore(errorState);

		render(
			<Provider store={store}>
				<UserSignInForm />
			</Provider>
		);

		expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument();
	});
});
