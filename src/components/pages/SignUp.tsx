import React from 'react';
import { Link } from 'react-router-dom';
import XAuthLayout from '@templates/AuthLayout';
import XUserSignUpForm from '@organisms/UserSignUpForm';

import useTheme from '@hooks/useTheme';
import getLogo from '@utils/getLogo';

const XSignUp: React.FC = () => {
	const currentTheme = useTheme();
	const logo = getLogo(currentTheme);
	return (
		<XAuthLayout>
			<div className="content-wrapper pt-20 flex flex-col items-center">
				<img
					src={logo}
					alt="Your Logo"
					className="mb-4 h-16 w-auto fill-black"
				/>

				<h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
					Welcome back!
				</h1>
				<p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
					Log in to your account to continue.
				</p>

				<div className="w-full max-w-md">
					<XUserSignUpForm />
				</div>

				<div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
					Don't have an account?{' '}
					<Link
						to="/signup"
						className="text-blue-500 hover:underline"
					>
						Sign up here
					</Link>
				</div>
			</div>
		</XAuthLayout>
	);
};

export default XSignUp;
