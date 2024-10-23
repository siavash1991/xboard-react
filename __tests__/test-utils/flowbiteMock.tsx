import React, { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	type?: 'button' | 'submit';
}
const Button = ({ type = 'button', ...props }: ButtonProps) => (
	<button type={type} {...props} data-testid={`button-${type}`} />
);

const Card = (props: any) => <div {...props} data-testid="card" />;

const Sidebar: React.FC<{ children: ReactNode }> & {
	Logo: React.FC<{ src: string; alt: string }>;
	Item: React.FC<{ children: ReactNode }>;
	ItemGroup: React.FC<{ children: ReactNode }>;
	Items: React.FC<{ children: ReactNode }>;
	CTA: React.FC<{ children: ReactNode }>;
	Collapse: React.FC<{ isOpen: boolean; children: ReactNode }>;
} = ({ children, ...props }) => (
	<aside {...props} data-testid="sidebar">
		{children}
	</aside>
);

Sidebar.Logo = ({ src, alt }: { src: string; alt: string }) => (
	<img src={src} alt={alt} data-testid="sidebar-logo" />
);

Sidebar.Item = ({ children }: { children: ReactNode }) => (
	<div data-testid="sidebar-item">{children}</div>
);

Sidebar.ItemGroup = ({ children }: { children: ReactNode }) => (
	<div data-testid="sidebar-item-group">{children}</div>
);

Sidebar.Items = ({ children }: { children: ReactNode }) => (
	<div data-testid="sidebar-items">{children}</div>
);

Sidebar.CTA = ({ children }: { children: ReactNode }) => (
	<div data-testid="sidebar-cta">{children}</div>
);
Sidebar.Collapse = ({
	isOpen,
	children,
}: {
	isOpen: boolean;
	children: ReactNode;
}) => (
	<div
		data-testid="sidebar-collapse"
		style={{ display: isOpen ? 'block' : 'none' }}
	>
		{children}
	</div>
);
const Badge = (props: any) => <div {...props} data-testid="Badge" />;
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

interface SelectOption {
	value: string;
	label: string;
}
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	options: SelectOption[];
}

const Select: React.FC<SelectProps> = ({ options = [], ...props }) => (
	<select {...props} data-testid="select">
		{options.map((option) => (
			<option key={option.value} value={option.value}>
				{option.label}
			</option>
		))}
	</select>
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

const Table: React.FC<{ children: ReactNode }> & {
	Head: React.FC<{ children: ReactNode }>;
	HeadCell: React.FC<{ children: ReactNode; className?: string }>;
	Body: React.FC<{ children: ReactNode }>;
	Row: React.FC<{ children: ReactNode }>;
	Cell: React.FC<{ children: ReactNode }>;
} = ({ children, ...props }) => (
	<table {...props} data-testid="project-table">
		{children}
	</table>
);

Table.Head = ({ children }: { children: ReactNode }) => (
	<thead data-testid="table-head">{children}</thead>
);

Table.HeadCell = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => (
	<th className={className} data-testid="table-head-cell">
		{children}
	</th>
);

Table.Body = ({ children }: { children: ReactNode }) => (
	<tbody data-testid="table-body">{children}</tbody>
);

Table.Row = ({ children }: { children: ReactNode }) => (
	<tr data-testid="table-row">{children}</tr>
);

Table.Cell = ({ children }: { children: ReactNode }) => (
	<td data-testid="table-cell">{children}</td>
);

const useTheme = jest.fn(() => ({})); // Mock useTheme to return an empty object

export {
	Sidebar,
	Badge,
	Button,
	Card,
	TextInput,
	Textarea,
	Pagination,
	Tabs,
	Label,
	Select,
	Checkbox,
	Breadcrumb,
	Table,
	useTheme,
};
