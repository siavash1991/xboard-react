describe('Dark Mode Toggle Button', () => {
	it('Toggles dark mode when clicked', () => {
		// Visit the page containing the dark mode toggle button
		cy.visit('https://siavash1991.github.io/xboard-react/#/');

		// Verify that dark mode is initially disabled
		cy.get('html').should('not.have.class', 'dark');

		// Click on the dark mode toggle button
		cy.get('[data-testid=dark-theme-toggle]').click();

		// Verify that dark mode is enabled after clicking
		cy.get('html').should('have.class', 'dark');

		// Click on the dark mode toggle button again
		cy.get('[data-testid=dark-theme-toggle]').click();

		// Verify that dark mode is disabled after clicking again
		cy.get('html').should('not.have.class', 'dark');
	});

	it('Preserves dark mode state if set before the test', () => {
		// Set dark mode manually before visiting the page
		localStorage.setItem('color-theme', 'dark');

		// Visit the page containing the dark mode toggle button
		cy.visit('https://siavash1991.github.io/xboard-react/#/');

		// Verify that dark mode is enabled
		cy.get('html').should('have.class', 'dark');

		// Click on the dark mode toggle button
		cy.get('[data-testid=dark-theme-toggle]').click();

		// Verify that dark mode is disabled after clicking
		cy.get('html').should('not.have.class', 'dark');
	});
});
