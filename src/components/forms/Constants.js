/* eslint-disable no-param-reassign */
const confPassword = 'confPassword';
const password = 'password';
const email = 'email';
const phonenumber = 'phonenumber';
const fullname = 'fullname';
const sex = 'sex';
const agree = 'agree';
const remember = 'remember';

// Sex
const primarySex = { id: 'man', label: 'Man' };
const secondarySex = { id: 'woman', label: 'Woman' };

// Registration, Login initial values
export const initialRegValues = {
	[email]: '', [password]: '', [confPassword]: '', [phonenumber]: '', [fullname]: '', [sex]: primarySex.id, [agree]: false,
};
export const initialLogValues = { [email]: '', [password]: '', [remember]: false };

// Registration, Login values
export const formValues = {
	[email]: {
		id: 'emailid',
		label: 'Email',
		type: 'email',
		name: email,
		description: 'Email Desc',
	},
	password: {
		id: 'passwordid',
		label: 'Password',
		type: 'password',
		name: password,
		description: 'Password Desc',
	},
	confPassword: {
		id: 'confPasswordid',
		label: 'Password Again',
		type: 'password',
		name: confPassword,
		description: 'Password Desc',
	},
	phonenumber: {
		id: 'phonenumberid',
		label: 'Phone Number',
		type: 'tel',
		name: phonenumber,
	},
	fulllname: {
		id: 'fullnameid',
		label: 'Full Name',
		type: 'text',
		name: fullname,
	},
	sex: { // Gender
		id: 'sexid',
		label: 'Man or Woman',
		type: 'text',
		name: sex,
		data: [{ ...primarySex }, { ...secondarySex }],
	},
	agree: { // Agree with terms
		id: 'agreeid',
		label: 'Agree to something',
		name: agree,
	},
	remember: { // Remember to be log in
		id: 'rememberid',
		label: 'Remember me',
		name: remember,
	},
};


// Handlers

// Email
export function handleEmail(mail, errors) {
	if (!mail) {
		errors.email = 'Email is required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail)) {
		errors.email = 'Invalid email address';
	}
}

// Password
export function handlePassword(pass, errors) {
	if (pass === '') {
		errors.password = 'Password is required';
	} else if (pass.length < 3) {
		errors.password = 'Password must be 3 characters at minimum';
	}
}

// Confirm Password
export function handleConfPassword(pass, confPass, errors) {
	if (pass !== confPass) {
		errors.confPassword = 'Passwords does not match';
	}
}

// Phone Number
export function handlePhoneMatch(phone, errors) {
	const phoneMatch = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
	if (phone === '') {
		errors.phonenumber = 'Empty phone number';
	} else if (!phoneMatch.test(phone)) {
		errors.phonenumber = 'Phone number is not correct';
	}
}

// Full name
export function handleFullName(name, errors) {
	if (name === '') {
		errors.fullname = 'Name is empty';
	}
}

// Agree
export function handleAgree(agr, errors) {
	if (agr === false) {
		errors.agree = 'Agree failed';
	}
}
