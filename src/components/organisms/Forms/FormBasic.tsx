import React from 'react';
import { Label, Button, Textarea, TextInput } from 'flowbite-react';
import ComponentWrapper from '@atoms/ComponentWrapper';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import XComponentHeader from '@atoms/ComponentHeader';
import XComponentBody from '@atoms/ComponentBody';

interface XBasicFormProps {
	className?: string;
}

const XBasicForm: React.FC<XBasicFormProps> = ({ className = '' }) => {
	return (
		<ComponentWrapper
			className={`col-span-12 md:col-span-6 break-inside-avoid $className`}
		>
			<XComponentHeader
				title="Basic Layout"
				subtitle="Default label"
			></XComponentHeader>
			<XComponentBody>
				<form className="flex flex-col gap-4">
					<div>
						<div className="mb-2 block">
							<Label htmlFor="fullName" value="Full Name" />
						</div>
						<TextInput
							id="fullName"
							type="text"
							placeholder="John Doe"
							required
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="company" value="Company" />
						</div>
						<TextInput
							id="company"
							type="text"
							placeholder="ACME Inc."
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="email4" value="Email" />
						</div>
						<TextInput
							id="email4"
							type="email"
							rightIcon={EnvelopeIcon}
							placeholder="john.doe@xboard.com"
							required
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="phoneNo" value="Phone No" />
						</div>
						<TextInput
							id="phoneNo"
							type="tel"
							placeholder="546 699 8171"
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="message" value="Message" />
						</div>
						<Textarea
							id="message"
							placeholder="Hi, Do you have a moment to talk?"
							className="h-32"
						/>
					</div>
					<Button
						className="w-24"
						gradientDuoTone="greenToBlue"
						type="submit"
					>
						Submit
					</Button>
				</form>
			</XComponentBody>
		</ComponentWrapper>
	);
};
export default XBasicForm;
