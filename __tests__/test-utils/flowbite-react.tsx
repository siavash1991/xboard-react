import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	type?: 'button' | 'submit';
}
const Button = ({ type = 'button', ...props }: ButtonProps) => (
	<button type={type} {...props} data-testid={`button-${type}`} />
);

const Card = (props: any) => <div {...props} data-testid="card" />;
const Pagination = (props: any) => <div {...props} data-testid="pagination" />;
const Label = (props: any) => <div {...props} data-testid="label" />;
const Checkbox = (props: any) => <div {...props} data-testid="checkbox" />;

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	type?: React.HTMLInputTypeAttribute;
}

const TextInput: React.FC<TextInputProps> = ({ type = 'text', ...props }) => (
	<input type={type} {...props} data-testid={`input-${type}`} />
);

const Tabs = {
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

export { Button, Card, TextInput, Pagination, Tabs, Label, Checkbox, useTheme };
