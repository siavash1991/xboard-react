import React, { useState } from 'react';
import { Label, Button, TextInput, Select } from 'flowbite-react';
import ReactSelect, {
	MultiValue,
	ActionMeta,
	StylesConfig,
} from 'react-select';

import ComponentWrapper from '@atoms/ComponentWrapper';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';
import { blue } from 'tailwindcss/colors';
import XFlatPickr from '@molecules/FlatPicker';

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

const customSelectStyles: StylesConfig<OptionType, true> = {
	indicatorsContainer: () => ({
		display: 'none',
	}),
	multiValueRemove: (base) => ({
		...base,
		backgroundColor: blue[100],
		borderTopRightRadius: '10px',
		borderBottomRightRadius: '10px',
		':hover': {
			backgroundColor: blue[300],
		},
		paddingRight: '5px',
	}),
	multiValue: (base) => ({
		...base,
		borderRadius: '10px',
		paddingLeft: '10px',
		backgroundColor: blue[100],
	}),
};

const XFormWithTabs: React.FC<XFormWithTabsProps> = ({ className = '' }) => {
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
		<ComponentWrapper className={className}>
			<XComponentHeader title="Multi Column with Form Separator" />
			<XComponentBody>
				<div className="nav-align-top flex space-x-2 mb-7 border-b-gray-300 border-b-2">
					<Button
						type="button"
						className={`nav-link rounded-b-none ${
							activeTab === 'personal'
								? 'bg-gray-200 hover:!bg-gray-200 text-gray-700 focus:ring-0 border-b-gray-300 border-b'
								: 'bg-gray-100 hover:!bg-gray-200 text-gray-500 border-b-4'
						}`}
						onClick={() => handleTabChange('personal')}
					>
						Personal Info
					</Button>
					<Button
						type="button"
						className={`nav-link rounded-b-none ${
							activeTab === 'account'
								? 'bg-gray-200 hover:!bg-gray-200 text-gray-700 focus:ring-0 border-b-gray-300 border-b'
								: 'bg-gray-100 hover:!bg-gray-200 text-gray-500 border-b-4'
						}`}
						onClick={() => handleTabChange('account')}
					>
						Account Details
					</Button>
					<Button
						type="button"
						className={`nav-link rounded-b-none ${
							activeTab === 'social'
								? 'bg-gray-200 hover:!bg-gray-200 text-gray-700 focus:ring-0 border-b-gray-300 border-b'
								: 'bg-gray-100 hover:!bg-gray-200 text-gray-500 border-b-4'
						}`}
						onClick={() => handleTabChange('social')}
					>
						Social Links
					</Button>
				</div>

				<div className="tab-content p-0">
					{activeTab === 'personal' && (
						<div
							className="tab-pane fade show active"
							role="tabpanel"
						>
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
											<option value="Australia">
												Australia
											</option>
											<option value="Bangladesh">
												Bangladesh
											</option>
											<option value="Belarus">
												Belarus
											</option>
											<option value="Brazil">
												Brazil
											</option>
											<option value="Canada">
												Canada
											</option>
											<option value="China">China</option>
											<option value="France">
												France
											</option>
											<option value="Germany">
												Germany
											</option>
											<option value="India">India</option>
											<option value="Indonesia">
												Indonesia
											</option>
											<option value="Israel">
												Israel
											</option>
											<option value="Italy">Italy</option>
											<option value="Japan">Japan</option>
											<option value="Korea">
												Korea, Republic of
											</option>
											<option value="Mexico">
												Mexico
											</option>
											<option value="Philippines">
												Philippines
											</option>
											<option value="Russia">
												Russian Federation
											</option>
											<option value="South Africa">
												South Africa
											</option>
											<option value="Thailand">
												Thailand
											</option>
											<option value="Turkey">
												Turkey
											</option>
											<option value="Ukraine">
												Ukraine
											</option>
											<option value="United Arab Emirates">
												United Arab Emirates
											</option>
											<option value="United Kingdom">
												United Kingdom
											</option>
											<option value="United States">
												United States
											</option>
										</Select>
									</div>
									<div className="col-md-6 select2-primary">
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
											className="mt-1 block w-full"
											classNamePrefix="react-select"
											styles={customSelectStyles}
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
											options={{
												dateFormat: 'Y-m-d',
											}}
											placeholder="YYYY - MM - DD"
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
								<div className="pt-6 flex space-x-4">
									<Button
										type="submit"
										gradientDuoTone="purpleToBlue"
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
												aria-describedby="formtabs-email2"
											/>
											<span className="absolute inset-y-0 right-0 flex items-center pr-3">
												@example.com
											</span>
										</div>
									</div>
									<div>
										<div className="relative">
											<Label
												htmlFor="formtabs-password"
												value="Password"
											/>
											<TextInput
												id="formtabs-password"
												type="password"
												placeholder="••••••••"
												aria-describedby="formtabs-password2"
											/>
										</div>
									</div>
									<div>
										<div className="relative">
											<Label
												htmlFor="formtabs-password-confirm"
												value="Confirm Password"
											/>
											<TextInput
												id="formtabs-password-confirm"
												type="password"
												placeholder="••••••••"
												aria-describedby="formtabs-password-confirm2"
											/>
										</div>
									</div>
								</div>
								<div className="pt-6 flex space-x-4">
									<Button
										type="submit"
										gradientDuoTone="purpleToBlue"
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
							<form className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<Label
											htmlFor="formtabs-facebook"
											value="Facebook URL"
										/>
										<TextInput
											id="formtabs-facebook"
											type="text"
											placeholder="https://facebook.com/yourprofile"
										/>
									</div>
									<div>
										<Label
											htmlFor="formtabs-twitter"
											value="Twitter URL"
										/>
										<TextInput
											id="formtabs-twitter"
											type="text"
											placeholder="https://twitter.com/yourprofile"
										/>
									</div>
									<div>
										<Label
											htmlFor="formtabs-linkedin"
											value="LinkedIn URL"
										/>
										<TextInput
											id="formtabs-linkedin"
											type="text"
											placeholder="https://linkedin.com/in/yourprofile"
										/>
									</div>
									<div>
										<Label
											htmlFor="formtabs-github"
											value="GitHub URL"
										/>
										<TextInput
											id="formtabs-github"
											type="text"
											placeholder="https://github.com/yourprofile"
										/>
									</div>
								</div>
								<div className="pt-6 flex space-x-4">
									<Button
										type="submit"
										gradientDuoTone="purpleToBlue"
									>
										Submit
									</Button>
									<Button type="reset" color="gray">
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
