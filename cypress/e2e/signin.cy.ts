describe('User Sign-In Form', () => {
	beforeEach(() => {
		// Visit the page containing the sign-in form
		cy.visit('https://siavash1991.github.io/xboard-react/#/signin');
	});

	it('Allows user to sign in with valid credentials', () => {
		// Fill in the username and password fields
		cy.get('#username').type('testuser');
		cy.get('#password').type('$YeqDw5xSPF7@g6');

		// Submit the form
		cy.get('form').submit();

		// Verify that the form submission is successful (e.g., no error message is displayed)
		cy.get('.text-red-500').should('not.exist');
		// Add more assertions as needed to verify the user is logged in successfully
	});

	it('Displays error message for invalid credentials', () => {
		// Fill in the username and password fields with invalid credentials
		cy.get('#username').type('User@22');
		cy.get('#password').type('123456');

		// Submit the form
		cy.get('form').submit();

		// Verify that the error message is displayed
		cy.get('.text-red-500').should(
			'contain',
			'Username must start with a letter and can only contain letters and numbers'
		);
		cy.get('.text-red-500').should(
			'contain',
			'Password must be at least 8 characters long'
		);

		// Add more assertions as needed to verify the error message behavior
	});
});
