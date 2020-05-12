import React from 'react';
import styled from 'styled-components/macro';

import Icon from 'components/Icon';

const SectionTitle = styled.h1`
	font-size: 2.4rem;
	margin: 30px 0;
	@media screen and (min-width: 768px) {
		font-size: 3.2rem;
		margin: 50px 0;
	}
`;


export const Benefits = () => {
	return (
		<BenefitsSection>
			<div className="container">
				<SectionTitle>Jakie korzyści płyną</SectionTitle>
				<IconsWrapper>
					<IconBox>
						<Icon name='report' />
					</IconBox>
					<IconBox>
						<Icon name='report' />
					</IconBox>
					<IconBox>
						<Icon name='report' />
					</IconBox>
					<IconBox>
						<Icon name='report' />
					</IconBox>
					<IconBox>
						<Icon name='report' />
					</IconBox>
				</IconsWrapper>
				<DescWrapper>
					<Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.</Description>
					<Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.</Description>
					<Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.</Description>
					<Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.</Description>
					<Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.</Description>
				</DescWrapper>
			</div>
		</BenefitsSection>
	)
}

const BenefitsSection = styled.section`
	width: 100%;
	@media screen and (min-width: 768px) {
		margin: 50px 0;
	}
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const IconsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
`;

const IconBox = styled.div`
	width: 100px;
	height: 100px;
	margin: 5px 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: springgreen;
	border-radius: 50%;
	transition: .2s ease-in-out;
	cursor: pointer;
	& svg {
		width: 45%;
	}
	@media screen and (min-width: 1024px) {
		width: 120px;
		height: 120px;
		margin: 0px 30px;
		&:hover {
			transform: scale(1.1);
		}
	}
`;

const DescWrapper = styled.div`
	width: 100%;
	min-height: 300px;
	box-shadow: 9px 4px 54px rgba(0, 0, 0, 0.25);
	text-align: center;
	margin: 40px 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const visibleDescription = `
	transition: .2s ease-in-out;
	position: relative;
	opacity: 1;
`;
const Description = styled.p`
	position: absolute;
	// width: 90%;
	// top: 50%;
	// left: 50%;
	// transform: translate(-50%,-50%);
	line-height: 2.5rem;
	font-size: 1.2rem;
	padding: 15px 10px;
	opacity: 0;
	&:first-child {
		${visibleDescription}
	}
	@media screen and (min-width: 768px) {
		font-size: 1.6rem;
		padding: 15px 30px;
	}
	@media screen and (min-width: 1280px) {
		line-height: 3.5rem;
    	font-size: 2rem;
	}
`;