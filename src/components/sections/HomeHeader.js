import React from 'react';
import styled from 'styled-components/macro';

import banner from 'assets/header.jpg';


export const HomeHeader = () => {
	return (
		<HomeHeaderSection>
			<div className="container">
				<HeaderTitle>Lorem ipsum dolor sit amet.</HeaderTitle>
			</div>
		</HomeHeaderSection>
	)
}

const HomeHeaderSection = styled.header`
	width: 100%;
	height: 400px;
	margin-top: 70px;
	background: url('${banner}') no-repeat center center;
	background-size: cover;
	transition: .4s linear;
	@media screen and (min-width: 768px) {
		height: 700px;
		background-attachment: fixed;
		background-size: unset;
		background-position: center 0;
	}
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
const HeaderTitle = styled.h1`
	font-size: 3rem;
	color: #fff;
	text-align: center;
	transition: .4s linear;
	@media screen and (min-width: 768px) {
		font-size: 5rem;
	}
`;