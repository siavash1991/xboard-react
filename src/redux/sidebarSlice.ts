import { createSlice } from '@reduxjs/toolkit';

interface SidebarState {
	isSidebarOpen: boolean;
}

const initialState: SidebarState = {
	isSidebarOpen: false,
};

const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		toggleSidebar(state) {
			state.isSidebarOpen = !state.isSidebarOpen;
		},
		openSidebar(state) {
			state.isSidebarOpen = true;
		},
		closeSidebar(state) {
			state.isSidebarOpen = false;
		},
	},
});

export const { toggleSidebar, openSidebar, closeSidebar } =
	sidebarSlice.actions;

export default sidebarSlice.reducer;
