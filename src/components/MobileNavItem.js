import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';


export const MobileNavItem = ({ path, name, setOpen }) => {
	return (
		<NavItemWrapper onClick={ () => setOpen(false) }>
			<Link to={path}>{name}</Link>
		</NavItemWrapper>
	)
};
const NavItemWrapper = styled.li`
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
`;