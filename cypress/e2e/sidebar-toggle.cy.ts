describe('Sidebar Toggle in Mobile View', () => {
	beforeEach(() => {
		// Set viewport to mobile size
		cy.viewport('iphone-6');
		cy.visit('https://siavash1991.github.io/xboard-react/#/');
	});

	it('shows the hamburger icon when the sidebar is closed', () => {
		// Ensure the sidebar is initially closed
		cy.get('[data-testid=open-icon]').should('be.visible');
		cy.get('[data-testid=close-icon]').should('not.exist');
	});

	it('opens the sidebar when the toggle button is clicked', () => {
		// Wait for the sidebar toggle button to become available
		cy.get('[data-testid=open-icon]').click();

		// Ensure the close icon is visible and the hamburger icon is hidden
		cy.get('[data-testid=close-icon]').should('be.visible');
		cy.get('[data-testid=open-icon]').should('not.exist');

		// Ensure the sidebar overlay is visible
		cy.get('[data-testid=sidebar-overlay]').should('be.visible');
	});

	it('closes the sidebar when clicking on the overlay', () => {
		// Open the sidebar
		cy.get('[data-testid=open-icon]').click();

		// Click the overlay to close the sidebar
		cy.get('[data-testid=close-icon]').click();

		// Ensure the sidebar is closed and the hamburger icon is back
		cy.get('[data-testid=open-icon]').should('be.visible');
		cy.get('[data-testid=close-icon]').should('not.exist');
		cy.get('[data-testid=sidebar-overlay]').should('not.exist');
	});

	it('closes the sidebar when the Escape key is pressed', () => {
		// Open the sidebar
		cy.get('[data-testid=open-icon]').click();

		// Press the Escape key to close the sidebar
		cy.document().trigger('keydown', { key: 'Escape' });
		// Ensure the sidebar is closed
		cy.get('[data-testid=open-icon]').should('be.visible');
		cy.get('[data-testid=close-icon]').should('not.exist');
		cy.get('[data-testid=sidebar-overlay]').should('not.exist');
	});
});
