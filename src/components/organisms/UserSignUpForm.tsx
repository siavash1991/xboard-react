import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signup } from '@redux/authenticationSlice';
import { AppDispatch, RootState } from '@redux/store';
import { signUpSchema } from '@assets/data/validationSchemas';
import ComponentWrapper from '@atoms/ComponentWrapper';

interface SignUpFormInputs {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const XUserSignUpForm: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { isLoading, error } = useSelector(
		(state: RootState) => state.authentication
	);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFormInputs>({
		resolver: yupResolver(signUpSchema),
	});

	const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
		dispatch(signup(data));
	};

	return (
		<ComponentWrapper>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="rounded-lg bg-white dark:bg-gray-800 semi-dark:bg-gray-700 space-y-6 p-10"
			>
				{error && typeof error === 'string' && (
					<div className="text-red-500">{error}</div>
				)}
				<div>
					<label
						htmlFor="username"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100 semi-dark:text-gray-100"
					>
						Username:
					</label>
					<input
						id="username"
						type="text"
						{...register('username')}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="Enter your username"
						required
					/>
					{errors?.username && (
						<div className="text-red-500">
							{errors.username.message}
						</div>
					)}
				</div>
				<div>
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100 semi-dark:text-gray-100"
					>
						Email:
					</label>
					<input
						id="email"
						type="email"
						{...register('email')}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="Enter your email"
						required
					/>
					{errors?.email && (
						<div className="text-red-500">
							{errors.email.message}
						</div>
					)}
				</div>
				<div>
					<label
						htmlFor="password"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100 semi-dark:text-gray-100"
					>
						Password:
					</label>
					<input
						id="password"
						type="password"
						{...register('password')}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="Enter your password"
						required
					/>
					{errors?.password && (
						<div className="text-red-500">
							{errors.password.message}
						</div>
					)}
				</div>
				<div>
					<label
						htmlFor="confirmPassword"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100 semi-dark:text-gray-100"
					>
						Confirm Password:
					</label>
					<input
						id="confirmPassword"
						type="password"
						{...register('confirmPassword')}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="Confirm your password"
						required
					/>
					{errors?.confirmPassword && (
						<div className="text-red-500">
							{errors.confirmPassword.message}
						</div>
					)}
				</div>
				<button
					type="submit"
					className={`w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
						isLoading ? 'opacity-50 cursor-not-allowed' : ''
					}`}
					disabled={isLoading}
				>
					{isLoading ? 'Signing up...' : 'Sign Up'}
				</button>
			</form>
		</ComponentWrapper>
	);
};

export default XUserSignUpForm;
