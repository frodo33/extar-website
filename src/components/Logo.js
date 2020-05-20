import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Logo = ({ path, setOpen }) => {
	return (
		<LogoWrapper onClick={ () => typeof setOpen === 'function' && setOpen(false) }>
			<Link to='/'>
				<img src={ require(`assets/${path}`) } alt='' />
			</Link>
		</LogoWrapper>
	)
}

const LogoWrapper = styled.div`
	max-width: 80px;
	@media screen and (min-width: 768px) {
		min-width: 80px;
		max-width: 100px;
	}
	& a {
		& img {
			width: 100%;
		}
	}
`;