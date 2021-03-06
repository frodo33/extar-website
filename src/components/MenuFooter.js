import React from 'react';
import styled from 'styled-components/macro';
import PATHS from 'settings/paths.json';

import { NavItem } from 'components/NavItem';

export const MenuFooter = () => {
	const links = PATHS.map( (el,i) => <NavItem path={el.path} name={el.name} key={i} /> );
	return (
		<NavFooterWrapper>
			{links}
		</NavFooterWrapper>
	)
}

const NavFooterWrapper = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	list-style: none;
	text-decoration: none;
	margin: 20px 0;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
	& li {
		position: relative;
		text-align: center;
		font-size: 1.6rem;
		margin: 10px 0;
		@media screen and (min-width: 768px) {
			margin: 0px 20px;
		}
		& a {
			text-decoration: none;
			color: #000;
			padding: 20px 0;
		}
	}
`;