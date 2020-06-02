import React from 'react';
import styled from 'styled-components/macro';

export const DashboardItem = ({ date, email }) => {
	// console.log(date,email,'item')
	return (
		<Item>
			<span>{date}</span>
			<p>{email}</p>
		</Item>
	)
}
const Item = styled.div`
	width: 100%;
	font-size: 1.8rem;
	padding: 20px 0;
	align-self: flex-start;
	display: flex;
	border-bottom: 2px solid #000;
	& span {}
	& p {
		margin: 0 30px;
	}
`;