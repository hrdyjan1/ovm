import React from 'react';

const RadioButton = ({
	field: {
		name, value, onChange, onBlur,
	},
	id,
	label,
	...props
}) => (
	<div>
		<input
			name={name}
			id={id}
			type="radio"
			value={id}
			checked={id === value}
			onChange={onChange}
			onBlur={onBlur}
			{...props}
		/>
		<label htmlFor={id}>{label}</label>
	</div>
);

export default RadioButton;
