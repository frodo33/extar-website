import React from 'react';
import styled from 'styled-components/macro';
import { Link, withRouter } from 'react-router-dom';

const DesktopNavItem = ({ path, name, location }) => {
	const isActive = location.pathname === path ? true : false;
	return (
		<NavItemWrapper isActive={isActive}>
			<Link to={path}>{name}</Link>
		</NavItemWrapper>
	)
}

export const DesktopNavItemWithRouter = withRouter(DesktopNavItem);

const NavItemWrapper = styled.li`
	position: relative;
	text-align: center;
	font-weight: 500;
	margin: 0px 20px;
	font-size: 1.4rem;
	white-space: nowrap;
	@media screen and (min-width: 1024px) {
		font-size: 1.6rem;
	}
	& a {
		text-decoration: none;
		white-space: nowrap;
		color: #000;
		padding: 20px 0;
	}
	&:before {
		content: '';
		position: absolute;
		top: 150%;
		left: 50%;
		transform: translate(-50%,0);
		min-width: 0%;
		height: 3px;
		background: #DEAD54;
		transition: .2s ease-in-out;
	}
	&:hover:before {
		min-width: 70%;
	}
	${ ({ isActive }) => isActive && active }
`;

const active = `
	pointer-events: none;
	&:before {
		min-width: 100%;
	}
`;