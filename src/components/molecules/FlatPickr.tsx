import React, { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { TextInput } from 'flowbite-react';

interface XFlatPickrProps {
	id?: string;
	value: Date | null;
	onChange: (date: Date | null) => void;
	options?: flatpickr.Options.Options;
	placeholder?: string;
	className?: string;
}

const XFlatPickr: React.FC<XFlatPickrProps> = ({
	id,
	value,
	onChange,
	options = {},
	placeholder = 'Select Date',
	className = '',
}) => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		if (inputRef.current) {
			const picker = flatpickr(inputRef.current, {
				...options,
				defaultDate: value ? value.toISOString() : '',
				onChange: (selectedDates) => {
					onChange(selectedDates[0] || null);
				},
			});

			return () => {
				picker.destroy();
			};
		}
	}, [options, value, onChange]);

	return (
		<TextInput
			id={id}
			ref={inputRef}
			type="text"
			placeholder={placeholder}
			className={`form-input ${className}`}
		/>
	);
};

export default XFlatPickr;
