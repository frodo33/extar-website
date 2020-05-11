import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const MenuDesktop = () => {
	return (
		<MenuDesktopWrapper>
			<MenuDesktopItem>
				<Link to='/'>Home</Link>
			</MenuDesktopItem>
			<MenuDesktopItem>
				<Link to='/'>Nasze Apartamenty</Link>
			</MenuDesktopItem>
			<MenuDesktopItem>
				<Link to='/'>Ceny</Link>
			</MenuDesktopItem>
			<MenuDesktopItem>
				<Link to='/'>FAQ</Link>
			</MenuDesktopItem>
			<MenuDesktopItem>
				<Link to='/'>Kontakt</Link>
			</MenuDesktopItem>
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


const MenuDesktopItem = styled.li`
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
	&.active {
		pointer-events: none;
		&:before {
			min-width: 100%;
		}
	}
`;