import { createSlice } from '@reduxjs/toolkit';

// Define RootState type for the entire Redux store
interface RootState {
	theme: {
		darkMode: boolean;
	};
	// Add other slices if applicable
}
export const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		darkMode: localStorage.getItem('darkMode') === 'true',
	},
	reducers: {
		toggleDarkMode: (state) => {
			const newMode = !state.darkMode;
			return { ...state, darkMode: newMode };
		},
	},
});

export const { toggleDarkMode } = themeSlice.actions;

// Add type information to the selectDarkMode selector
export const selectDarkMode = (state: RootState) => state.theme.darkMode;

export default themeSlice.reducer;
