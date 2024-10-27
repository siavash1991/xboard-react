# XBoard React

Welcome to XBoard React! This project is a React-based application designed to create reusable components and utilities for a seamless user experience.

## Table of Contents

-   [Installation](#installation)
-   [Usage Guide](#Usage-guide)

    -   [Component Names](#component-names)
    -   [Component Aliases](#component-aliases)
    -   [Components](#components)

-   [Shared Directory](#shared-directory)
-   [Templates Directory](#templates-directory)
-   [Hooks Directory](#hooks-directory)
-   [Utils Directory](#utils-directory)
-   [Tests](#tests)
-   [Contributing](#contributing)
-   [License](#license)

## Installation

To get started with this project, clone the repository and install the necessary dependencies:

```typescript
git clone https://github.com/siavash1991/xboard-react.git
cd xboard-react
npm install
```

## Usage Guide

This project contains several components that you can use throughout your application. To get started, import the desired component into your files.

### Component Names

To maintain clarity and consistency across our codebase, we follow specific naming conventions for components:

1. X Prefix for Custom Components:
   All custom components created for the Xboard will have the prefix X in their names when used in the code.
   This helps differentiate Xboard components from those provided by third-party libraries, such as Flowbite.

    Example:

    ```typescript
    import React from 'react';
    import XThemeToggle from './path/to/XThemeToggle';

    const App: React.FC = () => {
    	return <XThemeToggle className="my-custom-class" />;
    };
    ```

2. File Naming:

    The actual file names do not include the X prefix; they are named in a standard way to align with common practices.

    Example:
    File name: ThemeToggle.tsx
    Component usage: XThemeToggle

By following these conventions, we ensure that the components' purpose and origin are easily identifiable, enhancing code readability and maintainability.

### Component Aliases

To simplify the import process and improve code readability, we use TypeScript path aliases for our components. The following aliases are defined in the tsconfig.json file:

```typescript

"paths": {
    "@hooks/*": ["./hooks/*"],
    "@redux/*": ["./redux/*"],
    "@utils/*": ["./utils/*"],
    "@assets/*": ["./assets/*"],
    "@shared/*": ["./components/shared/*"],
    "@atoms/*": ["./components/atoms/*"],
    "@molecules/*": ["./components/molecules/*"],
    "@organisms/*": ["./components/organisms/*"],
    "@pages/*": ["./components/pages/*"],
    "@templates/*": ["./components/templates/*"]
}

```

#### Usage Example with Aliases

You can import components using their aliases as shown below:

```typescript
import XBreadcrumb from '@atoms/Breadcrumb';
import XChartDropdownMenu from '@molecules/ChartDropdownMenu';
```

### Components

#### XComponentWrapper

A wrapper component for styling your content.

```typescript
import XComponentWrapper from '@atoms/ComponentWrapper';

<XComponentWrapper>
	<p>Your content goes here</p>
</XComponentWrapper>;
```

#### XComponentHeader

A header component that displays a title, subtitle, and optional value and change percentage.

```typescript
import XComponentHeader from '@atoms/ComponentHeader';

<XComponentHeader
	title="Revenue"
	subtitle="Total Revenue"
	value="$78,000"
	changePercentage="+5%"
	isPositiveChange={true}
/>;
```

#### XComponentBody

A wrapper component for holding child components.

```typescript
import ComponentBody from '@atoms/ComponentBody';

<ComponentBody>
	<p>Your content goes here</p>
</ComponentBody>;
```

#### XBreadcrumb

A breadcrumb component for navigation.

```typescript
import XBreadcrumb from '@atoms/Breadcrumb';

const items = [
	{ href: '/home', label: 'Home', id: 1 },
	{ href: '/products', label: 'Products', id: 2 },
	{ label: 'Details', id: 3 },
];

<XBreadcrumb items={items} />;
```

#### For detailed usage instructions, please refer to the [Usage Guide](documentation/USAGE.md).

## Shared Directory

The shared directory contains utility functions and configurations that can be reused across different components and modules in the application.

### config.ts

This file serves as a centralized location for managing configuration settings for the application. It contains various configuration variables that can be accessed and utilized across different parts of the application, making it a valuable resource for future enhancements and scalability.

#### Key Features:

Defines environment-specific variables, such as API endpoints or feature flags.
Stores global configuration settings that are consistent across all environments.
Manages theme variables, third-party integrations, or testing configurations.

#### Benefits:

Centralizes management of configuration settings for easier maintenance.
Improves code organization and separation of concerns.
Enables dynamic configuration updates without modifying multiple files.
Facilitates future updates and expansions of the application by providing a single source of truth for configuration.

#### Usage:

```typescript
import config from '@shared/config';

// Access the base path
const basePath = config.basePath;
```

### For comprehensive instructions, please refer to the [Shared Dierectory](documentation/SHARED.md).

## Templates Directory

The templates directory contains layout components that provide consistent structure and styling across different parts of the application.

### AuthLayout.tsx

The AuthLayout component serves as a layout for authentication-related pages, providing a visually appealing background and a centered main content area.

#### Key Features:

Utilizes a gradient background for a modern appearance.
Renders any child components within a main content area.

#### Usage:

```typescript
import XAuthLayout from '@templates/AuthLayout';

const LoginPage: React.FC = () => {
	return <XAuthLayout>{/_ Authentication form goes here _/}</XAuthLayout>;
};
```

### BaseLayout.tsx

The BaseLayout component is designed for general application pages, incorporating a header, sidebar, breadcrumb navigation, and footer.

#### Key Features:

Supports dynamic breadcrumb navigation for easy user navigation.
Conditionally renders the sidebar based on application state.
Provides a responsive layout that adjusts to different screen sizes.

#### Usage:

```typescript
import XBaseLayout from '@templates/BaseLayout';

const SamplePage: React.FC = () => {
	return (
		<XBaseLayout pageTitle="Sample Page">
			{/* Main content for the sample page */}
		</XBaseLayout>
	);
};
```

## Hooks Directory

The hooks directory contains custom React hooks that encapsulate specific functionalities to enhance code reusability and organization throughout the application.

### For comprehensive instructions, please refer to the [Hooks Dierectory](documentation/HOOKS.md).

## Utils Directory

The utils directory contains utility functions and components that provide common functionality throughout the application, enhancing code reusability and organization.

### For comprehensive instructions, please refer to the [Utils Dierectory](documentation/UTILS.md).

## Tests

This project employs both Jest and Cypress to ensure robust testing across different aspects of the application.

### Jest

Jest is employed for unit and integration testing, with test files organized to mirror the structure of the components directory. All Jest test files are located in the **tests** directory, maintaining a consistent organization that corresponds to the main project structure, making it easy to locate tests for specific components.

#### Test File Structure:

Test files in **tests** are organized as subdirectories that match the component structure, ensuring a consistent and intuitive organization.

#### Test-Utils Directory:

To streamline testing and manage dependencies, a test-utils subdirectory is included in **tests**, providing mocks for common libraries and assets:

```markdown
Flowbite for UI components
ApexCharts for chart rendering
Chart.js for additional charting functionality
React Select for dropdowns and selectors
SVG images and style files to manage visual assets
File mocks for CSS and image imports
```

##### This setup enables focused, efficient component testing while handling third-party dependencies and static assets seamlessly.

#### To run the Jest tests, use the following command:

```bash
npm test

```

### Cypress

Cypress is used for end-to-end (E2E) testing, providing a robust environment to test user interactions and workflows across the application. All Cypress tests are organized within the cypress/e2e subdirectory, offering an intuitive layout for comprehensive testing of the app’s flows and functionality.

#### E2E Test Structure:

Cypress tests are placed in the cypress/e2e directory, structured to cover major user workflows and UI flows across various pages and components.

#### Automatic Waiting:

Cypress automatically waits for elements to appear, eliminating the need for manual waits or sleeps.

#### To run the Cypress tests, use the following command:

```bash
npm cypress open

```

##### By leveraging both Jest and Cypress, we ensure high code quality and a seamless user experience throughout the application.

## CI/CD

This project uses GitHub Actions to automate the CI/CD pipeline. The ci-cd.yml file configures the workflow as follows:

### Trigger:

Runs on pushes to the development branch (excluding gh-pages).

### Build and Deployment:

-   Installs dependencies and builds the project.
-   Deploys the build directory to the gh-pages branch using peaceiris/actions-gh-pages@v3, making the site accessible on GitHub Pages.

### Semantic Release:

Uses semantic-release to automate versioning and release notes, ensuring consistent, automated updates.

#### This setup streamlines the development workflow, so contributors only need to push changes to the development branch, and CI/CD handles the rest.

## Contributing

Thank you for your interest in contributing to XBoard React! Contributions are warmly welcomed, whether you’re fixing bugs, adding new features, or improving documentation.

### How to Contribute

#### 1. Fork the Repository:

Start by creating a fork of the XBoard React repository.

```bash
git clone https://github.com/siavash1991/xboard-react.git
cd xboard-react

```

#### 2. Create a Branch::

Create a new branch for your feature or fix. Use descriptive names to make the branch purpose clear.

```bash
git checkout -b feature/your-feature-name


```

#### 3. Make Your Changes:

Implement your feature or fix, keeping changes concise and aligned with the existing code structure. Ensure that your code follows the project’s naming and styling conventions.

#### 4. Write Tests:

If your change affects any component or feature, please write appropriate tests using Jest or Cypress, depending on the scope of your contribution.

#### 5. Run Tests:

Make sure all existing and new tests pass successfully.

```bash
npm test
npm cypress open


```

#### 6. Commit Your Changes with Commitizen:

XBoard React uses Commitizen to ensure standardized commit messages. Instead of generic terms like "feat," use descriptive phrases to make your changes clear.

```bash
npm run commit


```

#### 7. Push Your Branch:

Push the changes to your forked repository.

```bash
git push origin feature/your-feature-name

```

#### 8. Create a Pull Request:

Open a pull request (PR) to the main XBoard React repository. Include a detailed description of your changes, the problem they address, and any relevant information for the reviewers.

```bash
git push origin feature/your-feature-name

```

#### Guidelines

-   Follow the existing coding conventions, naming structures, and file organization.
-   Write or update documentation if necessary.
-   Ensure tests cover your changes, and all tests pass before submitting your pull request.
-   Respect code review feedback and make necessary adjustments.

## Contacts

For any inquiries or feedback, you can reach me at:

-   **Siavash Rahimi Azad**
-   [GitHub](https://github.com/siavash1991)
-   [LinkedIn](https://www.linkedin.com/in/siavash-rahimi-azad/)

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project. See the LICENSE file for the full license text.
