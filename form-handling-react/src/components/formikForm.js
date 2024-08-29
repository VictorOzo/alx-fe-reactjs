import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

function formikForm() {
	const UserSchema = yup.create().shape({
		username: yup.string().required(),
		email: yup.string().email().required(),
		password: yup.string().min(8).max(12).required(),
	});

	return (
		<Formik
			initialValues={{ username: '', email: '', password: '' }}
			validationSchema={UserSchema}
			onSubmit={(values) => {
				// same shape as initial values
				console.log(values);
			}}>
			{({ errors, touched }) => (
				<Form>
					{/* User Name */}
					<Field name='username' type='text' />
					{errors.username && touched.username ? (
						<div>{errors.username}</div>
					) : null}
					<ErrorMessage name='username' />

					{/* Email */}
					<Field name='email' type='email' />
					{errors.email && touched.email ? (
						<div>{errors.email}</div>
					) : null}
					<ErrorMessage name='email' />

					{/* Password */}
					<Field name='password' type='password' />
					{errors.password && touched.password ? (
						<div>{errors.password}</div>
					) : null}
					<ErrorMessage name='password' />
					<button type='submit'>Submit</button>
				</Form>
			)}
		</Formik>
	);
}
export default formikForm;
