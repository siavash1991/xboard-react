import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import XBasicForm from '@organisms/Forms/FormBasic';

describe('XBasicForm', () => {
	it('renders form elements', () => {
		render(<XBasicForm />);

		expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/company/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/phone no/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: /submit/i })
		).toBeInTheDocument();
	});

	it('allows users to fill out the form', () => {
		render(<XBasicForm />);

		fireEvent.change(screen.getByLabelText(/full name/i), {
			target: { value: 'John Doe' },
		});
		fireEvent.change(screen.getByLabelText(/company/i), {
			target: { value: 'ACME Inc.' },
		});
		fireEvent.change(screen.getByLabelText(/email/i), {
			target: { value: 'john.doe@xboard.com' },
		});
		fireEvent.change(screen.getByLabelText(/phone no/i), {
			target: { value: '5466998171' },
		});
		fireEvent.change(screen.getByLabelText(/message/i), {
			target: { value: 'Hi, Do you have a moment to talk?' },
		});

		expect(screen.getByLabelText(/full name/i)).toHaveValue('John Doe');
		expect(screen.getByLabelText(/company/i)).toHaveValue('ACME Inc.');
		expect(screen.getByLabelText(/email/i)).toHaveValue(
			'john.doe@xboard.com'
		);
		expect(screen.getByLabelText(/phone no/i)).toHaveValue('5466998171');
		expect(screen.getByLabelText(/message/i)).toHaveValue(
			'Hi, Do you have a moment to talk?'
		);
	});
});
