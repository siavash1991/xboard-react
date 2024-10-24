describe('Theme Toggle Button', () => {
	it('Toggles dark mode when clicked', () => {
		// Visit the page containing the theme toggle button
		cy.visit('https://siavash1991.github.io/xboard-react/#/');

		// Verify that dark mode is initially disabled
		cy.get('html').should('not.have.class', 'dark');

		// Click on the theme toggle button
		cy.get('[data-testid=theme-toggle-button]').click();

		// Verify that the dropdown is opened
		cy.get('[data-testid=theme-dropdown]').should('be.visible');

		// Click on the dark theme option
		cy.get('[data-testid=theme-button-dark]').click();

		// Verify that dark mode is enabled after selecting dark theme
		cy.get('html').should('have.class', 'dark');

		// Click on the theme toggle button again
		cy.get('[data-testid=theme-toggle-button]').click();

		// Verify that the dropdown is opened
		cy.get('[data-testid=theme-dropdown]').should('be.visible');

		// Click on the light theme option
		cy.get('[data-testid=theme-button-light]').click();

		// Verify that dark mode is disabled after selecting light theme
		cy.get('html').should('not.have.class', 'dark');
	});

	it('Preserves dark mode state if set before the test', () => {
		// Set dark mode manually before visiting the page
		localStorage.setItem('color-theme', 'dark');

		// Visit the page containing the theme toggle button
		cy.visit('https://siavash1991.github.io/xboard-react/#/');

		// Verify that dark mode is enabled
		cy.get('html').should('have.class', 'dark');

		// Click on the theme toggle button
		cy.get('[data-testid=theme-toggle-button]').click();

		// Verify that the dropdown is opened
		cy.get('[data-testid=theme-dropdown]').should('be.visible');

		// Click on the light theme option
		cy.get('[data-testid=theme-button-light]').click();

		// Verify that dark mode is disabled after selecting light theme
		cy.get('html').should('not.have.class', 'dark');
	});
});
