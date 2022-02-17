import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

interface InitialFormState {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
	password: string;
	confirmPassword: string;
}

const INITIAL_FORM_STATE: InitialFormState = {
	firstName: '',
	lastName: '',
	email: '',
	age: undefined,
	password: '',
	confirmPassword: '',
};

const FORM_VALIDATION = Yup.object().shape({
	firstName: Yup.string()
		.required('Required')
		.matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
	lastName: Yup.string()
		.required('Required')
		.matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
	email: Yup.string().email('Invalid email').required('Required'),
	age: Yup.number().typeError('Please enter valid number'),
	password: Yup.string().required('Required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Password must match')
		.required('Required'),
});

const TextfieldWrapper = (props: any) => {
	const [field, mdata] = useField(props.name);
	const configTextfield = {
		fullWidth: props.fullWidth || true,
		variant: props.variant || 'outlined',
		...field,
		...props,
	};

	if (mdata && mdata.touched && mdata.error) {
		configTextfield.error = true;
		configTextfield.helperText = mdata.error;
	}

	return <TextField {...configTextfield} />;
};

const RegisterPage: React.FC = () => {
	return (
		<>
			<Typography variant="h3" mb={4}>
				Register
			</Typography>
			<Formik
				initialValues={{ ...INITIAL_FORM_STATE }}
				validationSchema={FORM_VALIDATION}
				onSubmit={values => console.log(values, 'values')}
				// validateOnChange={false}
				// validateOnBlur={false}
			>
				{formik => {
					console.log(formik);
					return (
						<Form>
							<Grid container spacing={2} mb={2}>
								<Grid item xs={6}>
									<TextfieldWrapper label="First Name" name="firstName" />
								</Grid>
								<Grid item xs={6}>
									<TextfieldWrapper label="Last Name" name="lastName" />
								</Grid>
							</Grid>
							<Grid container spacing={2} mb={2}>
								<Grid item xs={6}>
									<TextfieldWrapper label="Email" name="email" />
								</Grid>
								<Grid item xs={6}>
									<TextfieldWrapper label="Age" name="age" />
								</Grid>
							</Grid>
							<Grid container spacing={2} mb={2}>
								<Grid item xs={6}>
									<TextfieldWrapper type="password" label="Pasword" name="password" />
								</Grid>
								<Grid item xs={6}>
									<TextfieldWrapper type="password" label="Repeat Password" name="confirmPassword" />
								</Grid>
							</Grid>
							<Button type="submit" color="primary" variant="outlined">
								Submit
							</Button>
						</Form>
					);
				}}
			</Formik>
		</>
	);
};

export default RegisterPage;
