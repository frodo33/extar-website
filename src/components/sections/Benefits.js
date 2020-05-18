import React, { useState } from 'react';
import styled from 'styled-components/macro';

import Icon from 'components/Icon';
import { SectionTitle } from 'components/SectionTitle';

export const Benefits = ({ data }) => {
	const { title, iconsArr } = data;

	const staticIcons = iconsArr.map( (el, i) => {
		return (i === 0) 
		? <IconBox active={true} key={i} onMouseEnter={ (event) => handleHover(event, i) } > <Icon name={el.iconName} /> </IconBox>
		: <IconBox key={i} onMouseEnter={ (event) => handleHover(event, i) } > <Icon name={el.iconName} /> </IconBox>
	});

	const staticTexts = iconsArr.map( (el, i) => {
		return (i === 0) 
			? <Description active={true} key={i}>{el.text}</Description>
			: <Description key={i}>{el.text}</Description>
	});

	const [icons, setIcons] = useState(staticIcons);
	const [texts, setTexts] = useState(staticTexts);

	const handleHover = (e, ind) => {
		e.preventDefault();

		const currentIcons = iconsArr.map( (el, i) => {
			return (i === ind) 
				? <IconBox key={i} active={true} onMouseEnter={ (event) => handleHover(event, i) } > <Icon name={el.iconName} /> </IconBox>
				: <IconBox key={i} onMouseEnter={ (event) => handleHover(event, i) } > <Icon name={el.iconName} /> </IconBox>
		});

		const currentTexts = iconsArr.map( (el, i) => {
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
				<SectionTitle title={title} />
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
	${ ({ active }) => active && 'transform: scale(1.1);' }
	& svg {
		width: 45%;
	}
	@media screen and (min-width: 1024px) {
		width: 120px;
		height: 120px;
		margin: 0px 30px;
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