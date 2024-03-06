describe('Sign Up Page', () => {
	beforeEach(() => {
		// Visit the sign-up page
		cy.visit('https://siavash1991.github.io/xboard-react/#/signin');
	});

	it('renders the sign-up form and sign-up link', () => {
		// Check if the logo is present
		cy.get('img').should('have.attr', 'alt', 'Your Logo');

		// Check if the heading is correct
		cy.contains('Welcome back!').should('be.visible');

		// Check if the form is rendered
		cy.get('form').should('exist');

		// Check if the sign-up link is present and has correct text and href
		cy.contains("Don't have an account?").should('be.visible');
		cy.contains('Sign up here').should('have.attr', 'href', '#/signup');
	});

	// Add more test cases as needed
});
