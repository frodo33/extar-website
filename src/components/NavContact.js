import React from 'react';
import styled from 'styled-components/macro';

import Icon from "components/Icon";

export const NavContact = ({ data }) => {
	const { number, email } = data;
	return (
		<>
			<NavContactWrapper>
				<span>tel: <a href={`tel:+48${number}`}>+48 {number}</a></span>
				<span>email: <a href={`mailto:${email}`}>{email}</a></span>
			</NavContactWrapper>
			<NavIconWrapper href={`tel:+48${number}`} >
				<Icon name="phone" fill={'#000'} />
			</NavIconWrapper>
		</>
	)
};


const NavContactWrapper = styled.div`
	display: none;
	flex-direction: column;
	align-items: flex-end;
	font-size: 1.2rem;
	margin-right: 15px;
	white-space: nowrap;
	@media screen and (min-width: 768px) {
		display: flex;
	}
	& span {
		& a {
			text-decoration: none;
			color: #000;
		}
	}
`;

const NavIconWrapper = styled.a`
	max-width: 35px;
	@media screen and (min-width: 768px) {
		display: none;
	}
`;