import { render, screen } from '@testing-library/react';
import XFormCard from '@organisms/Cards/FormCard';

describe('XFormCard', () => {
	it('should render the form card wrapper', () => {
		render(<XFormCard />);
		expect(screen.getByTestId('component-wrapper')).toBeInTheDocument();
	});

	it('should render the email input', () => {
		render(<XFormCard />);
		expect(screen.getByTestId('input-email')).toBeInTheDocument();
	});

	it('should render the password input', () => {
		render(<XFormCard />);
		expect(screen.getByTestId('input-password')).toBeInTheDocument();
	});

	it('should render the remember checkbox', () => {
		render(<XFormCard />);
		expect(screen.getByTestId('checkbox')).toBeInTheDocument();
	});

	it('should render the submit button', () => {
		render(<XFormCard />);
		expect(screen.getByTestId('button-submit')).toBeInTheDocument();
	});
});
