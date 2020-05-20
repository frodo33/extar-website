import React from 'react';
import styled from 'styled-components/macro';

import DATA from 'settings/data.json';

import { Logo } from 'components/Logo';
import { MenuFooter } from 'components/MenuFooter';

export const Footer = () => {
	return (
		<FooterWrapper>
			<div className="container">
				<Logo path={DATA.logo} />
				<MenuFooter />
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

const Legal = styled.p`
	margin: 30px 0 0 0;
	font-size: 1.2rem;
	& a {
		text-decoration: none;
		color: black;
	}
`;