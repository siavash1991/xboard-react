import React from 'react';
import { Link } from 'react-router-dom';
import XAuthLayout from '@templates/AuthLayout';
import XUserSignInForm from '@organisms/UserSignInForm';

import Logo from '@assets/images/favicon.svg';

const XSignIn: React.FC = () => {
	return (
		<XAuthLayout>
			<div className="content-wrapper pt-20 flex flex-col items-center">
				<img src={Logo} alt="Your Logo" className="mb-4 h-16 w-auto" />

				<h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
					Welcome back!
				</h1>
				<p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
					Log in to your account to continue.
				</p>

				<div className="w-full max-w-md">
					<XUserSignInForm />
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

export default XSignIn;
