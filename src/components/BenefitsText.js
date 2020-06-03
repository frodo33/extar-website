import React, { useState } from 'react';
import styled from 'styled-components/macro';


export const BenefitsText = ({ title, text, active }) => {
	return (
		<TextWrapper active={active}>
			<h2>{title}</h2>
			<Description>{text}</Description>
		</TextWrapper>
	)
}

const TextWrapper = styled.div`
	position: absolute;
	line-height: 2.5rem;
	font-size: 1.2rem;
	padding: 15px 10px;
	opacity: 0;
	z-index: -1;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	max-width: 1000px;
	${ ({ active }) => active && visibleDescription }
	@media screen and (min-width: 768px) {
		font-size: 1.6rem;
		padding: 15px 30px;
	}
	@media screen and (min-width: 1280px) {
		line-height: 3.5rem;
    	font-size: 2rem;
	}
`;
const visibleDescription = `
	transition: .2s ease-in-out;
	position: relative;
	opacity: 1;
	z-index: 1;
`;
const Description = styled.p`
	
`;