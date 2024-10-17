import React from 'react';
import '@testing-library/jest-dom';

global.matchMedia = jest.fn().mockImplementation((query) => ({
	matches: false,
	media: query,
	onchange: null,
	addListener: jest.fn(), // Deprecated
	removeListener: jest.fn(), // Deprecated
	addEventListener: jest.fn(),
	removeEventListener: jest.fn(),
	dispatchEvent: jest.fn(),
}));

jest.mock('flowbite-react', () => ({
	...jest.requireActual('flowbite-react'),
	Avatar: (props: any) => {
		return <div data-testid="user-avatar" {...props}></div>;
	},
}));
