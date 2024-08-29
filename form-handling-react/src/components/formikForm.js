import { Formik, Field, Form } from 'formik';
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
			<Form>
				<Field name='username' type='text' />
				<Field name='email' type='email' />
				<Field name='password' type='password' />
				<button type='submit'>Submit</button>
			</Form>
		</Formik>
	);
}
export default formikForm;
