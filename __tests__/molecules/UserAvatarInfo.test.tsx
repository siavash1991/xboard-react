import React from 'react';
import { render, screen } from '@testing-library/react';
import XUserAvatarInfo from '@molecules/UserAvatarInfo';

describe('XUserAvatarInfo', () => {
	it('renders the user avatar and information', () => {
		render(<XUserAvatarInfo />);

		// Ensure the component renders the avatar and information
		expect(screen.getByTestId('user-avatar-info')).toBeInTheDocument();
		expect(screen.getByTestId('user-avatar')).toBeInTheDocument();
	});
});
