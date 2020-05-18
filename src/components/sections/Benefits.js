import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import Icon from 'components/Icon';
import { SectionTitle } from 'components/SectionTitle';

const benefits = [
	{
		iconName: 'report',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, esse, beatae. Quaerat ullam voluptate unde quos cumque molestiae dolorem quidem officia magnam, sapiente quasi nam labore totam, ea laborum nisi necessitatibus mollitia quae accusantium omnis! Atque in autem animi perspiciatis, eveniet aperiam nisi non accusamus, qui mollitia eligendi excepturi dolorum!',
	},
	{
		iconName: 'phone',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, esse, beatae. Quaerat ullam voluptate unde quos cum labore totam, ea laborum nisi necessitatibus mollitia quae accusantium omnis! Atque in autem animi perspiciatis, eveniet aperiam nisi non accusamus, qui mollitia eligendi excepturi dolorum!',
	},
	{
		iconName: 'message',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, esse, beatae.  nisi necessitatibus mollitia quae accusantium omnis! Atque in autem animi perspiciatis, eveniet aperiam nisi non accusamus, qui mollitia eligendi excepturi dolorum!',
	},
	{
		iconName: 'envelope',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, esse, beatae. , eveniet aperiam nisi non accusamus, qui mollitia eligendi excepturi dolorum!',
	},
	{
		iconName: 'trash',
		text: 'eveniet aperiam nisi non accusamus, qui mollitia eligendi excepturi dolorum!',
	}
]

export const Benefits = () => {
	const staticIcons = benefits.map( (el, i) => {
		return (i === 0) 
		? <IconBox active={true} key={i} onMouseEnter={ (event) => handleHover(event, i) } > <Icon name={el.iconName} /> </IconBox>
		: <IconBox key={i} onMouseEnter={ (event) => handleHover(event, i) } > <Icon name={el.iconName} /> </IconBox>
	});
	const staticTexts = benefits.map( (el, i) => {
		return (i === 0) 
			? <Description active={true} key={i}>{el.text}</Description>
			: <Description key={i}>{el.text}</Description>
	});

	const [icons, setIcons] = useState(staticIcons);
	const [texts, setTexts] = useState(staticTexts);

	const handleHover = (e, ind) => {
		e.preventDefault();

		const currentIcons = benefits.map( (el, i) => {
			return (i === ind) 
				? <IconBox key={i} active={true} onMouseEnter={ (event) => handleHover(event, i) } > <Icon name={el.iconName} /> </IconBox>
				: <IconBox key={i} onMouseEnter={ (event) => handleHover(event, i) } > <Icon name={el.iconName} /> </IconBox>
		});
		const currentTexts = benefits.map( (el, i) => {
			return (i === ind) 
				? <Description active={true} key={i}>{el.text}</Description>
				: <Description key={i}>{el.text}</Description>
		});

		setIcons(currentIcons);
		setTexts(currentTexts);
	}
	return (
		<BenefitsSection>
			<div className="container">
				<SectionTitle title={'Jakie korzyści płyną'} />
				<IconsWrapper>
					{icons}
				</IconsWrapper>
				<DescWrapper>
					{texts}
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
		${ ({ active }) => active && 'transform: scale(1.1);' }
		// &:hover {
		// 	transform: scale(1.1);
		// }
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