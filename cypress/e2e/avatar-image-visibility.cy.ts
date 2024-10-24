describe('Avatar Image Visibility', () => {
	beforeEach(() => {
		// Visit the page containing the avatar image
		cy.visit('https://siavash1991.github.io/xboard-react/#/');
	});

	it('hides the avatar image on small screens', () => {
		// Set the viewport to a small screen size (e.g., mobile)
		cy.viewport('iphone-6'); // You can also use specific width/height values

		// Check that the avatar image is not visible
		cy.get('[data-testid=user-avatar]').should('not.be.visible');
	});

	it('shows the avatar image on larger screens', () => {
		// Set the viewport to a larger screen size (e.g., desktop)
		cy.viewport('macbook-15');

		// Check that the avatar image is visible
		cy.get('[data-testid=user-avatar]').should('be.visible');
	});
});
