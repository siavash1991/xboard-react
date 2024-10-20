import React, { useState } from 'react';
import { Label, Button, TextInput, Select } from 'flowbite-react';
import ComponentWrapper from '@atoms/ComponentWrapper';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';
import XFlatPickr from '@molecules/FlatPickr';
import useTheme from '@hooks/useTheme';
import reactSelectStyles from '@utils/reactSelectStyles';

import ReactSelect, { MultiValue, ActionMeta } from 'react-select';

interface XMultiColWithSepProps {
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

const XMultiColWithSep: React.FC<XMultiColWithSepProps> = ({
	className = '',
}) => {
	const currentTheme = useTheme();

	const [selectedLanguages, setSelectedLanguages] = useState<
		MultiValue<OptionType>
	>([]);
	const [birthDate, setBirthDate] = useState<Date | null>(null);

	const handleLanguageChange = (
		selectedOptions: MultiValue<OptionType>,
		_actionMeta: ActionMeta<OptionType>
	) => {
		setSelectedLanguages(selectedOptions);
	};

	return (
		<ComponentWrapper
			className={`col-span-12 break-inside-avoid $className`}
		>
			<XComponentHeader title="Multi Column with Form Separator" />
			<XComponentBody>
				<form className="space-y-6">
					<h6 className="text-gray-800 dark:text-white semi-dark:text-gray-200">
						1. Account Details
					</h6>
					<div className="grid md:grid-cols-2 gap-6 pb-7">
						<div>
							<Label
								htmlFor="multicol-username"
								value="Username"
							/>
							<TextInput
								id="multicol-username"
								type="text"
								placeholder="john.doe"
							/>
						</div>
						<div>
							<Label htmlFor="multicol-email" value="Email" />
							<div className="relative">
								<TextInput
									id="multicol-email"
									type="text"
									placeholder="john.doe"
									aria-describedby="multicol-email2"
								/>
								<span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-white semi-dark:text-gray-200">
									@example.com
								</span>
							</div>
						</div>
						<div>
							<Label
								htmlFor="multicol-password"
								value="Password"
							/>
							<div className="relative">
								<TextInput
									id="multicol-password"
									type="password"
									placeholder="············"
									aria-describedby="multicol-password2"
								/>
								<span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
									<i className="ti ti-eye-off"></i>
								</span>
							</div>
						</div>
						<div>
							<Label
								htmlFor="multicol-confirm-password"
								value="Confirm Password"
							/>
							<div className="relative">
								<TextInput
									id="multicol-confirm-password"
									type="password"
									placeholder="············"
									aria-describedby="multicol-confirm-password2"
								/>
								<span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
									<i className="ti ti-eye-off"></i>
								</span>
							</div>
						</div>
					</div>
					<hr className="dark:border-gray-600 semi-dark:border-gray-500 mx-n4" />
					<h6 className="text-gray-800 dark:text-white semi-dark:text-gray-200 pt-7">
						2. Personal Info
					</h6>
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<Label
								htmlFor="multicol-first-name"
								value="First Name"
							/>
							<TextInput
								id="multicol-first-name"
								type="text"
								placeholder="John"
							/>
						</div>
						<div>
							<Label
								htmlFor="multicol-last-name"
								value="Last Name"
							/>
							<TextInput
								id="multicol-last-name"
								type="text"
								placeholder="Doe"
							/>
						</div>
						<div>
							<Label htmlFor="multicol-country" value="Country" />
							<Select id="multicol-country">
								<option value="">Select</option>
								<option value="Australia">Australia</option>
								<option value="Bangladesh">Bangladesh</option>
								<option value="Belarus">Belarus</option>
								<option value="Brazil">Brazil</option>
								<option value="Canada">Canada</option>
								<option value="China">China</option>
								<option value="France">France</option>
								<option value="Germany">Germany</option>
								<option value="Iran">Iran</option>
								<option value="India">India</option>
								<option value="Indonesia">Indonesia</option>
								<option value="Israel">Israel</option>
								<option value="Italy">Italy</option>
								<option value="Japan">Japan</option>
								<option value="Korea">
									Korea, Republic of
								</option>
								<option value="Mexico">Mexico</option>
								<option value="Philippines">Philippines</option>
								<option value="Russia">
									Russian Federation
								</option>
								<option value="South Africa">
									South Africa
								</option>
								<option value="Thailand">Thailand</option>
								<option value="Turkey">Turkey</option>
								<option value="Ukraine">Ukraine</option>
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
						<div>
							<Label
								htmlFor="multicol-language"
								value="Language"
							/>
							<ReactSelect
								id="multicol-language"
								isMulti
								options={languageOptions}
								value={selectedLanguages}
								onChange={handleLanguageChange}
								placeholder="Select"
								className="block w-full rounded-lg"
								classNamePrefix="react-select"
								styles={reactSelectStyles(currentTheme)}
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
							<Label htmlFor="multicol-phone" value="Phone No" />
							<TextInput
								id="multicol-phone"
								type="text"
								placeholder="658 799 8941"
							/>
						</div>
					</div>
					<div className="pt-6 flex space-x-4 rtl:space-x-reverse">
						<Button type="submit" gradientDuoTone="greenToBlue">
							Submit
						</Button>
						<Button type="reset" color="gray" className="ml-4">
							Cancel
						</Button>
					</div>
				</form>
			</XComponentBody>
		</ComponentWrapper>
	);
};

export default XMultiColWithSep;
