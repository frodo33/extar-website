import React from 'react';
import styled from 'styled-components/macro';

export const Hamburger = ({ open, setOpen }) => {
	return (
		<HamburgerBtn 
			open={open}
			onClick={ () => setOpen(!open)}>
			<span></span>
			<span></span>
			<span></span>
		</HamburgerBtn>
	)
}

const HamburgerBtn = styled.div`
	width: 100%;
	height: 100%;
	min-width: 60px;
	max-width: 70px;
	min-height: 40px;
	max-height: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	// background: #181818;
	background: transparent;
	cursor: pointer;
	order: -1;

	& span {
		width: 40%;
		height: 3px;
		margin: 3px 0;
		background: rgba(0,0,0,.7);
		border-radius: 15%;
		clip-path: inset(0% 0 0 0);
	}
	span:first-child {
		transition: .6s ease-in-out;
		transform: translate(0%,0%) rotate(0deg);
		// transform: ${ ({ open }) => open ? 'translate(0%,300%) rotate(45deg)' : 'translate(0%,0%) rotate(0deg)' };
	}
	span:nth-child(2) {
		transition: .2s ease-in-out;
		// clip-path: inset(0 ${ ({ open }) => open ? 50 : 0 }% 0 ${ ({ open }) => open ? 50 : 0 }%);
	}
	span:last-child {
		transition: .6s ease-in-out;
		transform: translate(0%,0%) rotate(0deg);
		// transform: ${ ({ open }) => open ? 'translate(0%,-300%) rotate(-585deg)' : 'translate(0%,0%) rotate(0deg)' };
	}
	@media screen and (min-width: 768px) {
		display: none;
	}
`;