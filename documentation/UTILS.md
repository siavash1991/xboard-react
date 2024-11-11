# Utils Directory

The utils directory contains utility functions and components that provide common functionality throughout the application, enhancing code reusability and organization.

## getLogo.ts

The getLogo function returns the appropriate logo based on the current theme (light or dark).

### Key Features:

Takes the theme (either 'light', 'dark', or 'semi-dark') as input.
Returns the corresponding logo based on the input theme.

### Usage:

The getLogo function is used to dynamically switch between logos based on the current theme in the application. It is often used in components that need to display a different logo depending on the theme (e.g., light, dark, or semi-dark modes).

## ratingStars.ts

The createRatingStars function generates an array of rating stars based on the total number of stars and the number of filled stars.

### Key Features:

Takes an object with totalStars and filledStars as input.
Returns an array of objects representing each star, with an id and a filled boolean indicating if the star is filled or not.

### Usage:

The useActiveItem hook retrieves the current active route from the React Router's location object and updates whenever the pathname changes.

## reactSelectStyles.ts

The reactSelectStyles function customizes the styles for the react-select component based on the current theme (light, dark, or semi-dark).

### Key Features:

Uses the getThemeColor utility function to retrieve theme-specific colors.
Provides custom styles for various parts of the react-select component, including the control, multi-value, and placeholder.

### Usage:

```typescript
import reactSelectStyles from '@utils/reactSelectStyles';

const customStyles = reactSelectStyles('dark');

// Use customStyles in your react-select component
<Select styles={customStyles} />;
```

## RedirectWithTrailingSlash.ts

The RedirectWithTrailingSlash component ensures that the current URL path ends with a trailing slash. If it doesn't, it redirects the user to the same path with a trailing slash appended.

### Key Features:

Uses React Router's useLocation hook to listen for changes in the URL.
Redirects the user to the updated URL if the pathname does not end with a slash.

### Usage:

```typescript
import RedirectWithTrailingSlash from '@utils/RedirectWithTrailingSlash';

const App: React.FC = () => {
	return (
		<>
			<RedirectWithTrailingSlash />
			{/* Other components */}
		</>
	);
};
```

## themeUtils.ts

The getThemeColor function retrieves colors based on the current theme mode (light, dark, or semi-dark). It allows for flexible theming throughout the application.

### Key Features:

Accepts a themeMode and a colorConfig object to determine the appropriate color to return.
Defaults to light mode and uses Tailwind CSS colors for easy integration.

### Usage:

```typescript
import { getThemeColor } from '@utils/themeUtils';

const backgroundColor = getThemeColor('semi-dark', {
	light: '#FFFFFF',
	semiDark: '#F3F4F6',
	dark: '#1F2937',
});

// Use backgroundColor in your styles
const style = { backgroundColor };
```
