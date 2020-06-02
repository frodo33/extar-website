import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { DashboardItem } from 'components/DashboardItem';
import firebase from 'firebase';

import Icon from 'components/Icon';

// const signOut = firebase.auth().signOut();

export const Dashboard = () => {
	const [elements, setElements] = useState('');

	useEffect( () => {
		const getData = () => {
			const db = firebase.firestore();
			db.collection('clients').onSnapshot( snap => setElements(snap.docs) )
		}
		getData();
	}, [])
	const list = elements.length !== 0 && elements.map( (el,ind) => {
		const data = el.data();
		return <DashboardItem date={data.date} email={data.email} key={ind} />
	})
	// const list = elements.map( el => {

	// })
	console.log(elements, 'here')
	return (
		<>
			<Logout onClick={ () => firebase.auth().signOut()}>
				<Icon name={'envelope'} />
			</Logout>
			<DashboardWrapper>
				<LoginTitle>Lista:</LoginTitle>
				{list}
			</DashboardWrapper>
		</>
	)
}
const DashboardWrapper = styled.div`
	width: 90%;
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
	padding: 20px;
`;
const LoginTitle = styled.h2`
	font-size: 2.4rem;
	margin: 20px 0;
	align-self: flex-start;
`;
const Logout = styled.div`
	width: 35px;
	margin: 10px;
`;