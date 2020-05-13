import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import logo from 'assets/logo.png'

export const Logo = ({ setOpen }) => {
	return (
		<LogoWrapper onClick={ () => typeof setOpen === 'function' && setOpen(false) }>
			<Link to='/'>
				<img src={logo} alt='logo'/>
			</Link>
		</LogoWrapper>
	)
}

const LogoWrapper = styled.div`
	// min-width; 10px;
	max-width: 80px;
	@media screen and (min-width: 768px) {
		min-width; 80px;
		max-width: 100px;
	}
	& a {
		& img {
			width: 100%;
		}
	}
`;