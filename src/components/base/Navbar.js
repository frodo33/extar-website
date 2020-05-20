import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components/macro';

import DATA from 'settings/data.json';

import { Logo } from 'components/Logo';
import { MenuDesktop } from 'components/MenuDesktop';
import { MenuMobile } from 'components/MenuMobile.js';
import { Hamburger } from 'components/Hamburger';
import { NavContact } from 'components/NavContact';

export const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [pageTop, setPageTop] = useState(true);
	
	useLayoutEffect( () => {
		const handleScroll = () => {
			const position = window.pageYOffset;
			position > 0 ? setPageTop(false) : setPageTop(true);
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	console.log(DATA.logo,'navbar')
	return (
		<Nav pageTop={pageTop}>
			<div className="container">
				<NavWrapper>
					<Logo path={DATA.logo} />
					<MenuDesktop />
				</NavWrapper>
				<NavContact data={DATA.contactSection}/>
				<Hamburger open={open} setOpen={setOpen} />
				<MenuMobile path={DATA.logo} open={open} setOpen={setOpen} />
			</div>
		</Nav>
	)
}

const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100px;
	max-height: 100px;
	background: #fff;
	box-shadow: 0px 4px 54px rgba(0, 0, 0, 0.25);
	z-index: 999;
	transition: .2s ease-in-out;
	${ ({ pageTop }) => pageTop ? null : scale}
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
const scale = `
	max-height: 70px;
`;
const NavWrapper = styled.div`
	display: flex;
	align-items: center;
`;

