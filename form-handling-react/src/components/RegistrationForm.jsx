import { useState } from 'react';

export const RegistrationForm = () => {
	const [username, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	
	
	
	//event handlers for form
	const userNameChange = (e) => {
		setUserName(e.target.value);
		e.preventDefault();
	};
	const emailChange = (e) => {
		setEmail(e.target.value);
		e.preventDefault();
	};
	const passwordChange = (e) => {
		setPassword(e.target.value);
		e.preventDefault();
	};


	// submit form
	const formSubmit = (e) => {

		// form validation
		if (userName.length < 3) {
			setError('Please enter a username');
		}
		if (!email.includes('@') || !email.includes('.')) {
			setError('Please enter a Valid email');
		}
		if (password.length < 8) {
			setError('Please enter a Strong Password');
		}

		e.preventDefault();
		setEmail('');
		setPassword('');
		setUserName('');
	};

	return (
		<div>
			Registration Form
			<form onSubmit={formSubmit}>
				<label>User Name:</label>
				<input
					type='text'
					placeholder='User Name'
					value={username}
					onChange={userNameChange}
				/>
				<label>Email:</label>
				<input
					type='email'
					placeholder='Enter your email address'
					value={email}
					onChange={emailChange}
				/>
				<label>Password:</label>
				<input type='password' value={password} onChange={passwordChange} />
				<h3>{error}</h3>
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
};
