import React, { useState } from 'react';
import { Label, Button, TextInput, Select } from 'flowbite-react';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';
import XFlatPickr from '@molecules/FlatPickr';
import useTheme from '@hooks/useTheme';
import reactSelectStyles from '@utils/reactSelectStyles';
import ReactSelect, { MultiValue, ActionMeta } from 'react-select';

interface XFormWithTabsProps {
	className?: string;
}

interface OptionType {
	value: string;
	label: string;
}

const languageOptions: OptionType[] = [
	{ value: 'english', label: 'English' },
	{ value: 'spanish', label: 'Spanish' },
	{ value: 'french', label: 'French' },
	{ value: 'german', label: 'German' },
];

const XFormWithTabs: React.FC<XFormWithTabsProps> = ({ className = '' }) => {
	const currentTheme = useTheme();
	const [selectedLanguages, setSelectedLanguages] = useState<
		MultiValue<OptionType>
	>([]);
	const [activeTab, setActiveTab] = useState<string>('personal');
	const [birthDate, setBirthDate] = useState<Date | null>(null);

	const handleLanguageChange = (
		selectedOptions: MultiValue<OptionType>,
		_actionMeta: ActionMeta<OptionType>
	) => {
		setSelectedLanguages(selectedOptions);
	};

	const handleTabChange = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<ComponentWrapper
			className={`col-span-12 break-inside-avoid ${className}`}
		>
			<XComponentHeader title="Form with Tabs" />
			<XComponentBody>
				<div className="nav-align-top flex space-x-2 mb-7 border-b-gray-500 border-b-2">
					{['personal', 'account', 'social'].map((tab) => {
						// Extracted the tab label logic
						const tabLabel = () => {
							switch (tab) {
								case 'personal':
									return 'Personal Info';
								case 'account':
									return 'Account Details';
								case 'social':
									return 'Social Links';
								default:
									return '';
							}
						};

						return (
							<Button
								key={tab}
								type="button"
								className={`nav-link rounded-b-none ${
									activeTab === tab
										? 'bg-gray-200 hover:!bg-gray-200 text-gray-700 focus:ring-0 border-b-gray-500 border-b dark:bg-gray-500 dark:hover:!bg-gray-400 dark:text-gray-400 dark:border-b-gray-500 semi-dark:bg-gray-500 semi-dark:hover:!bg-gray-400 semi-dark:text-gray-200 semi-dark:border-b-gray-500'
										: 'bg-gray-100 hover:!bg-gray-200 text-gray-500 border-b-4 dark:bg-gray-400 dark:hover:!bg-gray-200 dark:text-gray-500 semi-dark:bg-gray-400 semi-dark:hover:!bg-gray-200 semi-dark:text-gray-600'
								}`}
								onClick={() => handleTabChange(tab)}
							>
								{tabLabel()}
							</Button>
						);
					})}
				</div>

				<div className="tab-content p-0">
					{activeTab === 'personal' && (
						<div
							className="tab-pane fade show active"
							role="tabpanel"
						>
							{/* Personal Info Form */}
							<form className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<Label
											htmlFor="formtabs-first-name"
											value="First Name"
										/>
										<TextInput
											id="formtabs-first-name"
											type="text"
											placeholder="John"
										/>
									</div>
									<div>
										<Label
											htmlFor="formtabs-last-name"
											value="Last Name"
										/>
										<TextInput
											id="formtabs-last-name"
											type="text"
											placeholder="Doe"
										/>
									</div>
									<div>
										<Label
											htmlFor="formtabs-country"
											value="Country"
										/>
										<Select id="formtabs-country">
											<option value="">Select</option>
											{/* Add country options here */}
										</Select>
									</div>
									<div>
										<Label
											htmlFor="formtabs-language"
											value="Language"
										/>
										<ReactSelect
											id="formtabs-language"
											isMulti
											options={languageOptions}
											value={selectedLanguages}
											onChange={handleLanguageChange}
											placeholder="Select"
											className="mt-1 block w-full"
											classNamePrefix="react-select"
											styles={reactSelectStyles(
												currentTheme
											)}
										/>
									</div>
									<div>
										<Label
											htmlFor="multicol-birthdate"
											value="Birth Date"
										/>
										<XFlatPickr
											id="multicol-birthdate"
											value={birthDate}
											onChange={setBirthDate}
											options={{ dateFormat: 'Y-m-d' }}
											placeholder="YYYY-MM-DD"
										/>
									</div>
									<div>
										<Label
											htmlFor="formtabs-phone"
											value="Phone No"
										/>
										<TextInput
											id="formtabs-phone"
											type="text"
											placeholder="658 799 8941"
										/>
									</div>
								</div>
								<div className="pt-6 flex space-x-4 rtl:space-x-reverse">
									<Button
										type="submit"
										gradientDuoTone="greenToBlue"
									>
										Submit
									</Button>
									<Button
										type="reset"
										color="gray"
										className="ml-4"
									>
										Cancel
									</Button>
								</div>
							</form>
						</div>
					)}

					{activeTab === 'account' && (
						<div
							className="tab-pane fade show active"
							role="tabpanel"
						>
							{/* Account Details Form */}
							<form className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<Label
											htmlFor="formtabs-username"
											value="Username"
										/>
										<TextInput
											id="formtabs-username"
											type="text"
											placeholder="john.doe"
										/>
									</div>
									<div>
										<Label
											htmlFor="formtabs-email"
											value="Email"
										/>
										<div className="relative">
											<TextInput
												id="formtabs-email"
												type="text"
												placeholder="john.doe"
											/>
											<span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-white semi-dark:text-gray-200">
												@example.com
											</span>
										</div>
									</div>
									<div>
										<Label
											htmlFor="formtabs-password"
											value="Password"
										/>
										<TextInput
											id="formtabs-password"
											type="password"
											placeholder="••••••••"
										/>
									</div>
									<div>
										<Label
											htmlFor="formtabs-password-confirm"
											value="Confirm Password"
										/>
										<TextInput
											id="formtabs-password-confirm"
											type="password"
											placeholder="••••••••"
										/>
									</div>
								</div>
								<div className="pt-6 flex space-x-4 rtl:space-x-reverse">
									<Button
										type="submit"
										gradientDuoTone="greenToBlue"
									>
										Submit
									</Button>
									<Button
										type="reset"
										color="gray"
										className="ml-4"
									>
										Cancel
									</Button>
								</div>
							</form>
						</div>
					)}

					{activeTab === 'social' && (
						<div
							className="tab-pane fade show active"
							role="tabpanel"
						>
							{/* Social Links Form */}
							<form className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<Label
											htmlFor="formtabs-facebook"
											value="Facebook"
										/>
										<TextInput
											id="formtabs-facebook"
											type="text"
											placeholder="https://facebook.com/..."
										/>
									</div>
									<div>
										<Label
											htmlFor="formtabs-twitter"
											value="Twitter"
										/>
										<TextInput
											id="formtabs-twitter"
											type="text"
											placeholder="https://twitter.com/..."
										/>
									</div>
									<div>
										<Label
											htmlFor="formtabs-instagram"
											value="Instagram"
										/>
										<TextInput
											id="formtabs-instagram"
											type="text"
											placeholder="https://instagram.com/..."
										/>
									</div>
									<div>
										<Label
											htmlFor="formtabs-linkedin"
											value="LinkedIn"
										/>
										<TextInput
											id="formtabs-linkedin"
											type="text"
											placeholder="https://linkedin.com/..."
										/>
									</div>
								</div>
								<div className="pt-6 flex space-x-4 rtl:space-x-reverse">
									<Button
										type="submit"
										gradientDuoTone="greenToBlue"
									>
										Submit
									</Button>
									<Button
										type="reset"
										color="gray"
										className="ml-4"
									>
										Cancel
									</Button>
								</div>
							</form>
						</div>
					)}
				</div>
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XFormWithTabs;
