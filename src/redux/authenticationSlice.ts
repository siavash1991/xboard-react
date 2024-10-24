import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Define interfaces for authentication state and error handling
interface AuthState {
	username: string | null;
	token: string | null;
	isLoading: boolean;
	error: AuthError | null;
}

interface AuthError {
	message: string;
}

interface AuthPayload {
	username: string;
	token: string;
}

const initialState: AuthState = {
	username: null,
	token: null,
	isLoading: false,
	error: null,
};

// Simulated API base URL
const API_BASE_URL = 'https://api.example.com';

// Thunk for login
export const login = createAsyncThunk<
	AuthPayload,
	{ username: string; password: string },
	{ rejectValue: AuthError }
>(
	'authentication/login',
	async ({ username, password }, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${API_BASE_URL}/login`, {
				username,
				password,
			});

			return { username, token: response.data.token };
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				return rejectWithValue({
					message: error.response.data.message || 'Login failed',
				});
			}

			return rejectWithValue({ message: 'An unexpected error occurred' });
		}
	}
);

// Thunk for signup
export const signup = createAsyncThunk<
	AuthPayload,
	{
		username: string;
		email: string;
		password: string;
		confirmPassword: string;
	},
	{ rejectValue: AuthError }
>(
	'authentication/signup',
	async (
		{ username, email, password, confirmPassword },
		{ rejectWithValue }
	) => {
		try {
			const response = await axios.post(`${API_BASE_URL}/signup`, {
				username,
				email,
				password,
				confirmPassword,
			});

			return { username, token: response.data.token };
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				return rejectWithValue({
					message: error.response.data.message || 'Signup failed',
				});
			}

			return rejectWithValue({ message: 'An unexpected error occurred' });
		}
	}
);

// Create a slice of the authentication state
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
			// Handle login
			.addCase(login.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(
				login.fulfilled,
				(state, action: PayloadAction<AuthPayload>) => {
					state.isLoading = false;
					state.username = action.payload.username;
					state.token = action.payload.token;
				}
			)
			.addCase(
				login.rejected,
				(state, action: PayloadAction<AuthError | undefined>) => {
					state.isLoading = false;
					state.error = action.payload || { message: 'Login failed' };
				}
			)

			// Handle signup
			.addCase(signup.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(
				signup.fulfilled,
				(state, action: PayloadAction<AuthPayload>) => {
					state.isLoading = false;
					state.username = action.payload.username;
					state.token = action.payload.token;
				}
			)
			.addCase(
				signup.rejected,
				(state, action: PayloadAction<AuthError | undefined>) => {
					state.isLoading = false;
					state.error = action.payload || {
						message: 'Signup failed',
					};
				}
			);
	},
});

export const { logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
