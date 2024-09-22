import React from 'react';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import ComponentWrapper from 'components/atoms/ComponentWrapper';
interface XFormCardProps {
	className?: string;
}
const XFormCard: React.FC<XFormCardProps> = ({ className = '' }) => {
	return (
		<ComponentWrapper className={className}>
			<Card href="#" className={`block ${className}`}>
				<form className="flex flex-col gap-4">
					<div>
						<div className="mb-2 block">
							<Label htmlFor="email1" value="Your email" />
						</div>
						<TextInput
							id="email1"
							type="email"
							placeholder="name@flowbite.com"
							required
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="password1" value="Your password" />
						</div>
						<TextInput id="password1" type="password" required />
					</div>
					<div className="flex items-center gap-2">
						<Checkbox id="remember" />
						<Label htmlFor="remember">Remember me</Label>
					</div>
					<Button type="submit">Submit</Button>
				</form>
			</Card>
		</ComponentWrapper>
	);
};
export default XFormCard;