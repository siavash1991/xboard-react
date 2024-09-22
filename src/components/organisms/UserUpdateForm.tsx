import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserUpdateSchema } from '@assets/data/validationSchemas';

import {
	Card,
	Label,
	Avatar,
	TextInput,
	Button,
	FileInput,
} from 'flowbite-react';
import ComponentWrapper from 'components/atoms/ComponentWrapper';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';

interface UserUpdateFormProps {
	username: string;
	email: string;
	avatarUrl: string;
}

const XUserUpdateForm: React.FC<UserUpdateFormProps> = ({
	username,
	email,
	avatarUrl,
}) => {
	const [avatarPreview, setAvatarPreview] = useState(avatarUrl);
	const [isSuccess, setIsSuccess] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(UserUpdateSchema) as any,
	});

	const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
		// Process the form data (you may want to make an API call here)

		// Set the success state to true
		setIsSuccess(true);
	};
	interface FormData {
		email: string;
		username: string;
		file: File;
		password: string;
		confirmPassword: string;
	}
	const handleFileChange = (files: FileList | null) => {
		if (files && files.length > 0) {
			const fileReader = new FileReader();
			fileReader.onload = (e) => {
				const result = e.target?.result;
				if (typeof result === 'string') {
					setAvatarPreview(result);
				}
			};
			fileReader.readAsDataURL(files[0]);
		}
	};

	return (
		<div className="grid grid-cols-12 col-span-12 gap-4">
			<ComponentWrapper className="col-span-12 sm:col-span-8 md:col-span-7 lg:col-span-9 xl:col-span-6">
				<XComponentHeader title="Update Information"></XComponentHeader>
				<XComponentBody>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-4"
						data-testid="user-profile-form"
					>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="email" value="Your email" />
							</div>

							<TextInput
								id="email"
								type="email"
								placeholder="name@xboard.com"
								defaultValue={email}
								{...register('email')}
								helperText={
									<span
										data-testid="email-error"
										className="font-medium text-red-500"
									>
										{errors.email?.message}
									</span>
								}
								data-testid="email-input"
								aria-invalid={!!errors.email}
							/>
						</div>
						<div>
							<div className="mb-2 block">
								<Label
									htmlFor="username"
									value="Your username"
								/>
							</div>
							<TextInput
								id="username"
								type="text"
								placeholder="Your username"
								defaultValue={username}
								{...register('username')}
								helperText={
									<span
										data-testid="username-error"
										className="font-medium text-red-500"
									>
										{errors.username?.message}
									</span>
								}
								data-testid="username-input"
								aria-invalid={!!errors.username}
							/>
						</div>
						<div id="fileUpload">
							<div className="mb-2 block">
								<Label htmlFor="file" value="Upload Picture" />
							</div>
							<FileInput
								id="file"
								{...register('file')}
								onChange={(e) =>
									handleFileChange(e.target.files)
								}
							/>
							<div className="text-gray-500 dark:text-gray-200 semi-dark:text-gray-400 text-sm mt-1">
								A profile picture is useful to confirm you are
								logged into your account.
							</div>
							<Avatar
								img={avatarPreview}
								alt="Avatar Preview"
								className="float-end mt-2"
								data-testid="avatar-image"
							/>
						</div>
						<div>
							<div className="mb-2 block">
								<Label
									htmlFor="password"
									value="Your password"
								/>
							</div>
							<TextInput
								id="password"
								type="password"
								{...register('password')}
								data-testid="password-input"
								aria-invalid={!!errors.password}
							/>
						</div>
						<div>
							<div className="mb-2 block">
								<Label
									htmlFor="confirmPassword"
									value="Confirm password"
									data-testid="confirm-password-input"
								/>
							</div>
							<TextInput
								id="confirmPassword"
								type="password"
								{...register('confirmPassword')}
								aria-invalid={!!errors.confirmPassword}
							/>
						</div>
						<Button
							className="w-fit"
							type="submit"
							data-testid="submit-button"
							gradientDuoTone="greenToBlue"
						>
							Update Profile
						</Button>

						{/* Display success message if isSuccess is true */}
						{isSuccess && (
							<div
								data-testid="success-message"
								className="text-green-500 mt-4"
							>
								Profile updated successfully
							</div>
						)}
					</form>
				</XComponentBody>
			</ComponentWrapper>
			<Card className="bg-gray-200 dark:bg-gray-600 semi-dark:bg-gray-500 h-fit col-span-12 sm:col-span-4 md:col-span-5 lg:col-span-3 xl:col-span-6">
				<div className="-m-2">
					<h3 className="text-lg font-bold mb-2 dark:text-white">
						Actions
					</h3>
					<p className="dark:text-white">
						Explore new features, manage preferences, update your
						profile, and stay updated with our latest offerings.
					</p>
					<Button className="bg-slate-900 text-sky-200 my-4">
						Change Password
					</Button>
					<Button className="bg-red-400 dark:bg-red-600 text-gray-700 dark:text-sky-500 my-4">
						Delete Account
					</Button>
				</div>
			</Card>
		</div>
	);
};
export default XUserUpdateForm;
