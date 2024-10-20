import React from 'react';
import { render, screen } from '@testing-library/react';
import XBasicWithIcon from '@organisms/Forms/BasicWithIcon';

describe('XBasicWithIcon', () => {
	it('renders the component header', () => {
		render(<XBasicWithIcon />);
		const componentHeader = screen.getByTestId('component-header');
		expect(componentHeader).toBeInTheDocument();
	});

	it('renders the component body', () => {
		render(<XBasicWithIcon />);
		const componentBody = screen.getByTestId('component-body');
		expect(componentBody).toBeInTheDocument();
	});

	it('renders the form inputs with correct labels', () => {
		render(<XBasicWithIcon />);
		const inputs = [
			{ id: 'fullName', label: 'Full Name' },
			{ id: 'company', label: 'Company' },
			{ id: 'email4', label: 'Email' },
			{ id: 'phoneNo', label: 'Phone No' },
			{ id: 'message', label: 'Message' },
		];

		inputs.forEach(({ id, label }) => {
			const inputLabel = screen.getByLabelText(label);
			expect(inputLabel).toBeInTheDocument();
		});
	});

	it('renders the submit button', () => {
		render(<XBasicWithIcon />);
		const submitButton = screen.getByRole('button', { name: /submit/i });
		expect(submitButton).toBeInTheDocument();
	});

	it('has the correct attributes for inputs', () => {
		render(<XBasicWithIcon />);
		const emailInput = screen.getByLabelText('Email');
		expect(emailInput).toHaveAttribute('type', 'email');
		expect(emailInput).toBeRequired();

		const fullNameInput = screen.getByLabelText('Full Name');
		expect(fullNameInput).toHaveAttribute('type', 'text');
		expect(fullNameInput).toBeRequired();

		const phoneInput = screen.getByLabelText('Phone No');
		expect(phoneInput).toHaveAttribute('type', 'tel');
	});
});
