import React from 'react';
import styled from 'styled-components/macro';

import Icon from "components/Icon";

export const NavContact = () => {
	return (
		<>
			<NavContactWrapper>
				<span>tel: <a href='tel:12332112'>123 333 112</a></span>
				<span>email: <a href='mailto:test@test.pl'>test@test.pl</a></span>
			</NavContactWrapper>
			<NavIconWrapper>
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

const NavIconWrapper = styled.div`
	max-width: 35px;
	@media screen and (min-width: 768px) {
		display: none;
	}
`;