describe('Users Page', () => {
	beforeEach(() => {
		// Visit the users page
		cy.visit('https://siavash1991.github.io/xboard-react/#/users');
	});

	it('renders the users table with correct data', () => {
		// Check if the heading is correct
		cy.contains('Users').should('be.visible');

		// Check if the users table is rendered
		cy.get('table').should('exist');

		// Check if the pagination component is loading
		cy.get('.pagination').should('exist');
	});
});
