// src/redux/authenticationSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
// import { RootState } from './store';

interface AuthState {
	username: string | null;
	token: string | null;
	isLoading: boolean;
	error: AuthError | null;
}

interface AuthError {
	message: string;
}

const initialState: AuthState = {
	username: null,
	token: null,
	isLoading: false,
	error: null,
};

// Simulated API base URL
const API_BASE_URL = 'https://api.example.com';

export const login = createAsyncThunk<
	{ username: string; token: string },
	{ username: string; password: string },
	{
		rejectValue: AuthError;
	}
>(
	'authentication/login',
	async ({ username, password }, { rejectWithValue }) => {
		try {
			// Simulate an API call using Axios
			const response = await axios.post(`${API_BASE_URL}/login`, {
				username,
				password,
			});

			return { username, token: response.data.token };
		} catch (error) {
			// Check if the error is of type AxiosError and has a response
			if (axios.isAxiosError(error) && error.response) {
				return Promise.reject(
					rejectWithValue({
						message: error.response.data.message || 'Login failed',
					})
				);
			}

			// Return a generic error if the above conditions are not met
			return Promise.reject(rejectWithValue({ message: 'Login failed' }));
		}
	}
);

export const signup = createAsyncThunk<
	{ username: string; token: string },
	{
		username: string;
		email: string;
		password: string;
		confirmPassword: string;
	},
	{
		rejectValue: AuthError;
	}
>(
	'authentication/signup',
	async (
		{ username, email, password, confirmPassword },
		{ rejectWithValue }
	) => {
		try {
			// Simulate an API call using Axios
			const response = await axios.post(`${API_BASE_URL}/signup`, {
				username,
				email,
				password,
				confirmPassword,
			});

			return { username, token: response.data.token };
		} catch (error) {
			// Check if the error is of type AxiosError and has a response
			if (axios.isAxiosError(error) && error.response) {
				return Promise.reject(
					rejectWithValue({
						message: error.response.data.message || 'Signup failed',
					})
				);
			}

			// Return a generic error if the above conditions are not met
			return Promise.reject(
				rejectWithValue({ message: 'Signup failed' })
			);
		}
	}
);

const authenticationSlice = createSlice({
	name: 'authentication',
	initialState,
	reducers: {
		logout(state) {
			state.username = null;
			state.token = null;
			state.error = null;
			state.isLoading = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(
				login.fulfilled,
				(
					state,
					action: PayloadAction<{ username: string; token: string }>
				) => {
					state.isLoading = false;
					state.username = action.payload.username;
					state.token = action.payload.token;
				}
			)
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload || { message: 'Login failed' };
			})
			.addCase(signup.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(
				signup.fulfilled,
				(
					state,
					action: PayloadAction<{ username: string; token: string }>
				) => {
					state.isLoading = false;
					state.username = action.payload.username;
					state.token = action.payload.token;
				}
			)
			.addCase(signup.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload || { message: 'Signup failed' };
			});
	},
});

export const { logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
