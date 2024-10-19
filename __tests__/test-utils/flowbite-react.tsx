import React from 'react';

const Button = (props: any) => <button {...props} data-testid="button" />;
const Card = (props: any) => <div {...props} data-testid="card" />;
const Pagination = (props: any) => <div {...props} data-testid="pagination" />;
const TextInput = (props: any) => (
	<input {...props} data-testid="flatpickr-input" />
);

export const Tabs = {
	Group: ({ children }: { children: React.ReactNode }) => (
		<div>{children}</div>
	),
	Item: ({
		title,
		children,
	}: {
		title: string;
		children: React.ReactNode;
	}) => <div data-testid={`tab-${title.toLowerCase()}`}>{children}</div>,
};

const useTheme = jest.fn(() => ({})); // Mock useTheme to return an empty object

export { Button, Card, TextInput, Pagination, useTheme };
