import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import { Logo } from 'components/Logo';
import { MenuDesktop } from 'components/MenuDesktop';
import { Hamburger } from 'components/Hamburger';
import { NavContact } from 'components/NavContact';


const paths = [
	{
		path: '/',
		name: 'Home'
	},
	{
		path: '/apartments',
		name: 'Nasze apartamenty'
	},
	{
		path: '/price-list',
		name: 'Ceny'
	},
	{
		path: '/faq',
		name: 'FAQ'
	},
	{
		path: '/contact',
		name: 'Kontakt'
	},
]

export const Navbar = () => {
	// const list = paths.map( (el,i) => <NavItem path={el.path} name={el.name} key={i} />)
	return (
		<Nav>
			<div className="container">
				<NavWrapper>
					<Logo />
					<MenuDesktop />
				</NavWrapper>

				<NavContact />
				<Hamburger />
			</div>
		</Nav>
	)
}



const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 70px;
	background: #fff;
	box-shadow: 0px 4px 54px rgba(0, 0, 0, 0.25);
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
const NavWrapper = styled.div`
	display: flex;
	align-items: center;
`;

