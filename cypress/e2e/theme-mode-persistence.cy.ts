describe('Theme Mode Persistence Across Page Refresh', () => {
	it('should retain the selected theme mode after a page refresh', () => {
		// Set dark mode in local storage
		localStorage.setItem('color-theme', 'dark');

		// Visit the page containing the theme toggle button
		cy.visit('https://siavash1991.github.io/xboard-react/#/');

		// Verify that dark mode is enabled
		cy.get('html').should('have.class', 'dark');

		// Refresh the page
		cy.reload();

		// Verify that dark mode is still enabled after refresh
		cy.get('html').should('have.class', 'dark');

		// Change to light mode
		cy.get('[data-testid=theme-toggle-button]').click();
		cy.get('[data-testid=theme-button-light]').click();

		// Verify that light mode is now enabled
		cy.get('html').should('not.have.class', 'dark');

		// Refresh the page again
		cy.reload();

		// Verify that light mode is still enabled after refresh
		cy.get('html').should('not.have.class', 'dark');
	});
});
