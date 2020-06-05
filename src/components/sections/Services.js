import React from 'react';
import styled from 'styled-components/macro';

import banner from 'assets/header.jpg';
import Icon from 'components/Icon';


export const Services = ({ data }) => {
	const { title, subtitle, percent, icon, texts} = data;
	const textList = texts.map( (text, i) => {
		return (
			<li key={i}>
				<IconBox><Icon name={icon} /></IconBox>
				{text}
			</li>
		)
	})
	return (
		<ServicesWrapper>
			<div className="container">
				<ServicesBox>
					<ServicesBoxLeft>
						<h1 className="title">{title}</h1>
						<h2 className="subtitle"><span>{percent}<i>%</i></span> <br /> {subtitle}</h2>
					</ServicesBoxLeft>
					<ServicesBoxRight>
						<ul>
							{textList}
						</ul>
					</ServicesBoxRight>
				</ServicesBox>
			</div>
		</ServicesWrapper>
	)
}
const ServicesWrapper = styled.div`
	width: 100%;
	margin-top: 70px;
	padding: 100px 0;
	background: url('${banner}') no-repeat center center;
	background-size: cover;
	transition: .4s linear;
	@media screen and (min-width: 768px) {
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
const ServicesBox = styled.div`
	display: flex;
	flex-direction: column;
	background: #fff;
	border-radius: 5px;
	overflow: hidden;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		border-radius: 10px;
	}
`;
const ServicesBoxLeft = styled.div`
	background: #d4d4d4;
	padding: 40px 20px;
	@media screen and (min-width: 768px) {
		width: 40%;
		padding: 40px;
	}
	& h1 {
		max-width: 300px;
		font-size: 2rem;
		@media screen and (min-width: 768px) {
			max-width: unset;
			font-size: 3rem;
		}
	}
	& h2 {
		font-size: 1.6rem;
		margin: 15px 0 0 0;
		@media screen and (min-width: 768px) {
			font-size: 2rem;
		}
		& span {
			font-size: 4.8rem;
			@media screen and (min-width: 768px) {
				font-size: 7rem;
			}
			& i {
				font-size: 3.6rem;
			}
		}
	}
`;
const ServicesBoxRight = styled.div`
	padding: 50px 20px;
	@media screen and (min-width: 768px) {
		width: 60%;
		padding: 40px;
	}
	& ul {
		list-style: none;
		& li {
			font-size: 1.2rem;
			line-height: 2rem;
			display: flex;
			align-items: flex-start;
			padding: 7px 0;
			max-width: 550px;
			@media screen and (min-width: 768px) {
				font-size: 1.6rem;
				line-height: 2rem;
				padding: 10px 0;
			}
		}
	}
`;
const IconBox = styled.div`
	width: 10px;
	min-width: 10px;
	margin: 5px 10px 0 0;
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (min-width: 768px) {
		// min-width: 19px;
	}
	& svg {
		width: 100%;
	}
`;