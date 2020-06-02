import React, { useState } from 'react';
import styled from 'styled-components/macro';
import firebase from 'firebase';

import { SectionTitle } from 'components/SectionTitle';


export const Contact = ({ data }) => {
	const db = firebase.firestore();

	const { title, tip, legal, number, email} = data;
	const [emailVal, setEmailVal] = useState('');

	const getDate = () => {
		let today = new Date();
		let dd = String(today.getDate()).padStart(2, '0');
		let mm = String(today.getMonth() + 1).padStart(2, '0');
		let yyyy = today.getFullYear();
		
		today = mm + '/' + dd + '/' + yyyy;
		return today
	}

	const handleJoin = (e) => {
		e.preventDefault();
		const date = getDate()
		db.collection('clients')
		.add({
			date: date,
			email: emailVal
		})
		.then( res => {
			setEmailVal('');
		})
	}
	return (
		<ContactSection>
			<div className="container">
				<SectionTitle title={title} withTip={true} />
				<ContactTip>{tip}</ContactTip>
				<ContactWrapper>
					<Form
						onSubmit={handleJoin}>
						<div className="form-wrapper">
							<div className='field'>
								<input 
									type="email" 
									name="email" 
									id="email"
									value={emailVal}
									onChange={ (e) => setEmailVal(e.target.value) } />
							</div>
							<div className='legal'>
								<input type="checkbox" name="checkbox" id="checkbox" />
								<label htmlFor="checkbox">{legal}</label>
							</div>
						</div>
						<button 
							type='submit' 
							className='submit-btn'
							>Zapisz
						</button>
					</Form>
					<Or>lub</Or>
					<Details>
						<a href={`tel:+48 ${number}`}>+48 {number}</a>
						<a href={`mailto:${email}`}>{email}</a>
					</Details>
				</ContactWrapper>
			</div>
		</ContactSection>
	)
}
const ContactSection = styled.section`
	width: 100%;
	@media screen and (min-width: 768px) {
		margin: 50px 0;
	}
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const ContactTip = styled.p`
	font-size: 1.2rem;
	max-width: 150px;
	text-align: center;
`;

const ContactWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 50px 0;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

const Form = styled.form`
	position: relative;
	display: flex;
	width: 100%;
	max-width: 500px;
	margin: 0 0 30px 0;
	@media screen and (min-width: 768px) {
		margin: 0px;
	}

	.form-wrapper {
		width: 70%;
		@media screen and (min-width: 768px) {
			position: relative;
		}
		.field {
			border: 1px solid #000;
			& input {
				width: 100%;
				min-height: 35px;
			}
		}
		.legal {
			position: absolute;
			top: 120%;
			left: 0;
			width: 100%;
			display: flex;
			align-items: center;
			& input {}
			& label {
				font-size: 1.2rem;
				padding-left: 5px;
			}
		}
	}
	.submit-btn {
		width: 30%;
		margin-left: 10px;
		border: none;
		outline: none;
		background: #000;
		color: #fff;
	}
`;

const Or = styled.span`
	font-size: 3rem;
	margin: 30px 30px;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 1.6rem;
	white-space: nowrap;
	& a {
		text-decoration: none;
		color: #000;
	}
	& a:first-child {
		padding-bottom: 5px;
	}
`;