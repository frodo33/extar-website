import React from 'react';
import styled from 'styled-components/macro';
import PATHS from 'settings/paths.json';

import { DesktopNavItemWithRouter } from 'components/DesktopNavItem';

export const MenuDesktop = () => {
	const links = PATHS.map( (el,i) => <DesktopNavItemWithRouter path={el.path} name={el.name} key={i} /> );
	return (
		<MenuDesktopWrapper>
			{links}
		</MenuDesktopWrapper>
	)
}


const MenuDesktopWrapper = styled.ul`
	display: none;
	justify-content: space-between;
	list-style: none;
	text-decoration: none;
	margin: 0 0 0 15px;
	@media screen and (min-width: 768px) {
		display: flex;
	}
	@media screen and (min-width: 1024px) {
		margin: 0 0 0 50px;
	}
`;