import React from 'react';

const ReactSelectMock = (props: any) => {
	const handleChange = (selectedOption: any) => {
		if (props.onChange) {
			props.onChange(selectedOption);
		}
	};

	return (
		<select
			data-testid="react-select"
			id={props.id} // Add id prop to the select element
			value={props.value}
			onChange={(e) => handleChange(e.target.value)}
		>
			{props.options.map((option: { value: string; label: string }) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default ReactSelectMock;
