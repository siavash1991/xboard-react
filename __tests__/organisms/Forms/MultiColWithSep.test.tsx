import React from 'react';
import { render, screen } from '@testing-library/react';
import XMultiColWithSep from '@organisms/Forms/MultiColWithSep';

describe('XMultiColWithSep', () => {
	it('renders the form elements correctly', () => {
		render(<XMultiColWithSep />);

		expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
		expect(
			screen.getByLabelText('Password', { exact: true })
		).toBeInTheDocument();
		expect(
			screen.getByLabelText('Confirm Password', { exact: true })
		).toBeInTheDocument();
		expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Language/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Birth Date/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Phone No/i)).toBeInTheDocument();
	});

	it('renders the submit and cancel buttons', () => {
		render(<XMultiColWithSep />);

		expect(
			screen.getByRole('button', { name: /submit/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: /cancel/i })
		).toBeInTheDocument();
	});
});
