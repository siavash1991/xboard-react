import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	type?: 'button' | 'submit';
}
const Button = ({ type = 'button', ...props }: ButtonProps) => (
	<button type={type} {...props} data-testid={`button-${type}`} />
);

const Card = (props: any) => <div {...props} data-testid="card" />;
const Pagination = (props: any) => <div {...props} data-testid="pagination" />;

const Checkbox = (props: any) => <div {...props} data-testid="checkbox" />;

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	type?: React.HTMLInputTypeAttribute;
}

const TextInput: React.FC<TextInputProps> = ({ type = 'text', ...props }) => (
	<input type={type} {...props} data-testid={`input-${type}`} />
);

interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	rows?: number;
}

const Textarea: React.FC<TextareaProps> = ({ rows = 3, ...props }) => (
	<textarea rows={rows} {...props} data-testid="textarea" />
);

interface LabelProps {
	value: string;
	htmlFor?: string; // Optional, if you want to support the htmlFor attribute
}

const Label: React.FC<LabelProps> = ({ value, ...props }) => (
	<label {...props} data-testid="label">
		{value}
	</label>
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

const Breadcrumb = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => (
	<nav aria-label="breadcrumb" className={className}>
		{children}
	</nav>
);
Breadcrumb.Item = ({
	href,
	children,
}: {
	href?: string;
	children: React.ReactNode;
}) => (
	<a href={href} data-testid={`breadcrumb-item-${href ?? 'no-href'}`}>
		{children}
	</a>
);

const useTheme = jest.fn(() => ({})); // Mock useTheme to return an empty object

export {
	Button,
	Card,
	TextInput,
	Textarea,
	Pagination,
	Tabs,
	Label,
	Checkbox,
	Breadcrumb,
	useTheme,
};
