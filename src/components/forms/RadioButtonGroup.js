import React from 'react';
import { Field } from 'formik';

import { RadioButton, ErrorFeedback } from './index';

const RadioButtonGroup = ({
	name, error, touched, label, data,
}) => (
	<React.Fragment>
		<legend>{label}</legend>
		{data && data.length > 0 && data.map((radio, index) => (
			<Field
				key={index}
				component={RadioButton}
				name={name}
				id={radio.id}
				label={radio.label}
			/>
		))}
		{touched && <ErrorFeedback error={error} />}
	</React.Fragment>
);

export default RadioButtonGroup;
