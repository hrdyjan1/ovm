import React from 'react';
import { Formik, Form, Field } from 'formik';

// Form components
import { RadioButtonGroup, Checkbox, TextField } from '../components/forms';
import { Button } from '../components/ui';

// Constants
import {
	initialRegValues,
	formValues,
	handleEmail,
	handlePassword,
	handleConfPassword,
	handlePhoneMatch,
	handleFullName,
	handleAgree,
} from '../components/forms/Constants';

// Data
const {
	email, password, confPassword, phonenumber, fulllname, sex, agree,
} = formValues;

export default function RegistrationForm() {
	const handleSubmit = (values, { resetForm, setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			resetForm(initialRegValues);
			setSubmitting(false);
		}, 500);
	};

	const handleValidation = (values) => {
		const errors = {};

		// Email
		handleEmail(values.email, errors);

		// Passwords
		handlePassword(values.password, errors);

		// Confirm passwords
		handleConfPassword(values.password, values.confPassword, errors);

		// Phone Number
		handlePhoneMatch(values.phonenumber, errors);

		// Full Name
		handleFullName(values.fullname, errors);

		// Agree
		handleAgree(values.agree, errors);

		return errors;
	};

	return (
		<div>
			<h1>Registration</h1>
			<Formik
				initialValues={initialRegValues}
				validate={handleValidation}
				onSubmit={handleSubmit}
			>

				{({
					isSubmitting, errors, touched, submitForm,
				}) => (
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
								<TextField
									id={confPassword.id}
									label={confPassword.label}
									type={confPassword.type}
									name={confPassword.name}
									description={confPassword.description}
								/>
							</div>
							<div className="col">
								<TextField
									id={phonenumber.id}
									label={phonenumber.label}
									type={phonenumber.type}
									name={phonenumber.name}
									description={phonenumber.description}
								/>
							</div>
							<div className="col">
								<TextField
									id={fulllname.id}
									label={fulllname.label}
									type={fulllname.type}
									name={fulllname.name}
									description={fulllname.description}
								/>
							</div>
							<div className="col">
								<RadioButtonGroup
									id={sex.id}
									name={sex.name}
									label={sex.label}
									error={errors.sex}
									touched={touched.sex}
									data={sex.data}
								/>
							</div>
							<div className="col">
								<Field
									component={Checkbox}
									id={agree.id}
									name={agree.name}
									label={agree.label}
								/>
							</div>
						</div>
						<Button label="Register" clickHandler={submitForm} disabled={isSubmitting} />
					</Form>
				)}
			</Formik>

		</div>
	);
}
