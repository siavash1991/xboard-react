import * as yup from 'yup';

export const signUpSchema = yup.object({
	username: yup
		.string()
		.required('Username is required')
		.transform((value) => value?.toLowerCase())
		.matches(
			/^[a-zA-Z][a-zA-Z0-9]*$/,
			'Username must start with a letter and can only contain letters and numbers'
		),
	email: yup
		.string()
		.email()
		.required('Email is required')
		.matches(
			/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
			'Invalid email format'
		),
	password: yup
		.string()
		.required('Password is required')
		.min(8, 'Password must be at least 8 characters long')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
			'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
		),

	confirmPassword: yup
		.string()
		.required('Confirm Password is required')
		.oneOf([yup.ref('password'), ''], 'Passwords must match'),
});

export const signInSchema = yup.object({
	username: yup
		.string()
		.required('Username is required')
		.transform((value) => value?.toLowerCase())
		.matches(
			/^[a-zA-Z][a-zA-Z0-9]*$/,
			'Username must start with a letter and can only contain letters and numbers'
		),
	password: yup
		.string()
		.required('Password is required')
		.min(8, 'Password must be at least 8 characters long')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
			'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
		),
});

export const UserUpdateSchema = yup.object().shape({
	email: yup
		.string()
		.email()
		.required('Email is required')
		.matches(
			/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
			'Invalid email format'
		),
	username: yup
		.string()
		.required('Username is required')
		.transform((value) => value?.toLowerCase())
		.matches(
			/^[a-zA-Z][a-zA-Z0-9]*$/,
			'Username must start with a letter and can only contain letters and numbers'
		),
	password: yup
		.string()
		.required('Password is required')
		.min(8, 'Password must be at least 8 characters long')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
			'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
		),

	confirmPassword: yup
		.string()
		.required('Confirm Password is required')
		.oneOf([yup.ref('password'), ''], 'Passwords must match'),
});
