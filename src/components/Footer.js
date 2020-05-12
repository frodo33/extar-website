import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import { Logo } from 'components/Logo';

export const Footer = () => {
	return (
		<FooterWrapper>
			<div className="container">
				<Logo />
				<NavFooterWrapper>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/'>Nasze Apartamenty</Link>
					</li>
					<li>
						<Link to='/'>Ceny</Link>
					</li>
					<li>
						<Link to='/'>FAQ</Link>
					</li>
					<li>
						<Link to='/'>Kontakt</Link>
					</li>
				</NavFooterWrapper>
				<Legal>Copyright <a href='/'>Extar.pl</a> powered by Zakoduj.com</Legal>
			</div>
		</FooterWrapper>
	)
}
const FooterWrapper = styled.footer`
	width: 100%;
 	box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
	padding: 30px 0 10px 0;
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

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
const Legal = styled.p`
	margin: 30px 0 0 0;
	font-size: 1.2rem;
	& a {
		text-decoration: none;
		color: black;
	}
`;