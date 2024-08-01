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
		<ComponentWrapper className={className}>
			<XComponentHeader
				title="Basic Layout"
				subtitle="Default label"
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
							rightIcon={EnvelopeIcon}
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
							placeholder="546 699 8171"
						/>
					</div>
					<div className="max-w-md">
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
export default XBasicForm;
