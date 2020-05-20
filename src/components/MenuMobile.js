import React from 'react';
import styled from 'styled-components/macro';
import PATHS from 'settings/paths.json';

import { Logo } from 'components/Logo';
import { MobileNavItem } from 'components/MobileNavItem';

export const MenuMobile = ({ path, open, setOpen }) => {
	const links = PATHS.map( (el,i) => <MobileNavItem path={el.path} name={el.name} key={i} setOpen={setOpen} /> );
	return (
		<>
			<Overlay 
				open={open} 
				onClick={ () => setOpen(false)} >
			</Overlay>
			<MenuMobileWrapper 
				open={open} >
				<Logo
					path={path}
					setOpen={setOpen} />
				
				<MenuMobileBox>{links}</MenuMobileBox>
			</MenuMobileWrapper>
		</>
	)
};

const overlayActive = `
	opacity: 1;
	pointer-events: auto;
`;

const Overlay = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0,0,0,0.7);
	opacity: 0;
	pointer-events: none;
	transition: .4s linear;
	${ ({ open }) => open ? `${overlayActive}` : null }
`;
const slideIn = `
	transform: translate(0,0);
`;
const MenuMobileWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 70%;
	height: 100%;
	background: #fff;
	padding: 30px 20px;
	transform: translate(-100%,0);
	transition: .4s ease-in-out;
	${ ({ open }) => open ? `${slideIn}` : null }
`;
const MenuMobileBox = styled.ul`
	margin: 20px 0;
	& li {
		position: relative;
		width: 100%;
		font-size: 1.4rem;
		list-style: none;
		padding: 10px 0;
		&:before, &:after {
			content: '';
			position: absolute;
			width: 5px;
			height: 1px;
			top: 50%;
			left: 100%;
			transform: translate(0,-50%);
			transform-origin: 100% 50%;
			background: #000;
			transform: rotate(45deg)
		}
		&:after {
			transform: rotate(-45deg)
		}
		& a {
			text-decoration: none; 
			color: #000;
		}
	}
`;