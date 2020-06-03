import React, { useState } from 'react';
import styled from 'styled-components/macro';

import firebase from 'firebase';

export const Login = () => {
	const auth = firebase.auth();


	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const handleSubmit = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email,password)
		.then( cred => {
			console.log(cred.user)

		})
		.catch( err => {
			console.log(err.message)
		})
	}
	const logout = () => {
		auth.signOut().then(()=>{
			console.log('signed out')
		})
	}
	return (
		<LoginBox>
			<LoginTitle>Zaloguj się</LoginTitle>
			<LoginForm>
				<FormField>
					<label htmlFor="email">Login</label>
					<input
						type='email'
						id='email'
						onChange={ e => setEmail(e.target.value) }
						 />
				</FormField>
				<FormField>
					<label htmlFor="password">Password</label>
					<input
						type='password'
						id='password'
						onChange={ e => setPassword(e.target.value) }
						 />
				</FormField>
				<SubmitBtn
					type='submit'
					onClick={handleSubmit} >
					login
				</SubmitBtn>
			</LoginForm>
			<button onClick={logout}>signout</button>
		</LoginBox>
	)
}
const LoginBox = styled.div`
	width: 90%;
	max-width: 500px;
	min-height: 300px;
	background: #fff;
	box-shadow: 10px 25px 73px rgba(0, 0, 0, 0.35);
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const LoginTitle = styled.h2`
	font-size: 2.4rem;
	margin: 20px 0;
`;
const LoginForm = styled.form`
	width: 100%;
	padding: 0px 30px;

`;
const FormField = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	flex-direction: column;
	margin: 40px 0;
	border-bottom: 1px solid black;
	& label {
		font-size: 1.2rem;
	}
	& input {
		font-size: 1.8rem;
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		background: transparent;
	}
`;
const SubmitBtn = styled.button`
	font-size: 2.4rem;
`;