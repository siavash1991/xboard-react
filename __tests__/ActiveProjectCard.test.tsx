import React from 'react';
import { render, screen } from '@testing-library/react';
import { projects } from '@assets/data/projectsData';
import XActiveProjectCard from '@organisms/Cards/ActiveProject';

describe('XActiveProjectCard', () => {
	test('renders active project card', () => {
		render(<XActiveProjectCard />);

		// Check if the card is rendered
		expect(screen.getByTestId('component-wrapper')).toBeInTheDocument();

		// Check if the header is rendered
		expect(screen.getByTestId('component-header')).toBeInTheDocument();

		// Check if the project list is rendered
		expect(screen.getByTestId('active-project-list')).toBeInTheDocument();

		// Check for individual project items
		for (let i = 1; i <= 6; i++) {
			expect(screen.getByTestId(`project-item-${i}`)).toBeInTheDocument();
			expect(screen.getByTestId(`project-logo-${i}`)).toBeInTheDocument();
			expect(
				screen.getByTestId(`project-title-${i}`)
			).toBeInTheDocument();
			expect(
				screen.getByTestId(`project-subtitle-${i}`)
			).toBeInTheDocument();
			expect(
				screen.getByTestId(`project-progress-bar-${i}`)
			).toBeInTheDocument();
			expect(screen.getByTestId(`project-progress-${i}`)).toHaveStyle(
				`width: ${projects[i - 1].progress}%`
			);
			expect(
				screen.getByTestId(`project-progress-text-${i}`)
			).toHaveTextContent(`${projects[i - 1].progress}%`);
		}
	});
});
