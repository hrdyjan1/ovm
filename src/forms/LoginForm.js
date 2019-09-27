import React from 'react';
import { Formik, Form, Field } from 'formik';

// Form Components
import { TextField, Checkbox } from '../components/forms';
import { Button, Link } from '../components/ui';

// Constants
import {
	formValues, initialLogValues, handleEmail, handlePassword,
} from '../components/forms/Constants';

// Data
const { email, password, remember } = formValues;

export default function LoginForm() {
    console.log('asdsa');

	const handleSubmit = (values, { resetForm, setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			resetForm(initialLogValues);
			setSubmitting(false);
		}, 500);
	};

	const handleValidation = (values) => {
		const errors = {};

		// Email
		handleEmail(values.email, errors);

		// Passwords
		handlePassword(values.password, errors);

		return errors;
	};

	return (
		<div>
			<h1>Login</h1>
			<Formik
				initialValues={initialLogValues}
				validate={handleValidation}
				onSubmit={handleSubmit}
			>
				{({ submitForm, isSubmitting }) => (
					<Form>
						<div className="row">
							<div className="col">
								<TextField
									id={email.id}
									label={email.label}
									type={email.type}
									name={email.name}
									description={email.description}
								/>
							</div>
							<div className="col">
								<TextField
									id={password.id}
									label={password.label}
									type={password.type}
									name={password.name}
									description={password.description}
								/>
							</div>
							<div className="col">
								<Field
									component={Checkbox}
									id={remember.id}
									name={remember.name}
									label={remember.label}
								/>
							</div>
						</div>
						<Button label="Login" clickHandler={submitForm} disabled={isSubmitting} />                        
					</Form>
				)}
			</Formik>

			<br />

            {React.useMemo(() => <Link to="@" type="external" text="Forget a password" />, [])}

		</div>
	);
}
