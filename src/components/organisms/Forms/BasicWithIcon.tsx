import React from 'react';
import { Label, Button, Textarea, TextInput } from 'flowbite-react';
import ComponentWrapper from '@atoms/ComponentWrapper';
import {
	EnvelopeIcon,
	UserIcon,
	BriefcaseIcon,
	PhoneIcon,
	ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';

interface XBasicWithIconProps {
	className?: string;
}

const XBasicWithIcon: React.FC<XBasicWithIconProps> = ({ className = '' }) => {
	return (
		<ComponentWrapper className={className}>
			<XComponentHeader
				title="Basic With Icons"
				subtitle="Merged input group"
			></XComponentHeader>
			<XComponentBody>
				<fieldset className="flex max-w-md flex-col gap-4">
					<div className="max-w-md">
						<div className="mb-2 block">
							<Label htmlFor="fullName" value="Full Name" />
						</div>
						<TextInput
							id="fullName"
							type="text"
							icon={UserIcon}
							placeholder="John Doe"
							required
						/>
					</div>
					<div className="max-w-md">
						<div className="mb-2 block">
							<Label htmlFor="company" value="Company" />
						</div>
						<TextInput
							id="company"
							type="text"
							icon={BriefcaseIcon}
							placeholder="ACME Inc."
						/>
					</div>
					<div className="max-w-md">
						<div className="mb-2 block">
							<Label htmlFor="email4" value="Email" />
						</div>
						<TextInput
							id="email4"
							type="email"
							icon={EnvelopeIcon}
							placeholder="john.doe@xboard.com"
							required
						/>
					</div>
					<div className="max-w-md">
						<div className="mb-2 block">
							<Label htmlFor="phoneNo" value="Phone No" />
						</div>
						<TextInput
							id="phoneNo"
							type="tel"
							icon={PhoneIcon}
							placeholder="546 699 8171"
						/>
					</div>
					<div className="max-w-md">
						<div className="mb-2 block">
							<Label htmlFor="message" value="Message" />
						</div>
						<div className="relative">
							<ChatBubbleLeftRightIcon className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
							<textarea
								id="message"
								placeholder="Hi, Do you have a moment to talk?"
								className="bg-inherit placeholder:text-gray-400 text-sm pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500 h-32"
							/>
						</div>
					</div>
					<Button
						className="w-24"
						gradientDuoTone="purpleToBlue"
						type="submit"
					>
						Submit
					</Button>
				</fieldset>
			</XComponentBody>
		</ComponentWrapper>
	);
};
export default XBasicWithIcon;
