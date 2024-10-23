import React from 'react';
import { render, screen } from '@testing-library/react';
import XHeader from '@organisms/Header';

// Mock the child components
jest.mock('@atoms/Search', () => () => <div data-testid="x-search" />);
jest.mock('@atoms/DirToggle', () => () => <div data-testid="x-dir-toggle" />);
jest.mock('@atoms/ThemeToggle', () => () => (
	<div data-testid="x-theme-toggle" />
));
jest.mock('@atoms/SidebarToggle', () => () => (
	<div data-testid="x-sidebar-toggle" />
));
jest.mock('@molecules/UserAvatarInfo', () => () => (
	<div data-testid="user-avatar-info" />
));

describe('XHeader', () => {
	beforeAll(() => {
		// Mock the implementation of window.alert for testing
		window.alert = jest.fn();
	});

	afterEach(() => {
		// Clear mocks after each test
		jest.clearAllMocks();
	});

	it('renders correctly with child components', () => {
		render(<XHeader />);

		// Check if the header and its child components are rendered
		expect(screen.getByTestId('x-search')).toBeInTheDocument();
		expect(screen.getByTestId('x-dir-toggle')).toBeInTheDocument();
		expect(screen.getByTestId('x-theme-toggle')).toBeInTheDocument();
		expect(screen.getByTestId('x-sidebar-toggle')).toBeInTheDocument();
	});
});
