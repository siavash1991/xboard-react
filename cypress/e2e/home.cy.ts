describe('Home Page Test', () => {
	it('Visits the home page', () => {
		// Visit the root URL of GitHub Pages
		cy.visit('https://siavash1991.github.io/xboard-react/#/');

		// Assert that the home page is loaded
		cy.contains('Dashboard');
	});
});
