import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { RootState } from '@redux/store';
import XUserSignUpForm from '@organisms/UserSignUpForm';

const mockStore = configureStore<RootState>();

describe('UserSignUpForm', () => {
	let store: any;

	it('renders the sign-in form with the correct fields', () => {
		const initialState = {
			authentication: {
				isLoading: false,
				error: null,
				username: '',
				token: '',
			},
			sidebar: {
				isSidebarOpen: false,
			},
			theme: {
				darkMode: false,
			},
		};
		store = mockStore(initialState);

		render(
			<Provider store={store}>
				<XUserSignUpForm />
			</Provider>
		);

		// Check if the form fields are rendered
		expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
		expect(screen.getByLabelText('Password:')).toBeInTheDocument();

		// Check if the submit button is rendered
		expect(
			screen.getByRole('button', { name: /Sign Up/i })
		).toBeInTheDocument();
	});
});
