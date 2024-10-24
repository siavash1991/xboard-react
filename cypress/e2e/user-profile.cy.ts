describe('User Profile Update', () => {
	beforeEach(() => {
		// Visit the user profile update page before each test
		cy.visit('https://siavash1991.github.io/xboard-react/#/user-profile');
	});

	it('should display the update profile form with pre-filled data', () => {
		cy.get('[data-testid=page-title]').should('contain', 'User Profile');

		cy.get('[data-testid=user-profile-form]').within(() => {
			cy.get('[data-testid=username-input]').should(
				'have.value',
				'exampleUsername'
			);
			cy.get('[data-testid=email-input]').should(
				'have.value',
				'example@email.com'
			);
		});
	});

	it('should update the profile successfully', () => {
		// Type new values into the form
		cy.get('[data-testid=username-input]').clear().type('newUsername');
		cy.get('[data-testid=email-input]').clear().type('new@example.com');
		cy.get('[data-testid=password-input]').type('Password123@');
		cy.get('[data-testid=confirm-password-input]').type('Password123@');

		// Submit the form
		cy.get('[data-testid=submit-button]').click();

		// Assert that the success message is displayed
		cy.get('[data-testid=success-message]').should(
			'contain',
			'Profile updated successfully'
		);
	});

	it('should handle form validation errors', () => {
		// Clear inputs to trigger validation errors
		cy.get('[data-testid=username-input]').clear();
		cy.get('[data-testid=email-input]').clear();

		// Attempt to submit the form
		cy.get('[data-testid=submit-button]').click();

		// Assert that validation error messages are displayed
		cy.get('[data-testid=username-input]').should(
			'have.attr',
			'aria-invalid',
			'true'
		);
		cy.get('[data-testid=email-input]').should(
			'have.attr',
			'aria-invalid',
			'true'
		);
		cy.get('[data-testid=username-error]').should(
			'contain',
			'Username is required'
		);
		cy.get('[data-testid=email-error]').should(
			'contain',
			'Email is required'
		);
	});
});
