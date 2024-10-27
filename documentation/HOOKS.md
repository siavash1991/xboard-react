# Hooks Directory

The hooks directory contains custom React hooks that encapsulate specific functionalities to enhance code reusability and organization throughout the application.

## useActiveItem

The useActiveItem hook retrieves the current active route from the React Router's location object and updates whenever the pathname changes.

### Key Features:

Tracks the active item based on the current URL path.
Updates the active item state whenever the user navigates to a different route.

### Usage:

```typescript
import useActiveItem from '@hooks/useActiveItem';

const Navigation: React.FC = () => {
	const activeItem = useActiveItem();

	return (
		<nav>
			<ul>
				<li className={activeItem === '/home' ? 'active' : ''}>Home</li>
				<li className={activeItem === '/about' ? 'active' : ''}>
					About
				</li>
			</ul>
		</nav>
	);
};
```

## useClickOutside

The useClickOutside hook detects clicks outside of a specified element and executes a callback function when such clicks are detected.

### Key Features:

Takes a ref to the target element and a handler function.
Removes the event listener when the component is unmounted to prevent memory leaks.

### Usage:

```typescript
import React, { useRef } from 'react';
import useClickOutside from '@hooks/useClickOutside';

const Dropdown: React.FC = () => {
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleClose = () => {
		console.log('Clicked outside!');
	};

	useClickOutside(dropdownRef, handleClose);

	return <div ref={dropdownRef}>Dropdown Content</div>;
};
```

## useDirection

The useDirection hook returns the current text direction ('ltr' or 'rtl') based on the dir attribute of the document element.

### Key Features:

Automatically determines the text direction upon component mount.
Returns the direction value to be used in components for layout adjustments.

### Usage:

```typescript
import useDirection from '@hooks/useDirection';

const MyComponent: React.FC = () => {
	const direction = useDirection();

	return <div dir={direction}>Content goes here</div>;
};
```

## useTheme

The useTheme hook manages the application's theme state ('light', 'dark', or 'semi-dark') based on the classes applied to the document element.

### Key Features:

Detects the initial theme upon component mount.
Updates the theme state if changes are made to the theme classes on the document.

### Usage:

```typescript
import useTheme from '@hooks/useTheme';

const ThemeSwitcher: React.FC = () => {
	const theme = useTheme();

	return <div>Current Theme: {theme}</div>;
};
```
